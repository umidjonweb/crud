<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
   label: {
      type: String,
      default: ''
   },
   id: {
      type: String,
      default: Math.random().toString()
   },
   placeholder: {
      type: String,
      default: ''
   },
   modelValue: {
      type: [String, Number],
      default: ''
   },
   required: {
      type: Boolean,
      default: false
   },
   disabled: {
      type: Boolean,
      default: false
   },
   color: {
      type: String,
   },
   type: {
      type: String,
      default:'text'
   }
})
const emit = defineEmits(['update:modelValue', 'change'])

const value = computed({
   get() {
      return props.modelValue
   },

   set(value) {
      emit('update:modelValue', value)
      emit('change', value)
   }
})

</script>

<template>
   <div>
      <label :for="props.id" class="text-gray-50000">
         {{ props.label }}
         <span v-if="props.required" class="text-danger">*</span>
      </label>
      <input v-model="value" :id="props.id" :disabled="props.disabled" :required="props.required"
         :placeholder="props.placeholder" :type="props.type" class="mt-1 w-full rounded-lg px-4 py-2 text-black border border-gray-200"
         :class="props.color ? props.color : ''" />
   </div>
</template>

<style>
input::placeholder {
   color: gray;
}

input:invalid {
   outline: red;
}
</style>