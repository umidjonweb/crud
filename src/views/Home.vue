<script setup>
import IconBuyer from '../components/icons/IconHome.vue'
import IconOrder from '../components/icons/IconUser.vue'
</script>

<template>
   <main>
      <div class="h-screen flex">
         <div class="w-[300px] bg-green-500 h-full  p-4">
            <RouterLink class="flex gap-4 px-4 py-3  text-white rounded-md hover:bg-green-700" to="/">
               <IconBuyer /> <span>Mijozlar</span>
            </RouterLink>
            <RouterLink class="flex gap-4 px-4 py-3 text-white rounded-md hover:bg-green-700" to="/order">
               <IconOrder /> <span> Buyurtmalar </span>
            </RouterLink>
         </div>
         <div class="grow p-6">
            <RouterView></RouterView>
         </div>
      </div>
   </main>
</template>
