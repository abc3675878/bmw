<template>
  <div id="login">
    <div class="login_area">
      <h1>MY BMW<br />ACCOUNT</h1>
      <form @submit.prevent="onSubmit" @reset="onReset">
        <div class="center content-inputs">
          <vs-input class="input_bg" type="text" v-model="account" placeholder="Email Address">
            <template #icon>
              <box-icon name="user" color="#565656"></box-icon>
            </template>
          </vs-input>

          <vs-input class="input_bg" type="password" v-model="password" placeholder="Password" autocomplete="on">
            <template #icon>
              <box-icon name="lock-open-alt" color="#565656"></box-icon>
            </template>
          </vs-input>
        </div>

        <div class="login_btn">
          <!-- <button @click="openLoading"><router-link to="/register">Create an account</router-link></button> -->
          <router-link to="/register"><button @click="openLoading">Create an account</button></router-link>

          <input @click="openLoading" type="submit" value="LOGIN" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      account: '',
      password: '',
    }
  },
  computed: {
    accountState() {
      if (this.account.length === 0) {
        return null
      } else if (this.account.length >= 4 && this.account.length <= 20) {
        return true
      } else {
        return false
      }
    },
    passwordState() {
      if (this.password.length === 0) {
        return null
      } else if (this.password.length >= 4 && this.password.length <= 20) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    onSubmit() {
      // 如果帳號密碼驗證通過
      if (this.accountState && this.passwordState) {
        this.axios
          .post(process.env.VUE_APP_API + '/users/login', this.$data)
          .then((res) => {
            if (res.data.success) {
              // 把結果丟進 Vuex 中的 login Function
              this.$store.commit('login', res.data.result)
              this.$swal({
                icon: 'success',
                title: '登入成功',
              }).then(() => {
                this.$router.push('/member')
              })
              // this.account = ''
              // this.password = ''
            } else {
              this.$swal({
                icon: 'error',
                title: res.data.message,
              })
            }
          })
          .catch((err) => {
            this.$swal({
              icon: 'error',
              title: err.response.data.message,
            })
          })
      }
    },

    onReset() {
      this.account = ''
      this.password = ''
    },

    openLoading() {
      const loading = this.$vs.loading({
        color: '#0066b1',
      })
      setTimeout(() => {
        loading.close()
      }, 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  // border: 1px solid black;
}
#login {
  background: url(../assets/M4/login.jpg) no-repeat center/cover;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15%;
}

.login_area {
  width: 300px;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  // justify-content: space-evenly;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: #0066b1;
    // margin-bottom: -50px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 200px;
  }

  .login_btn {
    a {
      color: #0066b1 !important;
      font-size: 10px;
      text-decoration: underline !important;
      // padding-right: 10px;
      width: 100%;
      height: 100%;
    }

    button {
      width: initial;
      padding: 0;
      padding-right: 10px;
      margin: 0;
      color: #0066b1 !important;
      font-size: 10px;
      text-decoration: underline !important;
      background-color: transparent;
    }

    input {
      background-color: #0066b1;
      color: white;
      border: 0px;
      width: 100px;
      height: 45px;
      border-radius: 50px;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
  }
}

.input_bg:nth-child(1) {
  margin-bottom: 30px;
}
</style>
<style scoped lang="scss" src="../assets/styles/rwd_login.scss">