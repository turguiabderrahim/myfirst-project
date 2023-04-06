<template>
    <div class="">  
        <header class="shadow-sm bg-green-50 ">
            <nav class="container mx-auto p-4 flex justify-between">
                <nuxt-link to="/" class="font-bold text-green-600 hover:text-gray-600">Turgui Brand</nuxt-link>
                <ul class="flex gap-4 text-x">
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="about">About</nuxt-link></li>
                    <li><nuxt-link to="Services">Services</nuxt-link></li>
                    <li><nuxt-link class="btn" to="/products">Products</nuxt-link></li>
                </ul>
            </nav>
        </header>

        <!-- output -->
        <div class="container  mx-auto pt-5 text-lg">
            <slot/>
        </div>
        <!-- output -->

        <footer class="shadow-sm bg-green-50">
            <div class="p-10 bg-green-50 text-green-600">
                <div class="max-w-7xl mx-auto">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div class="mb-5 ">
                        <h4 class="text-2xl pb-4">Company </h4>
                        <p class="text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorem sequi iste, nulla eligendi neque vel animi vero similique culpa! Qui aliquam fugiat nulla, facere non neque vel nesciunt dignissimos!
                            <span class="hover:text-green-700 text-lg">+21263333333</span><br>
                            <span class="hover:text-green-700 text-lg">info@example.com</span>
                        </p>
                        </div>
                        <div class="mb-5 ">
                            <h4 class="text-2xl pb-4">Useful links</h4>
                            <ul>
                                <li class="flex pb-4 space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-black-500" /><nuxt-link class="text-black hover:text-green-300" to="">Home</nuxt-link> </li>
                                <li class="flex pb-4 space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-black-500" /><nuxt-link class="text-black hover:text-green-300" to="">About us</nuxt-link></li>
                                <li class="flex pb-4 space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-black-500" /><nuxt-link class="text-black hover:text-green-300" to="">Services</nuxt-link> </li>
                                <li class="flex pb-4 space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-black-500" /><nuxt-link class="text-black hover:text-green-300" to="">Tearms & Conditions</nuxt-link> </li>
                                <li class="flex pb-4 space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-black-500" /><nuxt-link class="text-black hover:text-green-300" to="">Blog</nuxt-link> </li>
                            </ul>
                        </div> 
                        <div class="mb-5 "> 
                            <h4 class="text-2xl pb-4">Our Services</h4> 
                            <ul>
                                <li class="pb-4 flex space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-black-500" /><nuxt-link class="text-black hover:text-green-300" to="">Web Design</nuxt-link></li>
                                <li class="pb-4 flex space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-black-500" /><nuxt-link class="text-black hover:text-green-300" to="">Web Development</nuxt-link></li>
                                <li class="pb-4 flex space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-black-500" /><nuxt-link class="text-black hover:text-green-300" to="">Product Managment</nuxt-link></li>
                                <li class="pb-4 flex space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-black-500" /><nuxt-link class="text-black hover:text-green-300" to="">Marketing</nuxt-link></li>
                                <li class="pb-4 flex space-x-2"><ChevronDoubleRightIcon class="h-6 w-6 text-black-500" /><nuxt-link class="text-black hover:text-green-300" to="">Grapic Design</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="mb-5 ">
                            <h4 class="text-2xl pb-4">News Letter</h4>
                            <p class="text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto deserunt, mollitia aspernatur rerum numquam asperiores voluptatibus harum molestias ipsa, error rem sapiente in maiores. Voluptatibus qui nostrum ex voluptatum veritatis?</p>
                            <form action="">
                                <label class="text-green" for="t">Email:</label><input placeholder="enter your email" class="bg-none rounded-sm border mx-3 w-auto" id="t">
                                <button class="btn">Subscribe</button>
                            </form>
                        </div>


                    </div>
                </div>

            </div>
        </footer>
    </div>
</template>

<script setup>
    import { BeakerIcon,ArrowLeftCircleIcon,ChevronDoubleRightIcon} from '@heroicons/vue/24/solid'
</script>

<style scoped>
.router-link-exact-active{
    color: #12b488;
}
</style>