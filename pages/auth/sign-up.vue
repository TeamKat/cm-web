<template>
  <div class="card-wrapper">
    <a-card class="card">
      <div class="logo-wrapper">
        <logo/>
      </div>
      <div class="title">{{ $t('text.sign_up') }}</div>
      <a-form layout="vertical" :form="form" @submit="submit">
        <a-form-item :help="errors.email">
          <a-input :placeholder="$t('text.email')" name="email"
                   v-model:value="model.email"
                   v-decorator="[$t('text.email'), { rules: rules.email }]">
            <a-icon class="form-icon" type="mail" slot="prefix"/>
          </a-input>
        </a-form-item>
        <a-row type="flex" justify="space-between">
          <a-col :span="11">
            <a-form-item :help="errors.password">
              <a-input :placeholder="$t('text.password')" type="password" name="password"
                       v-model:value="model.password"
                       v-decorator="[$t('text.password'), { rules: rules.password }]">
                <a-icon class="form-icon" type="lock" slot="prefix"/>
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="11">
            <a-form-item :help="errors.confirm">
              <a-input :placeholder="$t('text.confirm')" type="password"
                       v-model:value="model.confirm"
                       v-decorator="[$t('text.confirm'), { rules: confirmRules}]">
                <a-icon class="form-icon" type="lock" slot="prefix"/>
              </a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item :help="errors.display_name">
          <a-input :placeholder="$t('text.display_name')" name="name"
                   v-model:value="model.display_name"
                   v-decorator="[$t('text.display_name'), { rules: rules.display_name }]">
            <a-icon class="form-icon" type="profile" slot="prefix"/>
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-button class="sign-up" type="primary" html-type="submit">{{ $t('text.sign_up') }}</a-button>
          {{ $t('text.or') + ' ' }}
          <locale-link class="sign-in" url="/auth/sign-in">{{ $t('text.sign_in') }}</locale-link>
        </a-form-item>
      </a-form>
    </a-card>
  </div>
</template>

<script>
import Vue from 'vue'
import AuthApi from '@/api/auth'
import SignUpRules from '@/rules/auth/sign-up'
import Logo from "@/components/logo";
import LocaleLink from "@/components/locale-link";
import {i18n} from "@/plugins/i18n";

export default Vue.extend({
  components: {LocaleLink, Logo},
  data() {
    return {
      model: {},
      rules: SignUpRules,
      confirmRules: [
        {required: true, message: i18n.t('validation.required', {name: i18n.t('text.confirm')})},
        {validator: this.confirmPassword, message: i18n.t('validation.matched', {name: i18n.t('text.password')})},
      ],
      errors: {},
      form: this.$form.createForm(this, {name: 'sign_up'}),
    };
  },
  methods: {
    confirmPassword(rule, value, callback) {
      if(value && value !== this.model.password) {
        return Promise.reject("Password does not match");
      } else {
        return Promise.resolve();
      }
    },
    submit(event) {
      event.preventDefault();
      this.form.validateFields(err => {
        if (!err) {
          this.signUp();
        }
      });
    },
    signUp() {
      AuthApi.signUp(this.model).then((res) => {
        console.log(res)
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
  max-width: 440px;
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
  margin-bottom: 12px;
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

/*:deep*/
.ant-form-item {
  margin-bottom: 12px;
  padding-bottom: 0;
}
</style>
