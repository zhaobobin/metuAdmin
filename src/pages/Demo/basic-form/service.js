import request from '@/utils/Request';

export async function fakeSubmitForm(params) {
  return request('/api/basic-form/forms', {
    method: 'POST',
    data: params,
  });
}
