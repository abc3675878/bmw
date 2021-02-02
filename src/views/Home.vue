<template>
  <div id="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section" id="page1">
        <div class="m4_kith">
          <div class="group1">
            <div class="text">
              <h1>M4 COMPETITION X KITH</h1>
              <p>預約試駕</p>
            </div>
            <div class="btn">
              <router-link to="/kith"><button>更多詳情</button></router-link>
              <router-link to="/checkout"><button class="orderBtn">立即訂購</button></router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="page2">
        <div class="m4">
          <div class="group2">
            <div class="text">
              <h1>THE ALL-NEW M4</h1>
              <p>預約試駕</p>
            </div>
            <div class="btn">
              <button>更多詳情</button>
              <button class="orderBtn">立即訂購</button>
            </div>
          </div>
        </div>
      </div>

      <div class="section" id="page3">
        <div class="m3">
          <div class="group3">
            <div class="text">
              <h1>THE ALL-NEW M3</h1>
              <p>預約試駕</p>
            </div>
            <div class="btn">
              <button>更多詳情</button>
              <button class="orderBtn">立即訂購</button>
            </div>
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
}

h1 {
  font-size: 58px;
  font-weight: bold;
  margin-bottom: 10px;
}

// button {
//   width: 200px;
//   color: white;
//   border: 0px;
//   background: rgba(214, 214, 214, 0.4);
//   border-radius: 100px;
//   font-size: 16px;
//   padding: 3px;
//   font-weight: normal;
// }

// .orderBtn {
//   background: #0066b1;
//   margin-left: 30px;
// }

.m4_kith {
  height: 100vh;
  background: url(../assets/M4_kith/download-free-car-images.jpg) center/cover no-repeat;
  position: relative;

  .group1 {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    right: 50px;
    bottom: 100px;

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .btn {
      margin-top: 30px;
    }
  }
}

.m4 {
  height: 100vh;
  background: url(../assets/M4/home.jpg) center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .group2 {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 70%;

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .btn {
      margin-top: 30px;
    }
  }
}

.m3 {
  height: 100vh;
  background: url(../assets/M3/home.jpg) center/cover no-repeat;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .group3 {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    right: 120px;

    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .btn {
      margin-top: 30px;
    }
  }
}
</style>
