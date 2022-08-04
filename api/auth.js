import {notification} from 'ant-design-vue';
import {i18n} from "@/plugins/i18n";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {setAuthToken, setRefreshToken} from "@/utils/local-storage";

export default {
  signIn(data) {
    return signInWithEmailAndPassword(getAuth(), data.email, data.password)
      .then((userCredential) => this.handleAuthSuccess())
      .catch((error) => this.handleError(error));
  },
  signUp(data) {
    return createUserWithEmailAndPassword(getAuth(), data.email, data.password)
      .then((userCredential) => this.handleAuthSuccess())
      .catch((error) => this.handleError(error));
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
    //   setAuthToken(res.auth_token);
    //   setRefreshToken(res.refresh_token);
    return userCredential
  }
}

