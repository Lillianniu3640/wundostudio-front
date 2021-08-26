<template lang="pug">
#register
  b-container.register-content
    b-row
      b-col.logo(cols="12")
        b-img(src="../assets/images/loginicon.png")
      b-col.formstyle(cols="12")
        b-form(@submit.prevent="submit" style="width:70%;")
          b-form-group(
            label=""
            label-for="input-account"
            :state="state.account"
            description="帳號長度限制為 4 到 20 個字"
            invalid-feedback="帳號格式不正確"
          )
            b-form-input#input-accounts.rounded-pill(
              v-model="form.account"
              type="text"
              required
              placeholder="Account"
              :state="state.account"
              autocomplete="off"
            )
          b-form-group(
            label=""
            label-for="input-password"
            :state="state.password"
            description="密碼長度限制為 4 到 20 個字"
            invalid-feedback="密碼格式不正確"
          )
            b-form-input#input-password.rounded-pill(
              v-model="form.password"
              type="password"
              required
              placeholder="Password"
              :state="state.password"
              autocomplete="off"
            )
          b-form-group(
            label=""
            label-for="input-email"
            :state="state.email"
            description="請輸入有效的信箱"
            invalid-feedback="信箱格式不正確"
          )
            b-form-input#input-email.rounded-pill(
              v-model="form.email"
              type="text"
              required
              placeholder="E-mail"
              :state="state.email"
              autocomplete="off"
            )
          .text-center
            b-btn.rounded-pill.btn-block(variant="info" type="submit") Submit
</template>

<script>
import isEmail from 'validator/es/lib/isEmail'

export default {
  data () {
    return {
      form: {
        account: '',
        password: '',
        email: ''
      }
    }
  },
  computed: {
    state () {
      const account = this.form.account
      const password = this.form.password
      const email = this.form.email
      return {
        account: account.length === 0 ? null : account.length >= 4 && account.length <= 20,
        password: password.length === 0 ? null : password.length >= 4 && password.length <= 20,
        email: email.length === 0 ? null : isEmail(email)
      }
    }
  },
  methods: {
    async submit () {
      try {
        await this.axios.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: 'Success',
          text: 'Thank you for registering'
        })
        this.$router.push('/login')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
#register
  height 100vh
  background-image url(../assets/images/login_register_bg.jpg)
  background-repeat no-repeat
  background-size cover
  background-color rgba(0, 0, 0, .5)
  background-blend-mode multiply
.logo
  margin-top 6rem
  display flex
  justify-content center
.logo img
  width 20%
  margin-bottom 3rem
.formstyle
  display flex
  justify-content center
.form-control
  background-color rgba(255, 255, 255, .8)
.btn-info
  background-color #D8B281
  border-color #D8B281
@media (min-width: 768px)
  .logo img
    width 15%
  .formstyle
    display flex
    justify-content flex-end
  .form-control
    width 70%
  .btn-info
    width 70%
@media (min-width: 992px)
  .logo img
    width 10%
  .formstyle
    display flex
    justify-content flex-end
  .form-control
    width 60%
  .btn-info
    width 60%
</style>
