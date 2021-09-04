import request from "@/config/request";

export default {
  signIn(data) {
    return request({
      url: "/api/sign-in",
      method: 'post',
      data: data
    });
  },
  signUp(data) {
    return request({
      url: "/api/sign-up",
      method: 'post',
      data: data
    });
  }
}
