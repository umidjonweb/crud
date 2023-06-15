<script setup>
import { ref, reactive, computed } from 'vue'
import OrderModal from '../components/OrderModal.vue'
import { getDateDay_UTIL } from '../utils/date.js'
const isModalShow = ref(false)
const isEdit = ref(false)

const lists = ref((JSON.parse(localStorage.getItem('orderList'))) ?? [])

const orderInfo = ref({
   id: Math.random() * 100,
   name: '',
   date: new Date(),
   tovar: '',
   price: 0
})

function listStorage() {
   localStorage.setItem('orderList', JSON.stringify(lists.value))
   lists.value = [...(JSON.parse(localStorage.getItem('orderList')))]
}

listStorage()

function orderList(info) {
   if (isEdit.value) {
      lists.value = lists.value.map(item => {
         if (item.id == info.id) {
            return info
         }
         else {
            return item
         }
      })
   }
   else {
      lists.value.push(info)
   }
   listStorage()
   isModalShow.value = false
}

function deleteBuyer(buyer) {
   lists.value = lists.value.filter(item => item.id != buyer.id)
   listStorage()
}

function editBuyer(buyer) {
   isModalShow.value = true
   isEdit.value = true
   orderInfo.value = buyer
}

</script>

<template>
   <main>
      <OrderModal :orderInfo="orderInfo" @cancel="isModalShow = false" @submit="orderList" :isModalShow="isModalShow" />
      <div>
         <div class="flex justify-end my-2">
            <button @click="isModalShow = true; isEdit = false"
               class="bg-blue-600 text-white rounded-md px-6 py-2">Buyurtma
               qo'shish</button>
         </div>
         <p class="text-center text-red-600 text-2xl" v-if="!lists.length"> Buyurtma yo'q</p>
         <div v-else>
            <div class="w-full grid grid-cols-4  px-4 py-2">
               <p class="text-md font-medium text-gray-500">Buyurtmachi Ism</p>
               <p class="text-md font-medium text-gray-500">Buyutma sanasi</p>
               <p class="text-md font-medium text-gray-500">Tovar nomi</p>
               <p class="text-md font-medium text-gray-500">Narxi</p>
            </div>

            <div v-for="(item, ind) in lists" :key="ind"
               class="w-full grid grid-cols-4 px-4 py-2 mt-1 rounded-sm hover:bg-gray-300"
               :class="ind % 2 === 0 ? 'bg-gray-100' : 'bg-white'">
               <p>{{ item.name }}</p>
               <p>{{ getDateDay_UTIL(item.date) }}</p>
               <p>{{ item.tovar }}</p>
               <div class="flex justify-between lists-center">
                  <p>{{ item.price }}</p>
                  <div class="flex gap-3">
                     <img @click="deleteBuyer(item)" class="w-6 h-6 cursor-pointer" src="@/assets/img/delete.svg" alt="">
                     <img @click="editBuyer(item)" class="w-6 h-6 cursor-pointer" src="@/assets/img/edit.svg" alt="">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
</template>
