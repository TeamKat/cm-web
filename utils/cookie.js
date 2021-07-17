import Cookies from 'js-cookie'

export const LocaleKey = 'i18n_redirected'

export function getLocale() {
  return Cookies.get(LocaleKey)
}
