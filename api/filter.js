import request from '@/config/request';

export default {
  getGenres() {
    return request({
        url: '/filter/genres',
      method: 'post',
    });
  },
}
