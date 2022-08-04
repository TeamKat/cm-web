import {notification} from 'ant-design-vue';
import {i18n} from "@/plugins/i18n";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {setAuthToken, setRefreshToken} from "@/utils/local-storage";

export default {
  signIn(data) {
    return signInWithEmailAndPassword(getAuth(), data.email, data.password)
      .then((userCredential) => {
        //   setAuthToken(res.auth_token);
        //   setRefreshToken(res.refresh_token);
        return userCredential
      })
      .catch((error) => {
        console.log(error.stack)
        notification.error({
          key: 'error',
          message: i18n.t('message.error'),
          description: i18n.t('message.firebase.' + error.code)
        })
        return Promise.reject(error)
      });
  },
  signUp(data) {
    return createUserWithEmailAndPassword(getAuth(), data.email, data.password)
      .then((userCredential) => {
        //   setAuthToken(res.auth_token);
        //   setRefreshToken(res.refresh_token);
        return userCredential
      })
      .catch((error) => {
        notification.error({
          key: 'error',
          message: i18n.t('message.error'),
          description: i18n.t('message.firebase.' + error.code)
        })
        return Promise.reject(error)
      });
  }
}

