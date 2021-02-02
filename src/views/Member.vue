<template>
  <div id="member">
    <header></header>
    <div class="title">MY BMW ACCOUNT<button @click="logout">登出</button></div>
    <div class="container">
      <div class="wrap">
        <div class="wrap_top">
          <div class="wrap_top_title">
            個人資料
            <hr align="left" />
          </div>
          <div class="wrap_top_profile">
            <div class="icon"></div>
            <h3>金城 武</h3>
          </div>
        </div>
        <div class="wrap_bottom">
          <div class="member_data">
            <div class="member_data_title">基本資料</div>
            <div class="member_data_details">
              <div class="name">金城 武 Takeshi Kaneshiro</div>
              <div class="email">takeshi@gmail.com</div>
              <div class="birthday">1973/10/11</div>
              <div class="phonenumber">0952-0-10000</div>
            </div>
            <div class="member_data_edit">
              <a href="">Edit</a>
            </div>
          </div>
          <div class="wrap_right">
            <div class="address">
              <div class="address_title">我的地址</div>
              <div class="address_box">
                <div class="address_details">
                  <p>243</p>
                  <p>新北市 泰山區</p>
                  <p>貴子里</p>
                  <p>致遠新村55之1號</p>
                </div>
                <div class="address_edit">
                  <a href="">Edit</a>
                </div>
              </div>
            </div>
            <div class="credit_card">
              <div class="blur">
                <div class="blur_left">
                  <div class="number">
                    <div class="card_name">Takeshi Kaneshiro</div>
                    <div class="card_number">4521 7896 5412 3698</div>
                  </div>
                </div>
                <div class="blur_right">
                  <div class="credit_card_logo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrap"></div>
      <div class="wrap"></div>

      <!-- <button @click="logout">登出</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'member',
  methods: {
    logout() {
      this.axios
        .delete(process.env.VUE_APP_API + '/users/logout')
        .then((res) => {
          if (res.data.success) {
            this.$swal({
              icon: 'success',
              title: '成功',
              text: '登出成功',
            })

            // 清除 vuex
            this.$store.commit('logout')

            // 導回登入頁面
            if (this.$route.path !== '/') {
              this.$router.push('/login')
            }
          } else {
            this.$swal({
              icon: 'error',
              title: '錯誤',
              text: res.data.message,
            })
          }
        })
        .catch((error) => {
          // 若回來的狀態碼不是200 直接 alert 錯誤訊息
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: error.response.data.message,
          })
        })
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  // border: 1px solid rgba(0, 0, 0, 0.199);
}

#member {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
}

header {
  width: 100%;
  height: 80px;
  background-color: #0066b1;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 20;
}

.title {
  width: 100%;
  height: 20%;
  // margin-top: 80px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: #0066b1;
  font-size: 40px;
  font-weight: 700;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 80%;
  width: 100%;
  flex-wrap: wrap;
}

.wrap {
  width: 380px;
  height: 530px;
  background-color: #f5f5f5;
  border-radius: 35px;
  padding: 2%;
}

.wrap_top {
  width: 100%;
  height: 50%;

  .wrap_top_title {
    height: 20%;
    color: #504343;
    font-weight: 400;
    font-size: 32px;
    letter-spacing: 2px;

    hr {
      width: 40px;
      border: 1px solid;
    }
  }

  .wrap_top_profile {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #504343;
    font-weight: 500;

    .icon {
      height: 100px;
      width: 100px;
      border-radius: 100%;
      background: url(../assets/logos/wu.jpeg) no-repeat 30% / cover;
      margin-bottom: 10px;
    }
  }
}

.wrap_bottom {
  width: 100%;
  height: 50%;
  display: flex;
  // border-radius: 20px;

  .member_data {
    width: 50%;
    height: 100%;
    margin-right: 5px;
    border-radius: 20px;
    background-color: #fff;
    padding: 3%;

    .member_data_title {
      height: 10%;
      color: black;
    }

    .member_data_details {
      height: 70%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
      color: #504343;
      font-size: 12px;
    }

    .member_data_edit {
      height: 20%;
      position: relative;

      a {
        position: absolute;
        right: 0;
        bottom: 0;
        color: #0066b1 !important;
        font-size: 12px;
        text-decoration: underline !important;
      }
    }
  }

  .wrap_right {
    width: 50%;
    height: 100%;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    // border-radius: 20px;
    .address {
      width: 100%;
      height: 50%;
      border-radius: 20px;
      margin-bottom: 5px;
      background-color: #fff;
      padding: 5.5%;

      .address_title {
        height: 30%;
        color: black;
      }

      .address_box {
        height: 70%;
        display: flex;

        .address_details {
          width: 70%;
          height: 100%;
          font-size: 12px;
          color: #504343;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        }

        .address_edit {
          width: 20%;
          height: 100%;
          position: relative;

          a {
            position: absolute;
            right: 0;
            bottom: 0;
            color: #0066b1 !important;
            font-size: 12px;
            text-decoration: underline !important;
          }
        }
      }
    }

    .credit_card {
      width: 100%;
      height: 50%;
      border-radius: 20px;
      margin-top: 5px;
      padding: 2%;

      .blur {
        width: 100%;
        height: 100%;
        display: flex;

        position: relative;

        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(139deg, rgba(195, 34, 34, 0.671) 0%, rgba(45, 170, 253, 0.651) 100%);
          filter: blur(0.7px);
          border-radius: 17px;
          z-index: 0;
        }

        .blur_left {
          width: 70%;
          position: relative;
          font-size: 12px;
          color: white;
          padding-left: 10px;
          font-weight: 200;

          .number {
            height: 40%;
            position: absolute;
            bottom: 0;
            width: 130%;

            .card_name {
              padding-bottom: 10px;
              // width: 120%;
            }
          }
        }

        .blur_right {
          width: 30%;
          z-index: 100;
          position: relative;

          .credit_card_logo {
            width: 30px;
            height: 30px;
            border-radius: 100%;
            background: #ff4f38;
            position: absolute;
            left: -10px;
            top: 10px;
            &::after {
              content: '';
              position: absolute;
              width: 30px;
              height: 30px;
              border-radius: 100%;
              background: #ffb600;
              top: 0;
              left: 15px;
            }
          }
        }
      }
    }
  }
}
</style>
