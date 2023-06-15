<script setup>
import { ref, reactive, computed } from 'vue'
import BuyerModal from '../components/BuyerModal.vue'
import { getDateDay_UTIL } from '../utils/date.js'
const isModalShow = ref(false)
const isEdit = ref(false)

const lists = ref((JSON.parse(localStorage.getItem('buyerLists'))) ?? [])

const buyerInfo = ref({
   id: Math.random() * 100,
   name: '',
   date: new Date(),
   address: '',
   phone: '+998'
})

function listStorage() {
   localStorage.setItem('buyerLists', JSON.stringify(lists.value))
   lists.value = [...(JSON.parse(localStorage.getItem('buyerLists')))]
}

listStorage()

function buyerList(info) {
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
   buyerInfo.value = buyer
}

</script>

<template>
   <main>
      <BuyerModal :buyerInfo="buyerInfo" @cancel="isModalShow = false" @submit="buyerList" :isModalShow="isModalShow" />
      <div>
         <div class="flex justify-end my-2">
            <button @click="isModalShow = true; isEdit = false" class="bg-blue-600 text-white rounded-md px-6 py-2">Mijoz
               qo'shish</button>
         </div>
         <p class="text-center text-red-600 text-2xl" v-if="!lists.length"> Mijozlar yo'q</p>
         <div v-else>
            <div class="w-full grid grid-cols-4  px-4 py-2">
               <p class="text-md font-medium text-gray-500">Ism</p>
               <p class="text-md font-medium text-gray-500">Tug'ilgan Sana</p>
               <p class="text-md font-medium text-gray-500">Manzil</p>
               <p class="text-md font-medium text-gray-500">Tel Raqam</p>
            </div>

            <div v-for="(item, ind) in lists" :key="ind"
               class="w-full grid grid-cols-4 px-4 py-2 mt-1 rounded-sm hover:bg-gray-300"
               :class="ind % 2 === 0 ? 'bg-gray-100' : 'bg-white'">
               <p>{{ item.name }}</p>
               <p>{{ getDateDay_UTIL(item.date) }}</p>
               <p>{{ item.address }}</p>
               <div class="flex justify-between lists-center">
                  <p>{{ item.phone }}</p>
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
