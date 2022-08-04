import {i18n} from '@/plugins/i18n';

export default {
  email: [
    {required: true, message: i18n.t('validation.required', {name: i18n.t('text.email')})},
    {type: 'email', message: i18n.t('validation.email', {name: i18n.t('text.email')})}
  ],
  password: [
    {required: true, message: i18n.t('validation.required', {name: i18n.t('text.password')})}
  ],
}
