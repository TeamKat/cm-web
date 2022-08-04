import request from '@/config/request';

export default {
  authWithFirebase(data) {
    return request({
      method: 'post',
      url: '/auth/firebase_auth',
      data: data
    });
  }
}
