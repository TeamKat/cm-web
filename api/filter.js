import request from '@/config/request';

export default {
  getGenres() {
    return request({
        url: '/api/filter/genres',
      method: 'post',
    });
  },
}
