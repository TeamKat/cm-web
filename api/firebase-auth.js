import {notification} from 'ant-design-vue';
import {i18n} from "@/plugins/i18n";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import AuthApi from '@/api/auth'
import {setAuthToken, setRefreshToken} from "@/utils/local-storage";

export default {
  signIn(data) {
    return signInWithEmailAndPassword(getAuth(), data.email, data.password)
      .then(response => this.handleAuthSuccess(response))
      .catch(error => this.handleError(error));
  },
  signUp(data) {
    return createUserWithEmailAndPassword(getAuth(), data.email, data.password)
      .then(response => this.handleAuthSuccess(response))
      .catch(error => this.handleError(error));
  },
  handleError(error) {
    notification.error({
      key: 'error',
      message: i18n.t('message.error'),
      description: i18n.t('message.firebase.' + error.code)
    })
    return Promise.reject(error)
  },
  handleAuthSuccess(userCredential) {
    console.log(userCredential)
    const user = userCredential.user;
    return AuthApi.authWithFirebase({id_token: user.accessToken}).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error)
    })
    //   setAuthToken(res.auth_token);
    //   setRefreshToken(res.refresh_token);
  }
}

