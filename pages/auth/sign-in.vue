<template>
  <div class="card-wrapper">
    <a-card class="card ">
      <div class="logo-wrapper">
        <img class="logo" src="@/assets/images/logo.png" alt="logo"/>
      </div>
      <div class="title">{{ $t('text.sign_in') }}</div>
      <a-form layout="vertical" :form="form" @submit="submit">
        <a-form-item :help="errors.user_id">
          <a-input :placeholder="$t('text.user_id')"
                   v-decorator="['user_id', { rules: rules.user_id }]">
            <a-icon class="form-icon" type="user" slot="prefix"/>
          </a-input>
        </a-form-item>
        <a-form-item :help="errors.password">
          <a-input :placeholder="$t('text.password')" type="password"
                   v-decorator="['password', { rules: rules.password }]">
            <a-icon class="form-icon" type="lock" slot="prefix"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-checkbox v-decorator="['remember', { valuePropName: 'checked', initialValue: true }]">
            {{ $t('text.remember') }}
          </a-checkbox>
          <a class="forgot-password" href="">{{ $t('text.forgot_password') }}</a>
          <a-button class="sign-in" type="primary" html-type="submit">{{ $t('text.sign_in') }}</a-button>
          {{ $t('text.or') + ' ' }}
          <a class="sign-up" :href="localePath('/auth/sign-up')">{{ $t('text.sign_up') }}</a>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import Vue from 'vue'
import AuthApi from '@/api/auth'
import SignInRules from '@/rules/auth/sign-in'
import {setAuthToken, setRefreshToken} from "@/utils/local-storage";

export default Vue.extend({
  data() {
    return {
      rules: SignInRules,
      errors: {},
      form: this.$form.createForm(this, {name: 'sign_in'}),
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      this.form.validateFields(err => {
        if (!err) {
          this.signIn();
        }
      });
    },
    signIn() {
      AuthApi.signIn().then((res) => {
        setAuthToken(res.auth_token);
        setRefreshToken(res.refresh_token);
      });
    },
  },
})
</script>

<style scoped lang="scss">
.card-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  max-width: 400px;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

.logo {
  height: 24px;
}

.title {
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  margin-top: 16px;
}

.forgot-password {
  float: right;
}

.sign-up {
  text-transform: lowercase;
}

.sign-in {
  width: 100%;
  margin: 8px 0;
}

.form-icon {
  color: rgba(0, 0, 0, .25);
}

/*::v-deep*/
.ant-form-item {
  margin-bottom: 0;
  padding-bottom: 0;
}

.ant-form > .ant-form-item {
  margin: 12px 0;
}
</style>
