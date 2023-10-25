<template>
  <div class="container">
    <!-- header start -->
    <div class="header">
      <div class="title">메뉴고르기</div>
      <div class="sub">🍕🍔🍟🌭🍿🥞🥖🫓🥪🍗🥟</div>
    </div>
    <!-- header end -->

    <!-- contents start -->
    <div class="contents">
      <div class="form">
        <input
          v-model="newMenu"
          class="input"
          placeholder="메뉴를 입력하세요"
          @keyup.enter="fnRegister"
        />
        <button class="registerBtn" @click="fnRegister">등록</button>
        <button class="setValueBtn" @click="fnSet">기본값</button>
      </div>
      <div class="menu">
        <div class="menuitem" v-for="(item, idx) in menuGroup" :key="idx">
          <!-- <ul class="text"> -->
          <li>{{ item.name }}</li>
          <button class="removeBtn" @click="fnRemove(idx)">X</button>
          <!-- </ul> -->
        </div>
      </div>
    </div>
    <!-- contents end -->

    <!-- bottom start -->
    <div class="bottom">
      <div class="result" v-show="isShow">
        <h4>{{ result }}</h4>
      </div>
      <button class="confirmBtn" @click="fnRandom">
        {{ isShow ? "다시하기" : "확인" }}
      </button>
      <button v-show="isShow" class="resetBtn" @click="fnReset">초기화</button>
    </div>
    <!-- bottom end -->
  </div>
</template>

<script>
// TODO:: 결과 링크 공유 기능 추가
import { MainJs } from "@/resources/js";
export default MainJs;
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 750px;
  padding: 20px 15px;
  border: 1px solid red;
  background-color: #fff;

  button {
    border: none;
    outline: none;
    background-color: inherit;
    cursor: pointer;
  }

  .header {
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 60px;
    margin-top: 10px;
    padding: 10px;
    top: 0;
    position: fixed;
    z-index: 1000;
    background-color: #fff;

    .title {
      font-size: 25px;
      font-weight: 800;
    }
    .sub {
      font-size: 20px;
      margin-top: 10px;
    }
  }

  .contents {
    margin: 60px 0 80px 0;
    width: 100%;
    min-height: 600px;
    border: 1px solid green;
    .form {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0 20px 0;
      height: 60px;
      width: 100%;

      .input {
        width: 200px;
        margin-right: 10px;
        height: 40px;
        padding: 0 5px;
        font-size: 15px;
      }

      .registerBtn {
        height: 40px;
        width: 40px;
        margin-right: 10px;
        font-size: 16px;
        font-weight: 800;
        border-radius: 5px;
        color: rgb(243, 86, 24);
      }
      .registerBtn:active {
        background-color: rgb(252, 138, 93);
        color: #fff;
      }

      .setValueBtn {
        height: 40px;
        width: 60px;
        font-size: 16px;
        font-weight: 800;
        color: rgb(118, 118, 117);
      }
      .setValueBtn:active {
        background-color: rgb(118, 118, 117);
        color: #fff;
      }
    }

    .reset {
      margin: 10px 0;
      .resetBtn {
        width: 70px;
        height: 30px;
      }
    }

    .menu {
      min-height: 200px;
      display: flex;
      flex-direction: column;

      li {
        list-style: none;
      }
      .menuitem {
        display: flex;
        justify-content: space-between;
        margin: 5px 0;
        width: 100%;
      }
    }
  }

  .bottom {
    margin: 10px 0;
    bottom: 0;
    width: 100%;
    position: fixed;
    z-index: 1000;
    background: #fff;
    align-items: center;
    justify-content: center;
    height: 70px;

    .result {
      margin-bottom: 40px;
      height: 30px;
      border: 1px solid purple;
    }

    .confirmBtn {
      height: 40px;
      width: 100%;
      font-size: 16px;
      font-weight: 800;
    }
  }
}
</style>
