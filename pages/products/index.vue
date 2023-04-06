<template>
    <div class="grid  grid-cols-4 gap-5">
      <div v-for="(p,i) in product" :key="i">
        <ProductsCard :product="p"/>
      </div>
    </div>
</template>
<script setup>
  const { data: product } = await useFetch('https://fakestoreapi.com/products')
  useHead({
   title:'Nuxt turgui| merch' , 
   meta: 
   [{ name:'description', content:'nuxt 3 merch'}]
  })
  definePageMeta({
    layout: 'product'
  })
</script>