<template>
    <div class="dark:bg-slate-800">  
        <header class="shadow-sm bg-green-50 p-4">
            <nuxt-link  class="font-bold text-green-600 hover:text-gray-600" to="/">Turgui Brand Murch</nuxt-link>
        </header>


        
        <!-- output -->
        <div class="container mx-auto p-4">
            <slot/>
        </div>




        <footer class="shadow-sm bg-green-50">
            <div class="p-10 bg-green-50 text-green-600">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div class="mb-5 ">
                        <h4 class="text-2xl pb-4">Company </h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem sequi iste, nulla eligendi neque vel animi vero similique culpa! Qui aliquam fugiat nulla, facere non neque vel nesciunt dignissimos!
                            <span class="hover:text-green-700 text-lg">+21263333333</span><br>
                            <span class="hover:text-green-700 text-lg">info@example.com</span>
                        </p>
                        </div>
                        <div class="mb-5 ">
                            <h4 class="text-2xl pb-4">Useful links</h4>
                            <ul>
                                <li class="flex pb-4 space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-green-800" /><nuxt-link class="text-black hover:text-green-300" to="/">Home</nuxt-link> </li>
                                <li class="flex pb-4 space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-green-800" /><nuxt-link class="text-black hover:text-green-300" to="/about">About us</nuxt-link></li>
                                <li class="flex pb-4 space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-green-800" /><nuxt-link class="text-black hover:text-green-300" to="/services">Services</nuxt-link> </li>
                                <li class="flex pb-4 space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-green-800" /><nuxt-link class="text-black hover:text-green-300" to="">Tearms & Conditions</nuxt-link> </li>
                                <li class="flex pb-4 space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-green-800" /><nuxt-link class="text-black hover:text-green-300" to="">Blog</nuxt-link> </li>
                            </ul>
                        </div>
                        <div class="mb-5 ">
                            <h4 class="text-2xl pb-4">Our Services</h4>
                            <ul>
                                <li class="pb-4 flex space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-green-800" /><nuxt-link class="text-black hover:text-green-300" to="">Web Design</nuxt-link></li>
                                <li class="pb-4 flex space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-green-800" /><nuxt-link class="text-black hover:text-green-300" to="">Web Development</nuxt-link></li>
                                <li class="pb-4 flex space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-green-800" /><nuxt-link class="text-black hover:text-green-300" to="">Product Managment</nuxt-link></li>
                                <li class="pb-4 flex space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-green-800" /><nuxt-link class="text-black hover:text-green-300" to="">Marketing</nuxt-link></li>
                                <li class="pb-4 flex space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-green-800" /><nuxt-link class="text-black hover:text-green-300" to="">Grapic Design</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="mb-5 ">
                            <h4 class="text-2xl pb-4">News Letter</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto deserunt, mollitia aspernatur rerum numquam asperiores voluptatibus harum molestias ipsa, error rem sapiente in maiores. Voluptatibus qui nostrum ex voluptatum veritatis?</p>
                            <form action="">
                                <label class="text-green h-10" for="t">Email:</label><input placeholder="enter your email" class="bg-none rounded-sm border mx-3 w-auto" id="t">
                                <button class="btn p-1 flex">Subscribe</button>
                            </form>
                        </div>


                    </div>
                </div>

            </div>
        </footer>
    </div>
</template>
<script setup>
    import { BeakerIcon,ChevronDoubleRightIcon } from '@heroicons/vue/24/solid'
</script>
<style scoped>
.root-link-exact-active{
    color: #12b488;
}
</style>