<template>
  <div class="sign-in-card-wrapper">
    <a-card class="sign-in-card ">
      <div class="sign-in-logo-wrapper">
        <img class="sign-in-logo" src="@/assets/images/logo.png" alt="logo"/>
      </div>
      <div class="sign-in-title">{{ $t('text.sign_in') }}</div>
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
          <a class="sign-in-forgot" href="">{{ $t('text.forgot_password') }}</a>
          <a-button class="sign-in-button" type="primary" html-type="submit">{{ $t('text.sign_in') }}</a-button>
          {{ $t('text.or') + ' ' }}<a class="sign-in-create" href="">{{ $t('text.create_account') }}</a>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import Vue from 'vue'
import rules from '@/rules/sign-in'
import {signIn} from '@/api/auth'
import {setAuthToken, setRefreshToken} from "@/utils/local-storage";

export default Vue.extend({
  data() {
    return {
      rules,
      errors: {},
      form: this.$form.createForm(this, {name: 'sign_in'}),
    };
  },
  // mounted() {
  //   this.$nextTick(() => {
  //     // To disabled submit button at the beginning.
  //     this.form.validateFields();
  //   });
  // },
  methods: {
    submit(event) {
      event.preventDefault();
      this.form.validateFields(err => {
        if (!err) {
          this.login();
        }
      });
    },
    login() {
      signIn().then((res) => {
        setAuthToken(res.auth_token);
        setRefreshToken(res.refresh_token);
      });
    },
  },
})
</script>

<style>
.sign-in-card-wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-in-card {
  max-width: 400px;
}

.sign-in-logo-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 16px;
}

.sign-in-logo {
  height: 24px;
}

.sign-in-title {
  font-size: 24px;
  text-align: center;
  font-weight: 500;
  padding-top: 16px;
  padding-bottom: 16px;
}

.sign-in-forgot {
  float: right;
}

.sign-in-create {
  text-transform: lowercase;
}

.sign-in-button {
  width: 100%;
}

.form-icon {
  color: rgba(0, 0, 0, .25);
}

/*::v-deep*/
.ant-form-item {
  margin-bottom: 0;
  margin-right: 0;
}

.ant-form-item-control {
  line-height: 40px !important;
}
</style>
