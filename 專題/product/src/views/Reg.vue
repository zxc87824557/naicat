<template lang="pug">
  #reg
    b-container
      b-row
        b-col
          h1.text-center 註冊
          b-form(@submit="submit")
            b-form-group(
              label="帳號"
              label-for="input-account"
              description="帳號長度為4 - 2個字"
              invalid-feedback="帳號格式不符"
              :state="state('account')"
            )
              b-form-input#input-account(type="text" v-model="account" :state="state('account')")
            b-form-group(
              label="密碼"
              label-for="input-password"
              description="密碼長度為4 - 20個字"
              invalid-feedback="密碼格式不符"
              :state="state('password')"
            )
              b-form-input#input-password(type="password" v-model="password" :state="state('password')")
            b-button(type="submit" variant="primary") 註冊
</template>

<script>
export default {
  name: 'reg',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    state (type) {
      if (type === 'account') {
        if (this.account.length < 4 || this.account.length > 20) {
          return false
        } else {
          return true
        }
      } else if (type === 'password') {
        if (this.password.length < 4 || this.password.length > 20) {
          return false
        } else {
          return true
        }
      }
    },
    submit (event) {
      event.preventDefault()
      if (this.account < 4 || this.account.length > 20) {
        alert('帳號格式不符')
      } else if (this.password.length < 4 || this.password.length > 20) {
        alert('密碼格式不符')
      }
    }
  }
}
</script>
