<template>
  <div id="app">
    <div class="hidden">
      <vs-navbar square center-collapsed fixed v-model="active">
        <template #left>
          <box-icon
            class="menuBtn"
            name="menu"
            color="#ffffff"
            size="md"
            @click="activeSidebar = !activeSidebar"
          ></box-icon>
        </template>

        <!-- <vs-navbar-item :active="active == 'guide'" id="guide">
          <router-link to="/">Home</router-link>
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'docs'" id="docs">
          <router-link to="/about">About</router-link>
        </vs-navbar-item> -->

        <template #right>
          <router-link to="/">
            <img src="./assets/logos/logo_m.png" width="50px" />
          </router-link>
          <router-link to="/">
            <img src="./assets/logos/logo_bmw_white.png" width="50px" />
          </router-link>
        </template>
      </vs-navbar>

      <!-- Side Bar -->
      <!-- Side Bar -->
      <!-- Side Bar -->

      <vs-sidebar background="dark" fixed textWhite absolute v-model="active" :open.sync="activeSidebar">
        <template>
          <div class="sideBarLogo">
            <img src="./assets/logos/logo_bmw_white.png" width="50px" height="50px" />
          </div>
        </template>

        <vs-sidebar-item id="home">
          <!-- <template #icon>
            <i class="bx bx-home"></i>
          </template> -->
          <router-link to="/">HOME</router-link>
        </vs-sidebar-item>

        <vs-sidebar-item id="kith">
          <router-link to="/kith">M4 COMPETITION X KITH</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="M4">
          <router-link to="/m4">THE ALL-NEW M4</router-link>
        </vs-sidebar-item>
        <vs-sidebar-item id="M3">
          <router-link to="/m3">THE ALL-NEW M3</router-link>
        </vs-sidebar-item>

        <!-- Side bar Footer -->
        <!-- Side bar Footer -->
        <!-- Side bar Footer -->
        <template #footer>
          <vs-row justify="flex-end">
            <vs-avatar>
              <router-link class="login" to="/login"><box-icon name="user"></box-icon></router-link>
            </vs-avatar>
            <!-- <vs-avatar>
              <button @click="logout"><box-icon name="user"></box-icon></button>
            </vs-avatar> -->
            <!-- 
            <vs-avatar badge-color="danger" badge-position="top-right">
              <box-icon name="bell"></box-icon>
            </vs-avatar> -->
          </vs-row>
        </template>
      </vs-sidebar>
    </div>
    <router-view />
    <!-- <footer class="footer">
      This is footer
    </footer> -->
  </div>
</template>

<script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>

<script>
export default {
  name: 'app',
  data: () => ({
    active: 'home',
    activeSidebar: false,
  }),
  computed: {
    user() {
      return this.$store.state.user
    },
  },
  methods: {
    // logout() {
    //   this.axios
    //     .delete(process.env.VUE_APP_API + '/users/logout')
    //     .then((res) => {
    //       if (res.data.success) {
    //         alert('登出成功')

    //         // 清除 vuex
    //         this.$store.commit('logout')

    //         // 導回登入頁面
    //         if (this.$route.path !== '/') {
    //           this.$router.push('/')
    //         }
    //       } else {
    //         alert(res.data.message)
    //       }
    //     })
    //     .catch((error) => {
    //       // 若回來的狀態碼不是200 直接 alert 錯誤訊息
    //       alert(error.response.data.message)
    //     })
    // },

    heartbeat() {
      this.axios.get(process.env.VUE_APP_API + '/users/heartbeat').then((res) => {
        // 若 vuex 是登入中
        if (this.user.id.length > 0) {
          // 但是後端沒登入
          if (!res.data) {
            this.$swal({
              icon: 'error',
              title: '錯誤',
              text: '登入時效已過',
            })

            // 清除 vuex
            this.$store.commit('logout')

            // 導回登入頁面
            if (this.$route.path !== '/') {
              this.$router.push('/')
            }
          }
        }
      })
      // .catch((error) => {
      //   this.$swal({
      //     icon: 'error',
      //     title: '錯誤',
      //     text: '發生錯誤',
      //   })
      //   this.$store.commit('logout')
      //   // 導回登入頁面
      //   if (this.$route.path !== '/') {
      //     this.$router.push('/')
      //   }
      // })
    },
  },

  mounted() {
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 5000)
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');

* {
  font-family: 'Noto Sans TC', sans-serif;
  letter-spacing: 1px;
}

html,
body {
  margin: 0;
  padding: 0;
}

button {
  width: 200px;
  color: white;
  border: 0px;
  background: rgba(214, 214, 214, 0.4);
  border-radius: 100px;
  font-size: 16px;
  padding: 3px;
  font-weight: normal;
}

.orderBtn {
  background: #0066b1;
  margin-left: 30px;
}

.vs-sidebar__item__text {
  display: block;
  width: 100%;
  a {
    display: block;
    width: 100%;
  }
}

#app {
  a {
    color: white;
    text-decoration: none;
  }
  .vs-navbar-content {
    background-color: transparent;
    height: 80px;
  }

  .vs-navbar {
    height: 100%;

    a {
      color: white;
      margin-left: 20px;
    }
  }

  .vs-sidebar-content.open {
    position: fixed !important;
  }

  .sideBarLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 80px;
  }

  .menuBtn {
    cursor: pointer;
  }

  .footer {
    width: 100%;
    height: 100px;
    background-color: grey;
    position: relative;
    bottom: 0;
  }

  .login {
    width: 100%;
    height: 100%;

    box-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
