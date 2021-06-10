import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Button, Popconfirm } from 'antd';
import moment from 'moment';
import FormInit from '@/components/Form/FormInit';
import TableInit from '@/blocks/Table/BasicTable';

@connect(({ global }) => ({
  global,
}))
export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.ajaxFlag = true;
    this.state = {
      queryParams: {
        userType: 'user',
      },
      apiList: '/articles',
      apiAdd: '/articleAdd',
      apiEdit: '/articleUpdate',
      apiDel: '/articleDel',

      modalVisible: false,
      modalAction: '',
      modalTitle: '文章',
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
    this.props.dispatch(routerRedux.push('/content/article/add'));
  };

  //编辑
  edit = id => {
    this.props.dispatch(routerRedux.push(`/content/article/edit/${id}`));
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
    const { apiList, queryParams, modalTitle } = this.state;

    const searchParams = [
      [
        {
          key: 'title',
          label: '标题',
          type: 'Input',
          inputType: 'Input',
          value: '',
          placeholder: '请输入',
          rules: [],
        },
        {
          key: 'username',
          label: '发布用户',
          type: 'Input',
          inputType: 'Input',
          value: '',
          placeholder: '请输入',
          rules: [],
        },
        {
          key: 'tag',
          label: '标签',
          type: 'Input',
          value: '',
          placeholder: '请输入',
          rules: [],
        },
      ],
      [
        {
          key: 'create_time',
          label: '发布时间',
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
              label: '未通过',
              value: 0,
            },
            {
              label: '已通过',
              value: 1,
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

    const columns = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        align: 'center',
      },
      {
        title: '标签',
        dataIndex: 'tags',
        key: 'tags',
        align: 'center',
      },
      {
        title: '发布时间',
        dataIndex: 'createtime',
        key: 'createtime',
        align: 'center',
        render: createtime => <span>{moment(createtime).format('YYYY-MM-DD')}</span>,
      },
      {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
        align: 'center',
        render: author => <span>{author ? author.nickname : null}</span>,
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        render: status => <span>{status ? '已通过' : '未通过'}</span>,
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        align: 'center',
        render: (text, item) => (
          <div>
            {currentUser.type === 'admin' ? (
              <span>
                <a onClick={() => this.edit(item._id)}>编辑</a>
                {item.user_name === 'admin' ? null : <span> | </span>}
                {item.username === 'admin' ? null : (
                  <Popconfirm
                    title={`确定删除该${modalTitle}？`}
                    onConfirm={() => this.del(item._id)}
                  >
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

        {currentUser.type === 'admin' ? (
          <div style={{ padding: '20px 0' }}>
            <Button type="primary" onClick={this.add}>
              添加{modalTitle}
            </Button>
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
