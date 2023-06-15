<script setup>
import { ref, reactive } from 'vue'
import { ElDatePicker } from 'element-plus';


const props = defineProps({
   isModalShow: {
      type: Boolean,
      default: false
   },
   orderInfo: {
      type: Object
   }
})

const emit = defineEmits(['cancel', 'submit'])

function submitInfo() {
   emit('submit', { ...props.orderInfo })
   props.orderInfo.id = Math.random() * 100,
      props.orderInfo.name = '',
      props.orderInfo.date = new Date(),
      props.orderInfo.tovar = '',
      props.orderInfo.price = 0
}

</script>
<template>
   <div class="absolute inset-0 w-screen h-screen bg-black/40 flex justify-center items-center"
      :class="props.isModalShow ? 'scale-1' : 'scale-0'">
      <form @submit.prevent="submitInfo" class="relative z-20 max-w-[600px] w-full bg-white rounded-xl p-6">
         <BaseInput required v-model="props.orderInfo.name" label="Ismni kiriting" placeholder="Ismni kiriting" />

         <div class="flex w-full p-0 flex-wrap">
            <div class="flex-1 py-4">
               <span class="block text-gray-500 mb-1">Buyurtma sanasini kiriting</span>
               <el-date-picker required v-model="props.orderInfo.date" type="date"
                  placeholder="Tug'ilgan sanangizni kiriting" size="large" :clearable="true" />
            </div>
         </div>

         <BaseInput required v-model="props.orderInfo.tovar" label="Tovarni kiriting" placeholder="Tovarni kiriting" />

         <BaseInput class="my-4" :type="'number'" required v-model="props.orderInfo.price" label="Narxni kiriting"
            placeholder="Narxni kiriting" />

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