<template>
  <div class="card-wrapper">
    <a-card class="card">
      <div class="logo-wrapper">
        <logo/>
      </div>
      <div class="title">{{ $t('text.sign_up') }}</div>
      <a-form layout="vertical" :form="form" @submit="submit">
        <a-form-item :help="errors.user_name">
          <a-input :placeholder="$t('text.user_name')"
                   v-decorator="['user_name', { rules: rules.user_name }]">
            <a-icon class="form-icon" type="user" slot="prefix"/>
          </a-input>
        </a-form-item>
        <a-row type="flex" justify="space-between">
          <a-col :span="11">
            <a-form-item :help="errors.password">
              <a-input :placeholder="$t('text.password')" type="password"
                       v-decorator="['password', { rules: rules.password }]">
                <a-icon class="form-icon" type="lock" slot="prefix"/>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="11">
            <a-form-item :help="errors.confirm">
              <a-input :placeholder="$t('text.confirm')" type="password"
                       v-decorator="['confirm', { rules: rules.confirm }]">
                <a-icon class="form-icon" type="lock" slot="prefix"/>
              </a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item :help="errors.display_name">
          <a-input :placeholder="$t('text.display_name')"
                   v-decorator="['display_name', { rules: rules.display_name }]">
            <a-icon class="form-icon" type="profile" slot="prefix"/>
          </a-input>
        </a-form-item>
        <a-form-item :help="errors.email">
          <a-input :placeholder="$t('text.email')"
                   v-decorator="['email', { rules: rules.email }]">
            <a-icon class="form-icon" type="mail" slot="prefix"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button class="sign-up" type="primary" html-type="submit">{{ $t('text.sign_up') }}</a-button>
          {{ $t('text.or') + ' ' }}
          <a class="sign-in" :href="localePath('/auth/sign-in')">{{ $t('text.sign_in') }}</a>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import Vue from 'vue'
import AuthApi from '@/api/auth'
import SignUpRules from '@/rules/auth/sign-up'
import {setAuthToken, setRefreshToken} from "@/utils/local-storage";
import Logo from "@/components/logo";

export default Vue.extend({
  components: {Logo},
  data() {
    return {
      rules: SignUpRules,
      errors: {},
      form: this.$form.createForm(this, {name: 'sign_up'}),
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();
      this.form.validateFields(err => {
        if (!err) {
          this.signUp();
        }
      });
    },
    signUp() {
      AuthApi.signUp().then((res) => {
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

.sign-in {
  text-transform: lowercase;
}

.sign-up {
  width: 100%;
  margin-bottom: 8px;
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
