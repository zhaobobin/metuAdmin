import { stringify } from 'qs';
import { routerRedux } from 'dva/router';
import { notification } from 'antd';

import { ENV, Storage, Request } from '@/utils';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';

export default {
  namespace: 'global',

  state: {
    loading: true,
    isAuth: false,
    status: undefined,
    type: '',
    currentUser: {},

    collapsed: false,
    notices: [],
    loadedAllNotices: false,
  },

  effects: {
    *register({ payload, callback }, { call, put }) {
      const res = yield call(
        params => Request('/user/register', { method: 'POST', body: params }),
        payload
      );
      if (res.code === 0) {
        yield put({
          type: 'changeLoginStatus',
          payload: {
            loading: false,
            isAuth: true,
            currentUser: res.data.detail,
          },
        });
        Storage.set(ENV.storage.token, res.data.token); //保存token
      }
      yield callback(res);
    },

    *login({ payload, callback }, { call, put }) {
      const res = yield call(
        params => Request('/user/login', { method: 'POST', body: params }),
        payload
      );
      yield callback(res);

      // Login successfully
      if (res.code === 0) {
        Storage.set(ENV.storage.lastTel, payload.mobile); // 保存mobile
        Storage.set(ENV.storage.token, res.data.token); // 保存token
        yield put({
          type: 'changeLoginStatus',
          payload: {
            currentAuthority: res.data.detail.type, // userType
            loading: false,
            isAuth: true,
            currentUser: res.data.detail,
          },
        });

        reloadAuthorized();
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      } else {
        notification.error({
          message: '错误提示',
          description: res.message,
        });
      }
    },

    *token({ payload }, { call, put }) {
      //没有本地存储，不校验token接口
      if (Storage.get(ENV.storage.token)) {
        const res = yield call(params => {
          return Request('/user/token', { method: 'POST', body: params });
        }, payload);

        if (res.code === 0) {
          yield put({
            type: 'changeLoginStatus',
            payload: {
              loading: false,
              isAuth: true,
              currentUser: res.data,
            },
          });
        } else {
          yield put({
            type: 'changeLoginStatus',
            payload: {
              loading: false,
              isAuth: false,
              currentUser: '',
            },
          });
        }
      } else {
        yield put({ type: 'changeLoading', payload: false });
      }
    },

    *logout(_, { put }) {
      Storage.remove(ENV.storage.token);
      yield put({
        type: 'changeLoginStatus',
        payload: {
          isAuth: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },

    // exp如果不为空：在查询时，先检查本地存储数据是否过期，再读取远程数据；并且在查询成功后，本地存储查询结果。
    *request({ url, method, payload, callback }, { call, put }) {
      let res,
        exp = payload.exp,
        storage = Storage.get(url);

      if (exp && storage) {
        res = storage;
      } else {
        res = yield call(params => {
          return Request(url, { method: method || 'POST', body: params });
        }, payload);
        if (res.code === 0 && exp) Storage.set(url, res);
      }

      //登录过期等
      if (res.code === 401) {
        Storage.remove(ENV.storage.token); //删除token
        notification.error({
          message: '提示',
          description: res.message,
        });
        yield put({
          type: 'changeLoginStatus',
          payload: {
            isAuth: false,
            userInfo: '',
          },
        });
        yield put(routerRedux.push({ pathname: '/' }));
      } else {
        yield callback(res);
      }
    },
  },

  reducers: {
    changeAppInfo(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        loading: false,
        isAuth: !!payload.currentUser,
        roleList: payload.roleList,
        category: payload.category,
        currentUser: payload.currentUser,
      };
    },
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        loading: payload.loading,
        type: payload.type,
        isAuth: payload.isAuth,
        currentUser: payload.currentUser,
      };
    },

    changeLayoutCollapsed(state, { payload }) {
      return {
        ...state,
        collapsed: payload,
      };
    },
  },

  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      return history.listen(({ pathname, search }) => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },
  },
};
