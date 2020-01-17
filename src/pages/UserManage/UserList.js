import React from 'react';
import { connect } from 'dva';
import { Button, Popconfirm } from 'antd';
import moment from 'moment';

import FormInit from '@/components/Form/FormInit';
import TableInit from '@/blocks/Table/BasicTable';

@connect(({ global }) => ({
  global,
}))
export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.ajaxFlag = true;
    this.state = {
      queryParams: {
        userType: 'user',
      },
      apiList: '/api/UserList',
      apiAdd: '/api/UserAdd',
      apiEdit: '/api/UserUpdate',
      apiDel: '/api/UserDel',

      modalVisible: false,
      modalAction: '',
      modalTitle: '用户',
      modalValues: '',

      roleOptions: [], //角色下拉列表
    };
  }

  componentDidMount() {
    // this.queryRoleList()
  }

  //表单回调
  formCallback = values => {
    this.setState({
      queryParams: values ? { ...this.state.queryParams, ...values } : {},
      modalVisible: false,
    });
  };

  //添加
  add = () => {
    this.setState({
      modalVisible: true,
      modalAction: '添加',
    });
  };

  //编辑
  edit = item => {
    this.setState({
      modalVisible: true,
      modalAction: '编辑',
      modalValues: item,
    });
  };

  //保存
  save = values => {
    if (!this.ajaxFlag) return;
    this.ajaxFlag = false;

    let api,
      data,
      { apiAdd, apiEdit, modalAction, modalValues } = this.state;
    if (modalAction === '添加') {
      api = apiAdd;
      data = values;
    } else {
      api = apiEdit;
      data = {
        _id: modalValues._id,
        ...values,
      };
    }
    this.props.dispatch({
      type: 'global/post',
      url: api,
      payload: data,
      callback: res => {
        setTimeout(() => {
          this.ajaxFlag = true;
        }, 500);
        if (res.code === '0') {
          this.tableInit.refresh({});
          this.setState({
            modalVisible: false,
            modalValues: '',
          });
        }
      },
    });
  };

  del = id => {
    if (!this.ajaxFlag) return;
    this.ajaxFlag = false;

    let { apiDel } = this.state;

    this.props.dispatch({
      type: 'global/post',
      url: apiDel,
      payload: {
        id,
      },
      callback: res => {
        setTimeout(() => {
          this.ajaxFlag = true;
        }, 500);
        if (res.code === '0') {
          this.tableInit.refresh({});
        }
      },
    });
  };

  //modal回调
  modalCallback = values => {
    if (values) {
      this.save(values);
    } else {
      this.setState({
        modalVisible: false,
        modalValues: '',
      });
    }
  };

  render() {
    const { currentUser } = this.props.global;
    const {
      apiList,
      queryParams,
      modalVisible,
      modalAction,
      modalTitle,
      modalValues,
      roleOptions,
    } = this.state;

    const searchParams = [
      [
        {
          key: 'username',
          label: '用户名',
          type: 'Input',
          inputType: 'Input',
          value: '',
          placeholder: '请输入',
          rules: [],
        },
        {
          key: 'tel',
          label: '手机号',
          type: 'Input',
          inputType: 'Input',
          value: '',
          placeholder: '请输入',
          rules: [],
        },
        {
          key: 'email',
          label: '邮箱',
          type: 'Input',
          value: '',
          placeholder: '请输入',
          rules: [],
        },
      ],
      [
        {
          key: 'createtime',
          label: '注册时间',
          type: 'DatePicker',
          value: '',
          placeholder: '请选择',
          rules: [],
        },
        {
          key: 'status',
          label: '状态',
          type: 'Select',
          value: '',
          placeholder: '请选择',
          option: [
            {
              label: '禁用',
              value: 0,
            },
            {
              label: '正常',
              value: 1,
            },
            {
              label: '未验证',
              value: 2,
            },
          ],
        },
        {
          key: 'btn',
          type: 'BtnGroup',
          btns: [
            {
              name: '查询',
              type: 'primary',
              htmlType: 'submit',
            },
            {
              name: '重置',
              type: 'default',
              htmlType: 'reset',
            },
          ],
        },
      ],
    ];

    const modalParams = [
      [
        {
          key: 'username',
          label: '用户名',
          type: 'Input',
          inputType: 'Input',
          value: modalValues ? modalValues.username : undefined,
          placeholder: '请输入用户名',
          rules: [],
        },
        {
          key: 'fullname',
          label: '真实名称',
          type: 'Input',
          inputType: 'Input',
          value: modalValues ? modalValues.fullname : undefined,
          placeholder: '请输入用户名',
          rules: [],
        },
        {
          key: 'password',
          label: '密码',
          type: 'Input',
          inputType: 'password',
          value: '',
          placeholder: '请输入密码',
          rules: [],
        },
        {
          key: 'role_id',
          label: '角色',
          type: 'Select',
          value: modalValues ? modalValues.role_id : undefined,
          placeholder: '请选择',
          option: roleOptions,
        },
      ],
    ];

    const columns = [
      {
        title: '用户名',
        dataIndex: 'username',
        key: 'username',
        align: 'center',
      },
      {
        title: '真实姓名',
        dataIndex: 'fullname',
        key: 'fullname',
        align: 'center',
      },
      {
        title: '注册时间',
        dataIndex: 'createtime',
        key: 'createtime',
        align: 'center',
        render: createtime => <span>{moment(createtime).format('YYYY-MM-DD')}</span>,
      },
      {
        title: '最后登录ip',
        dataIndex: 'regip',
        key: 'regip',
        align: 'center',
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        render: status => (
          <span>
            {status === 0 ? '拒绝' : null}
            {status === 1 ? '正常' : null}
          </span>
        ),
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render: (text, item) => (
          <div>
            {currentUser.userType === 'admin' ? (
              <span>
                <a onClick={() => this.edit(item)}>编辑</a>
                {item.user_name === 'admin' ? null : <span> | </span>}
                {item.username === 'admin' ? null : (
                  <Popconfirm title="确定删除该用户？" onConfirm={() => this.del(item.id)}>
                    <a>删除</a>
                  </Popconfirm>
                )}
              </span>
            ) : (
              '--'
            )}
          </div>
        ),
      },
    ];

    return (
      <div>
        <FormInit layout="horizontal" params={searchParams} callback={this.formCallback} />

        {currentUser.userType === 'admin' ? (
          <div style={{ padding: '20px 0' }}>
            <Button type="primary" onClick={this.add}>
              添加{modalTitle}
            </Button>
            <FormInit
              params={modalParams}
              callback={this.modalCallback}
              modal={{
                title: modalAction + modalTitle,
                visible: modalVisible,
              }}
            />
          </div>
        ) : null}

        <TableInit
          onRef={ref => (this.tableInit = ref)}
          params={{
            api: apiList,
            columns,
            queryParams,
          }}
        />
      </div>
    );
  }
}
