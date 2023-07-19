<template>
  <div class="my-3">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="id">
      {{ label }}
    </label>
    <input class="appearance-none border rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           :id="id" :type="type" :placeholder="placeholder" :disabled="disabled" :value="modelValue" @input="updateValue($event.target.value)">
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps(['model', 'label', 'type', 'placeholder', 'id', 'disabled']);
const { emit } = defineEmits(['update:model']);
const modelValue = ref(props.model);

const updateValue = (value) => {
  modelValue.value = value;
  emit('update:model', value);
};
</script>

<style scoped>

</style>
