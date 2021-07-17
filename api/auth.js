import request from "@/config/request";

export const signIn = (data) => {
  return request({
    url: "/api/sign-in",
    method: 'post',
    data: data
  });
}
