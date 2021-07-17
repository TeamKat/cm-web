const AuthTokenKey = 'Authorization'
const RefreshTokenKey = 'Authorization'

export const getAuthToken = () => {
  return localStorage.getItem(AuthTokenKey)
}
export const setAuthToken = token => {
  return localStorage.setItem(AuthTokenKey, token)
}
export const removeAuthToken = () => {
  return localStorage.removeItem(AuthTokenKey)
}

export const getRefreshToken = () => {
  return localStorage.getItem(RefreshTokenKey)
}
export const setRefreshToken = token => {
  return localStorage.setItem(RefreshTokenKey, token)
}
export const removeRefreshToken = () => {
  return localStorage.removeItem(RefreshTokenKey)
}

