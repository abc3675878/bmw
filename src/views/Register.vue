<template>
  <div id="register">
    <div class="register_area">
      <h1>CREATE<br />MY BMW<br />ACCOUNT</h1>
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

        <div class="register_btn">
          <input @click="openLoading" type="submit" value="SUBMIT" />
          <!-- <input @click="openLoading" type="reset" value="RESET" /> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      account: '',
      password: '',
    }
  },
  methods: {
    onSubmit() {
      this.axios
        .post(process.env.VUE_APP_API + '/users/', this.$data)
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              icon: 'success',
              title: '註冊成功',
            })
            this.account = ''
            this.password = ''
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
#register {
  background: url(../assets/M4/login.jpg) no-repeat center/cover;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15%;
}

.register_area {
  width: 300px;
  height: 450px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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

  .register_btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    a {
      color: #0066b1 !important;
      font-size: 10px;
      text-decoration: underline !important;
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
      align-self: flex-end;
    }
  }
}

.input_bg:nth-child(1) {
  margin-bottom: 30px;
}
</style>
<style scoped lang="scss" src="../assets/styles/rwd_register.scss">