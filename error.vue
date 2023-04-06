<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <p class="mt-7 text-7xl font-bold">{{ error.statusCode }}</p>
        <p class="mt-7 text-6xl">Ooops..</p>
        <p class="mt-7 p-2 m-2">{{ error.message }}</p>
        <!-- <nuxt-link class="btn p-2 m-2 mt-2" to="/products">Go to products</nuxt-link> -->
        <button class="btn my-7" @click="handleclearError" >Go Home....</button>
    </div>
</template>

<script setup>

    defineProps(['error'])
    const handleclearError =()=> clearError({
        redirect: '/'
    })

</script>

<style >

</style>