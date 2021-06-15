import request from '@/utils/Request';

export async function queryAdvancedProfile() {
  return request('/api/advanced-profile/advanced');
}
