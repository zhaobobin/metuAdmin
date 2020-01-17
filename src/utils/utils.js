import { parse } from 'qs';

export function isUrl(path) {
  const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
  return reg.test(path);
}

/**
 * 截取链接参数
 * @returns {*}
 */
export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

//字段错误校验
export function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

//校验密码强度
export function checkPsdLevel(value) {
  // 0： 表示第一个级别， 1：表示第二个级别， 2：表示第三个级别， 3： 表示第四个级别， 4：表示第五个级别
  let modes = 0;
  if (value.length < 8) {
    //最初级别
    return modes;
  }
  if (/\d/.test(value)) {
    //如果用户输入的密码 包含了数字
    modes++;
  }
  if (/[a-z]/.test(value)) {
    //如果用户输入的密码 包含了小写的a到z
    modes++;
  }
  if (/\W/.test(value)) {
    //如果是非数字 字母 下划线
    modes++;
  }
  if (/[A-Z]/.test(value)) {
    //如果用户输入的密码 包含了大写的A到Z
    modes++;
  }
  return modes;
}
