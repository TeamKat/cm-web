<template>
  <div class="card-wrapper">
    <a-card class="card">
      <div class="logo-wrapper">
        <logo/>
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
          <locale-link class="forgot-password" url="">{{ $t('text.forgot_password') }}</locale-link>
          <a-button class="sign-in" type="primary" html-type="submit">{{ $t('text.sign_in') }}</a-button>
          {{ $t('text.or') + ' ' }}
          <locale-link class="sign-up" url="/auth/sign-up">{{ $t('text.sign_up') }}</locale-link>
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
import Logo from "@/components/logo";
import LocaleLink from "@/components/locale-link";

export default Vue.extend({
  components: {LocaleLink, Logo},
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

.title {
  font-size: 24px;
  text-align: center;
  font-weight: 500;
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
