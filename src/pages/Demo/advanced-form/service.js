import request from '@/utils/Request';

export async function fakeSubmitForm(params) {
  return request('/api/advanced-form/forms', {
    method: 'POST',
    data: params,
  });
}
