<template>
  <form class="rounded w-4/5">
    <div class="input-group">
      <label class="label" for="current_price">တစ်ကျပ်သား ကာလပေါက်ဈေး (ကျပ်)</label>
      <input class="input" id="current_price" type="number" v-model="currentPrice" />
    </div>

    <div class="input-group">
      <label class="label" for="total_price">တစ်‌ရွေးတန်ဖိုး (ကျပ်)</label>
      <input class="input" id="total_price" type="number" v-model="pricePerYway" disabled />
    </div>

    <div class="font-bold input-group">ရွှေပမာဏ</div>

    <div class="input-group">
      <label class="label" for="kyttha_amount">ကျပ်သား</label>
      <input class="input" id="kyttha_amount" type="number" v-model="kytthaAmount" />
    </div>

    <div class="input-group">
      <label class="label" for="pae_amount">ပဲ</label>
      <input class="input" id="pae_amount" type="number" v-model="paeAmount" />
    </div>

    <div class="input-group">
      <label class="label" for="yway_amount">ရွေး</label>
      <input class="input" id="yway_amount" type="number" v-model="ywayAmount" />
    </div>

    <div class="input-group">
      <label class="label" for="total_yway">စုစုပေါင်း ရွေး</label>
      <input class="input" id="total_yway" type="number" v-model="totalYway" disabled />
    </div>

    <hr />
    <div class="input-group">
      <label class="label" for="total_price">စုစုပေါင်းတန်ဖိုး (ကျပ်)</label>
      <input class="input" id="total_price" type="number" v-model="totalPrice" disabled />
    </div>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'

const pricePerYway = ref(0)
const currentPrice = ref(0)

const kytthaAmount = ref(0)
const paeAmount = ref(0)
const ywayAmount = ref(0)
const totalYway = ref(0)

const totalPrice = ref(0)

watch([currentPrice], ([currentPrice]) => {
  pricePerYway.value = currentPrice / 128
})

watch([kytthaAmount, paeAmount, ywayAmount], ([kyttha, pae, yway]) => {
  totalYway.value = kyttha * 128 + pae * 8 + yway
})

watch([pricePerYway, totalYway], ([pricePerYway, totalYway]) => {
  totalPrice.value = pricePerYway * totalYway
})
</script>

<style scoped>
.label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}

.input {
  @apply appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring;
}
.input-group {
  @apply mt-3 mb-4 md:px-16 lg:px-32;
}
</style>
