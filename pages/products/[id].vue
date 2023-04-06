<template>
    <div>
        <Head>
            <Title>Turgui Murch | {{ product.title }}</Title>
            <Meta name="dscription " :content="product.description"/>
        </Head>
        <ProductsDetails :product="product"/>
    </div>
</template>

<script setup>

    const { id } = useRoute().params
    const url = 'https://fakestoreapi.com/products/' +id
    //fetch product 
    const {data: product} = await useFetch(url, { key:id } )
    if(!product.value){
        throw createError({
            statusCode: 404, statusMessage:'Product not found ',fatal:true
        })
    }
    definePageMeta({
    layout: 'design'
  })
</script>

<style>

</style>