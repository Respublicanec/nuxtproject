<template>
<div class="calculate">
  <input class="num" v-model="rrg" placeholder="0">

</div>
<div class="calculate">


  <button v-on:click="rrg+='1'">1</button>
  <button v-on:click="rrg+='2'">2</button>
  <button v-on:click="rrg+='3'">3</button>
  <button v-on:click="rrg+='4'">4</button>
  <button v-on:click="rrg+='5'">5</button>
  <button v-on:click="rrg+='6'">6</button>
  <button v-on:click="rrg+='7'">7</button>
  <button v-on:click="rrg+='8'">8</button>
  <button v-on:click="rrg+='9'">9</button>
  <button v-on:click="rrg+='-'">-</button>
  <button v-on:click="rrg+='0'">0</button>
  <button v-on:click="rrg+='+'">+</button>
</div>
<div class="calculate1">
 
  <button v-on:click="rrg =''">C</button>
  <button v-on:click="calculateResult">=</button>

</div>

</template>

<script setup>
import { ref } from 'vue'
const rrg = ref('')
const result = ref(0)
function calculateResult() {
  try {
    rrg.value = eval(rrg.value); 
  } catch (error) {
    rrg.value = 'Ошибка'; 
  }
};
</script>


<style>
        .calculate {
            display: flex;
            flex-wrap: wrap;
            max-width: 250px;
            margin: 10px auto;
            justify-content: center;
        }

        .calculate1 {
            display: flex;
            flex-wrap: wrap;
            max-width: 250px;
            margin: -10px auto;
           
            justify-content: center;
        }
        button {
            width: 60px;
            height: 60px;
            margin: 5px;
            font-size: 20px;
        }
        .num {
          border: 2px solid black; 
          padding: 10px;          
         
        }

    </style>