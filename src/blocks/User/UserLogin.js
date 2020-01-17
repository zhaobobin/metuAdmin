/**
 * 用户登录 - 模块
 */
import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Form, Button, Checkbox } from 'antd';
import { ENV, Storage, Encrypt } from '@/utils';
import { hasErrors } from '@/utils/utils';
import styles from './UserSign.less';

import InputMobile from '@/components/Form/InputMobile';
import InputPassword from '@/components/Form/InputPassword';
import InputSmscode from '@/components/Form/InputSmscode';

const FormItem = Form.Item;
const keys1 = ['mobile', 'password'];
const keys2 = ['mobile', 'smscode'];

@connect(state => ({
  global: state.global,
}))
@Form.create()
export default class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.ajaxFlag = true;
    this.state = {
      userType: 'admin', //用户类型
      loginType: 'psd', //登录方式

      remember:
        Storage.get(ENV.storage.remenber) !== null ? Storage.get(ENV.storage.remenber) : true,

      errorCount: 0, //表单输入错误次数
    };
  }

  componentDidMount() {}

  //重置表单
  resetForm = () => {
    this.props.form.resetFields();
  };

  // 切换登录方式
  changeLoginType = loginType => {
    // this.resetForm();
    this.setState({
      loginType,
    });
  };

  //手机号
  mobileCallback = (value, err) => {
    if (err) {
      this.props.form.setFields({
        mobile: {
          value: value,
          errors: [new Error(err)],
        },
      });
    } else {
      this.props.form.setFieldsValue({ mobile: value });
    }
  };

  //密码
  passwordCallback = (value, err) => {
    if (err) {
      this.props.form.setFields({
        password: {
          value: value,
          errors: [new Error(err)],
        },
      });
    } else {
      this.props.form.setFieldsValue({ password: value });
      // this.props.form.validateFields(['password'], (err, values) => {});
    }
  };

  //短信验证码回调
  smscodeCallback = (value, err) => {
    //清空错误提示
    if (err === 'mobileError') {
      this.props.form.setFields({
        mobile: {
          value: '',
          errors: [new Error('请输入手机号')],
        },
      });
      this.setState({ smscodeSended: true });
    } else if (err === 'clearError') {
      this.props.form.setFields({
        smscode: {
          value: '',
          errors: '',
        },
      });
      this.setState({ smscodeSended: true });
    } else if (err === 'smscodeError') {
      this.props.form.setFields({
        smscode: {
          value: '',
          errors: [new Error(!value ? '请输入短信验证码' : '短信验证码格式有误')],
        },
      });
    } else {
      this.props.form.setFieldsValue({ smscode: value });
      // this.props.form.validateFields(['smscode'], (err, values) => {});
    }
  };

  //记住账号
  rememberChange = () => {
    let rememberState = !this.state.remember;
    Storage.set(ENV.storageRemenber, rememberState);
    this.setState({ remember: rememberState });
  };

  //确定
  submit = e => {
    e.preventDefault();

    if (!this.ajaxFlag) return;
    this.ajaxFlag = false;

    let { userType, loginType } = this.state;
    let keys = loginType === 'psd' ? keys1 : keys2;

    this.props.form.validateFields(keys, (err, values) => {
      // console.log(values)
      if (!err) {
        if (values.remember) {
          Storage.set(ENV.storage.lastTel, values.mobile);
        } else {
          Storage.set(ENV.storage.lastTel, '');
        }
        if (values.password) values.password = Encrypt(values.mobile, values.password);
        if (values.smscode) values.smscode = Encrypt(values.mobile, values.smscode);

        values.userType = userType;
        values.loginType = loginType;
        this.login(values);
      }
      setTimeout(() => {
        this.ajaxFlag = true;
      }, 500);
    });
  };

  //登录
  login = values => {
    this.props.dispatch({
      type: 'global/login',
      payload: values,
      callback: res => {
        if (res.code === 0) {
          this.props.callback();
        } else {
          this.props.form.setFields({
            [res.error_key]: {
              value: '',
              errors: [new Error(res.message)],
            },
          });
        }
      },
    });
  };

  toRegister = () => {
    let { showType } = this.props;
    if (showType) {
      this.props.dispatch({
        type: 'global/changeSignModal',
        payload: {
          signModalVisible: true,
          signTabKey: '2',
        },
      });
    } else {
      this.props.dispatch(routerRedux.push('/user/register'));
    }
  };

  render() {
    const { loginType } = this.state;
    const { lastTel } = this.props.global;
    const { getFieldDecorator, getFieldValue, getFieldsError } = this.props.form;

    return (
      <div className={styles.sign}>
        <div className={styles.form}>
          <h4>
            <p>
              <span>账户登录</span>
            </p>
            <hr />
          </h4>

          <p className={styles.loginType}>
            <a>
              {loginType === 'psd' ? (
                <span onClick={() => this.changeLoginType('sms')}>短信快速登录</span>
              ) : (
                <span onClick={() => this.changeLoginType('psd')}>账号密码登录</span>
              )}
            </a>
          </p>

          <Form onSubmit={this.submit}>
            <FormItem>
              {getFieldDecorator('mobile', {
                initialValue: lastTel,
                rules: [{ required: true, message: '请输入手机号' }],
              })(<InputMobile default={lastTel} callback={this.mobileCallback} />)}
            </FormItem>

            {loginType === 'psd' ? (
              <FormItem>
                {getFieldDecorator('password', {
                  initialValue: '',
                  validateFirst: true,
                  rules: [{ required: true, message: '请输入密码' }],
                })(<InputPassword hidePsdLevel={true} callback={this.passwordCallback} />)}
              </FormItem>
            ) : (
              <FormItem>
                {getFieldDecorator('smscode', {
                  initialValue: '',
                  rules: [{ required: true, message: '请输入验证码' }],
                })(
                  <InputSmscode
                    mobile={hasErrors(getFieldsError(['mobile'])) ? '' : getFieldValue('mobile')}
                    callback={this.smscodeCallback}
                  />
                )}
              </FormItem>
            )}

            <FormItem style={{ height: '40px' }}>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: this.state.remember,
              })(<Checkbox onChange={this.rememberChange}>记住账号</Checkbox>)}
            </FormItem>

            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className={styles.btn}
              style={{ marginBottom: '20px' }}
              disabled={
                hasErrors(getFieldsError()) ||
                !getFieldValue('mobile') ||
                !getFieldValue(loginType === 'psd' ? 'password' : 'smscode')
              }
            >
              登录
            </Button>
          </Form>
        </div>

        <div className={styles.foot}>
          <p className={styles.loginChange}>
            <a className={styles.l} onClick={this.toRegister}>
              <span>注册新账号</span>
            </a>
          </p>
        </div>
      </div>
    );
  }
}
