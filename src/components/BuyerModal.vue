<script setup>
import { ref, reactive } from 'vue'
import { ElDatePicker } from 'element-plus';


const props = defineProps({
   isModalShow: {
      type: Boolean,
      default: false
   },
   buyerInfo: {
      type: Object
   }
})

const emit = defineEmits(['cancel', 'submit'])

function submitInfo() {
   emit('submit', { ...props.buyerInfo })
      props.buyerInfo.id = Math.random() * 100,
      props.buyerInfo.name = '',
      props.buyerInfo.date = new Date(),
      props.buyerInfo.address = '',
      props.buyerInfo.phone = '+998'
}

</script>
<template>
   <div class="absolute inset-0 w-screen h-screen bg-black/40 flex justify-center items-center"
      :class="props.isModalShow ? 'scale-1' : 'scale-0'">
      <form @submit.prevent="submitInfo" class="relative z-20 max-w-[600px] w-full bg-white rounded-xl p-6">
         <BaseInput required v-model="props.buyerInfo.name" label="Ismni kiriting" placeholder="Ismni kiriting" />

         <div class="flex w-full p-0 flex-wrap">
            <div class="flex-1 py-4">
               <span class="block text-gray-500 mb-1">Tug'ilgan sanangizni kiriting</span>
               <el-date-picker required v-model="props.buyerInfo.date" type="date" placeholder="Tug'ilgan sanangizni kiriting"
                  size="large" :clearable="true" />
            </div>
         </div>

         <BaseInput required v-model="props.buyerInfo.address" label="Manzilni kiriting" placeholder="Manzilni kiriting" />

         <div class="mt-4 mb-2">
            <label for="mask">Telfonni kiriting</label>
            <input required class="w-full mt-1 px-4 py-2 rounded-lg border border-gray-200" maxlength="18" type="text"
               name="mask" placeholder="+998 " v-mask="'+###(##)-###-##-##'" v-model="buyerInfo.phone">
         </div>

         <div class="flex gap-4 mt-4 justify-end">
            <button type="button" @click="emit('cancel')"
               class="border border-blue-500 text-blue-600 px-6 py-2 rounded-md">Chiqish</button>
            <button type="submit"
               class="border border-blue-600 text-white bg-blue-600 px-6 py-2 rounded-md">Saqlash</button>
         </div>
      </form>
      <div @click="emit('cancel')" class="absolute w-full h-full inset-0 z-10">

      </div>
   </div>
</template>


<style>
.el-date-editor.el-input {
   width: 100% !important;
}
</style>