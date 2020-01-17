/**
 * 圈子列表
 */
import React from 'react';
import { connect } from 'dva';
import { Button, Popconfirm } from 'antd';
import moment from 'moment';

import FormInit from '@/components/Form/FormInit';
import TableInit from '@/blocks/Table/BasicTable';

@connect(({ global }) => ({
  global,
}))
export default class CricleList extends React.Component {
  constructor(props) {
    super(props);
    this.ajaxFlag = true;
    this.state = {
      queryParams: {},
      apiList: '/api/CricleList',
      apiAdd: '/api/CricleAdd',
      apiEdit: '/api/CricleUpdate',
      apiDel: '/api/CricleDel',

      modalVisible: false,
      modalAction: '',
      pageTitle: '圈子',
      modalValues: '',
    };
  }

  componentDidMount() {}

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
      data = {
        admin: this.props.global.currentUser._id,
        ...values,
      };
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
        if (res.status === 1) {
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
        if (res.status === 1) {
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
    const { apiList, queryParams, modalVisible, modalAction, pageTitle, modalValues } = this.state;

    const searchParams = [
      [
        {
          key: 'name',
          label: '名称',
          type: 'Input',
          inputType: 'Input',
          value: '',
          placeholder: '请输入',
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
              label: '全部',
              value: '',
            },
            {
              label: '关闭',
              value: 0,
            },
            {
              label: '正常',
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

    const modalParams = [
      [
        {
          key: 'name',
          label: '名称',
          type: 'Input',
          inputType: 'Input',
          value: modalValues ? modalValues.name : undefined,
          placeholder: '请输入',
          rules: [],
        },
        {
          key: 'tag',
          label: '标签',
          type: 'Input',
          inputType: 'Input',
          value: modalValues ? modalValues.tag : undefined,
          placeholder: '请输入',
          rules: [],
        },
        {
          key: 'desc',
          label: '描述',
          type: 'Input',
          inputType: 'Input',
          value: modalValues ? modalValues.desc : undefined,
          placeholder: '请输入',
          rules: [],
        },
        {
          key: 'cover',
          label: '封面',
          type: 'Input',
          value: modalValues ? modalValues.cover : undefined,
          placeholder: '请选择',
          rules: [],
        },
        {
          key: 'status',
          label: '状态',
          type: 'Select',
          value: modalValues ? modalValues.status : 1,
          placeholder: '请选择',
          option: [
            {
              label: '关闭',
              value: 0,
            },
            {
              label: '正常',
              value: 1,
            },
          ],
        },
      ],
    ];

    const columns = [
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
      },
      {
        title: '标签',
        dataIndex: 'tag',
        key: 'tag',
        align: 'center',
      },
      {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
        align: 'center',
      },
      {
        title: '时间',
        dataIndex: 'createtime',
        key: 'createtime',
        align: 'center',
        render: createtime => <span>{moment(createtime).format('YYYY-MM-DD')}</span>,
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
                <span> | </span>
                <Popconfirm title={`确定删除该${pageTitle}？`} onConfirm={() => this.del(item._id)}>
                  <a>删除</a>
                </Popconfirm>
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
              添加{pageTitle}
            </Button>
            <FormInit
              params={modalParams}
              callback={this.modalCallback}
              modal={{
                title: modalAction + pageTitle,
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
