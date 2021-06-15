import React from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import ENV from '@/config/env';
import Storage from '@/utils/storage';
import TableShowTotal from './TableShowTotal';

interface IQueryParams {
  page: number;
  per_page: number;
}

interface IProps {
  params: any;
  onRef: any;
  rowSelection: any;
  callback: (data: any) => void;
}

interface IState {
  loading: boolean;
  list: any[];
  total: number;
  queryParams: IQueryParams;
}

@connect(({ global }: any) => ({
  global,
}))
export default class TableInit extends React.Component<IProps, IState> {
  private ajaxFlag: boolean;

  constructor(props: IProps) {
    super(props);
    this.ajaxFlag = true;
    this.state = {
      loading: false,
      list: [],
      total: 0,

      queryParams: {
        page: 1,
        per_page: Storage.get(ENV.storagePagesize) || 10,
      },
    };
  }

  componentDidMount() {
    if (this.props.onRef) this.props.onRef(this);
    this.queryList(this.props.params.queryParams);
  }

  UNSAFE_componentWillReceiveProps(nextProps: IProps) {
    if (
      JSON.stringify(nextProps.params.queryParams) !== JSON.stringify(this.props.params.queryParams)
    ) {
      this.queryList(nextProps.params.queryParams);
    }
  }

  refresh = (queryParams: IQueryParams) => {
    this.queryList(queryParams);
  };

  queryList(queryParams: IQueryParams) {
    if (!this.ajaxFlag) return;
    this.ajaxFlag = false;
    this.setState({ loading: true });

    const { page, per_page } = this.state.queryParams;

    this.props.dispatch({
      type: 'global/request',
      url: this.props.params.api,
      method: 'GET',
      payload: {
        ...queryParams,
      },
      callback: res => {
        this.ajaxFlag = true;
        if (res.code === 0) {
          this.setState({
            loading: false,
            list: res.data.list,
            total: res.data.count || res.data.total,
            queryParams: {
              ...queryParams,
              page: queryParams.page || page,
              per_page: queryParams.per_page || per_page,
            },
          });
          if (this.props.callback) this.props.callback(res.data);
        } else {
          this.setState({ loading: false, total: 0 });
        }
      },
    });
  }

  //表格筛选
  handleTableChange = (pagination: any) => {
    Storage.set(ENV.storagePagesize, pagination.pageSize);
    this.queryList({
      ...this.state.queryParams,
      page: pagination.current,
      per_page: pagination.pageSize,
    });
  };

  render() {
    const { loading, list, total, queryParams } = this.state;
    const { columns } = this.props.params;
    return (
      <div style={{ padding: '20px 0' }}>
        <Table
          rowKey="_id"
          loading={loading}
          columns={columns}
          dataSource={list}
          onChange={this.handleTableChange}
          rowSelection={this.props.rowSelection}
          pagination={{
            total: total,
            current: queryParams.page,
            pageSize: queryParams.per_page,
            hideOnSinglePage: false,
            showSizeChanger: true,
            showTotal: () => (
              <TableShowTotal
                total={total}
                pageNum={queryParams.page}
                pageSize={queryParams.per_page}
              />
            ),
          }}
        />
      </div>
    );
  }
}
