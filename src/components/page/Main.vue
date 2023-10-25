<template>
    <div class="container">
        <h2>메뉴고르기</h2>
        <h3></h3>
        <div class="version">
            <div class="form">
                <input v-model="newMenu" class="input" placeholder="메뉴를 입력하세요" @keyup.enter="fnRegister"/>
                <button class="registerBtn" @click="fnRegister">등록</button>
                <button class="setValueBtn" @click="fnSet">기본값</button>
            </div>
            <div class="menu">
                <div  class="menuItem" v-for="(item, idx) in menuGroup" :key="idx" >
                    <ul class="text">
                        <li>{{ item.name }}</li>
                    </ul>
                    <button class="removeBtn" @click="fnRemove(idx)">X</button>
                </div>
            </div>
        </div>
        <div class="result" v-show="isShow">
            <h4>{{ result }}</h4>
            <div class="reset">
                <button class="resetBtn" @click="fnReset">초기화</button>
            </div>
        </div>
        <div class="confirm">
            <button class="confirmBtn" @click="fnRandom">{{ isShow ? '다시하기' : '확인' }}</button>

        </div>
    </div>
</template>

<script>
import { MainJs } from '@/resources/js';
export default MainJs;
</script>

<style scoped>

</style>
