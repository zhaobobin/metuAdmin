import { queryAdvancedProfile } from './service';

export default {
  namespace: 'advancedProfile',

  state: {
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
  },

  effects: {
    *fetchAdvanced(_, { call, put }) {
      const response = yield call(queryAdvancedProfile);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },

  reducers: {
    show(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
