<template>
  <div id="checkout">
    <header>
      <h1>CHECKOUT PAGE</h1>
    </header>

    <div class="container">
      <div class="wrap1 wrap">
        <div class="center content-inputs">
          <vs-input v-model="firstname" placeholder="姓">
            <template #message-danger>
              必填
            </template>
          </vs-input>
          <vs-input v-model="lastname" placeholder="名">
            <template #message-danger>
              必填
            </template>
          </vs-input>

          <vs-input v-model="email" placeholder="電郵地址">
            <template v-if="validEmail" #message-success>
              Email Valid
            </template>
            <template v-if="!validEmail && value4 !== ''" #message-danger>
              Email Invalid
            </template>
          </vs-input>

          <vs-input v-model="phone" placeholder="電話">
            <template #message-danger>
              必填
            </template>
          </vs-input>

          <vs-input v-model="address" placeholder="地址">
            <template #message-danger>
              必填
            </template>
          </vs-input>

          <vs-select placeholder="城市" v-model="value">
            <vs-option label="台北市" value="1">
              台北市
            </vs-option>
            <vs-option label="新北市" value="2">
              新北市
            </vs-option>
            <vs-option label="基隆市" value="3">
              基隆市
            </vs-option>
            <vs-option label="桃園市" value="4">
              桃園市
            </vs-option>
            <vs-option label="新竹市" value="5">
              新竹市
            </vs-option>
            <vs-option label="新竹縣" value="6">
              新竹縣
            </vs-option>
            <vs-option label="苗栗縣" value="7">
              苗栗縣
            </vs-option>
            <vs-option label="台中市" value="8">
              台中市
            </vs-option>
            <vs-option label="彰化縣" value="9">
              彰化縣
            </vs-option>
            <vs-option label="南投縣" value="10">
              南投縣
            </vs-option>
            <vs-option label="雲林縣" value="11">
              雲林縣
            </vs-option>
            <vs-option label="嘉義縣" value="12">
              嘉義縣
            </vs-option>
            <vs-option label="台南市" value="13">
              台南市
            </vs-option>
            <vs-option label="高雄市" value="14">
              高雄市
            </vs-option>
            <vs-option label="屏東縣" value="15">
              屏東縣
            </vs-option>
            <vs-option label="宜蘭縣" value="16">
              宜蘭縣
            </vs-option>
            <vs-option label="花蓮縣" value="17">
              花蓮縣
            </vs-option>
            <vs-option label="台東縣" value="18">
              台東縣
            </vs-option>
          </vs-select>

          <vs-input v-model="postcode" placeholder="郵遞區號" type="number">
            <template #message-danger>
              必填
            </template>
          </vs-input>
        </div>
      </div>

      <div class="wrap2 wrap">
        <div class="box1">
          <div class="center">
            <vs-radio v-model="picked1" val="1">
              BMW 台北濱江展示中心
            </vs-radio>
            <hr />
            <vs-radio v-model="picked1" val="2">
              BMW 台北內湖展示中心
            </vs-radio>
            <hr />
            <vs-radio v-model="picked1" val="3">
              BMW 台北敦南展示中心
            </vs-radio>
            <hr />
            <vs-radio v-model="picked1" val="4">
              BMW 台北民生展示中心
            </vs-radio>
          </div>
        </div>
        <div class="box2">
          <div class="center">
            <vs-radio v-model="picked2" val="1">
              PayPal
            </vs-radio>
            <hr />
            <vs-radio v-model="picked2" val="2">
              Credit Card
            </vs-radio>
          </div>
        </div>
      </div>
      <div class="wrap3 wrap">
        <div class="box3">
          <div class="detailsBox">
            <div class="productTitle">
              <div class="productTitle_title">商品</div>
              <div class="productTitle_price">價格</div>
            </div>
            <div class="productName">
              <div class="productName_title">BMW M4 COMPETITION X KITH</div>
              <div class="productName_price">NT$7,980,000</div>
            </div>
            <div class="priceBox">
              <div class="priceBox_price">
                <div class="priceBox_price_title">價格</div>
                <div class="priceBox_price_price">NT$7,980,000</div>
              </div>
              <div class="priceBox_shipping">
                <div class="priceBox_shipping_title">運費</div>
                <div class="priceBox_shipping_price">NT$0</div>
              </div>
              <div class="priceBox_total">
                <div class="priceBox_total_title">總價</div>
                <div class="priceBox_total_price">NT$7,980,000</div>
              </div>
              <div class="preorderPrice">( 只會從您的信用卡扣款 NT$ 3000 訂金 )</div>
            </div>
          </div>
          <div class="colorBox">
            <div class="colorTitle">
              <div class="colorTitle_title">選擇顏色</div>
            </div>
            <div class="car">
              <div class="carPic">
                <img :src="picture" />
              </div>
              <div class="carColor">
                <div class="color1" v-on:click="changePic1"></div>
                <div class="color2" v-on:click="changePic2"></div>
                <div class="color3" v-on:click="changePic3"></div>
                <div class="color4" v-on:click="changePic4"></div>
                <div class="color5" v-on:click="changePic5"></div>
              </div>
              <div class="carColorName">{{ colorName }}</div>
            </div>
          </div>
        </div>
        <button>PLACE ORDER NOW</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '#checkout',
  data: () => ({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phone: '',
    postcode: '',
    value: '',
    picked1: 1,
    picked2: 1,
    picture: require('../assets/M4/Sao Paulo Yellow.png'),
    colorName: 'SAO PAULO YELLOW',
  }),
  computed: {
    validEmail() {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)
    },
  },
  methods: {
    changePic1: function() {
      this.picture = require('../assets/M4/Sao Paulo Yellow.png')
      this.colorName = 'SAO PAULO YELLOW'
    },
    changePic2: function() {
      this.picture = require('../assets/M4/ALPINE WHITE.png')
      this.colorName = 'ALPINE WHITE'
    },
    changePic3: function() {
      this.picture = require('../assets/M4/Black Sapphire Metallic.png')
      this.colorName = 'BLACK SAPPHIRE METALLIC'
    },
    changePic4: function() {
      this.picture = require('../assets/M4/Toronto Red Metallic.png')
      this.colorName = 'TORONTO RED METALLIC'
    },
    changePic5: function() {
      this.picture = require('../assets/M4/Portimao Blue Metallic.png')
      this.colorName = 'PORTIMAO BLUE METALLIC'
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  // border: 1px solid black;
}

// html, body {
//   scroll-behavior: smooth;
// }
#checkout {
  width: 100%;
  height: 100vh;
  // background: rgb(250, 250, 250);
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

  h1 {
    font-size: 30px;
    font-weight: bold;
  }
}

.container {
  width: 100%;
  height: 90%;
  padding-top: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.wrap {
  width: 380px;
  height: 600px;
}

.wrap1 {
  position: relative;
  border-radius: 35px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 4px 5px 2px #0067b17e;
  transition: all 0.5s;
  &::before {
    content: '1. 帳單地址';
    font-size: 25px;
    position: absolute;
    top: -15px;
    left: -15px;
  }
  &:hover {
    box-shadow: 0px 4px 5px 2px #e7222e;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
  }
}

.wrap2 {
  .box1 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    background: rgba(255, 255, 255, 1);
    height: 280px;
    width: 100%;
    box-shadow: 0px 4px 5px 2px #0067b17e;
    transition: all 0.5s;
    &::before {
      content: '2. 交車地點';
      font-size: 25px;
      position: absolute;
      top: -15px;
      left: -15px;
    }
    &:hover {
      box-shadow: 0px 4px 5px 2px #e7222e;
    }

    // .center {
    //   display: flex;
    //   align-items: center;
    //   justify-content: space-evenly;
    //   flex-direction: column;
    //   height: 70%;
    //   width: 100%;
    //   font-weight: 500;
    //   color: #504343;
    //   // .vs-radio-content:nth-child(1, ) {
    //   //   padding-bottom: 10px;
    //   //   border-bottom: 1px solid #aaa;
    //   // }
    //   // .vs-radio-content:nth-child(2) {
    //   //   padding-bottom: 10px;
    //   //   border-bottom: 1px solid #aaa;
    //   // }
    //   // .vs-radio-content:nth-child(3) {
    //   //   padding-bottom: 10px;
    //   //   border-bottom: 1px solid #aaa;
    //   // }

    //   hr {
    //     background-color: #aaa;
    //     width: 80%;
    //   }
    // }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 70%;
    width: 60%;
    font-weight: 500;
    color: #504343;

    hr {
      background-color: #aaa;
      width: 100%;
    }

    .vs-radio-content {
      align-self: start;
    }
  }

  .box2 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-top: 80px;
    border-radius: 35px;
    background: rgba(255, 255, 255, 1);
    height: 150px;
    width: 100%;
    box-shadow: 0px 4px 5px 2px #0067b17e;
    transition: all 0.5s;
    &::before {
      content: '3. 付款方式';
      font-size: 25px;
      position: absolute;
      top: -15px;
      left: -15px;
    }
    &:hover {
      box-shadow: 0px 4px 5px 2px #e7222e;
    }

    hr {
      background-color: #aaa;
      width: 100%;
    }

    .center {
      width: 60%;
      .vs-radio-content {
        align-self: start;
      }
    }
  }
}

.wrap3 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &::before {
    content: '4. 確認訂單 ';
    font-size: 25px;
    position: absolute;
    top: -15px;
    left: -15px;
  }

  .box3 {
    display: flex;
    flex-direction: column;
    padding: 10% 5% 3% 5%;
    border-radius: 35px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 5px 2px #0067b17e;
    transition: all 0.5s;
    &:hover {
      box-shadow: 0px 4px 5px 2px #e7222e;
    }
    width: 100%;
    height: 510px;
  }

  button {
    width: 100%;
    border-radius: 20px;
    background-color: #0066b1;
    color: white;
    font-weight: 500;
    font-size: 27px;
  }
}

.detailsBox {
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;

  .productTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #aaa;
    font-weight: 500;
    padding-bottom: 10px;
  }

  .productName {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #504343;
    font-weight: 500;
    font-size: 13px;
    padding: 10px 0px;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
  }

  .priceBox {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    font-size: 13px;
    color: #504343;

    .priceBox_price {
      align-self: flex-end;
      display: flex;
      justify-content: space-between;
      width: 50%;
    }

    .priceBox_shipping {
      align-self: flex-end;
      display: flex;
      justify-content: space-between;
      width: 50%;
    }

    .priceBox_total {
      align-self: flex-end;
      display: flex;
      justify-content: space-between;
      width: 50%;
      color: black;
    }

    .preorderPrice {
      align-self: flex-end;
      width: 100%;
      text-align: end;
    }
  }
}

.priceBox_price_price .priceBox_shipping_price .priceBox_total_price {
  font-weight: 700;
}

.colorBox {
  height: 60%;
  width: 100%;

  .colorTitle {
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .colorTitle_title {
      color: #aaa;
      font-weight: 500;
      padding-bottom: 10px;
      border-bottom: 1px solid #aaa;
    }
  }

  .car {
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .carPic {
      height: 75%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 0% 80%;
        transform: scale(1.2, 1.2);
      }
    }

    .carColor {
      height: 15%;
      display: flex;
      width: 60%;
      align-items: center;
      justify-content: space-evenly;

      div {
        width: 18px;
        height: 18px;
        border-radius: 100%;
        border: 1px solid rgba(0, 0, 0, 0.562);
        background-color: #000;
        cursor: pointer;
        z-index: 10;
      }

      div:nth-child(1) {
        background-color: #dcdd2a;
      }
      div:nth-child(2) {
        background-color: white;
      }
      div:nth-child(3) {
        background-color: black;
      }
      div:nth-child(4) {
        background-color: red;
      }
      div:nth-child(5) {
        background-color: navy;
      }
    }

    .carColorName {
      height: 10%;
      font-size: 12px;
      color: #504343;
      line-height: 20px;
    }
  }
}
</style>
