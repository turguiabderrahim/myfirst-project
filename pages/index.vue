<template>
    <div class="">
        <div >
            <h2>Home</h2>
            <p class="bg-green-50 w-full">Welcome<br>
                Welcome to Turgui Murch, where we specialize in providing top-quality products and services to our valued customers. Our mission is to deliver exceptional customer service and support, and we're committed to going above and beyond to exceed your expectations.
            </p>
        </div>
        <div class="bg-green-50 w-full">
            <h2>Why Choose Us?</h2>
            <ul>
                <li class="flex pb-4 space-x-2"><BeakerIcon class="h-6 w-6 text-green-500 flex"></BeakerIcon>Our commitment to quality</li>
                <li class="flex pb-4"><BeakerIcon class="h-6 w-6 text-green-500 flex"></BeakerIcon>Exceptional customer service</li>
                <li class="flex pb-4"><BeakerIcon class="h-6 w-6 text-green-500 flex"></BeakerIcon>Competitive pricing</li>
                <li class="flex pb-4"><BeakerIcon class="h-6 w-6 text-green-500 flex"></BeakerIcon>Fast and reliable shipping</li>
                <li class="flex pb-4"><BeakerIcon class="h-6 w-6 text-green-500 flex"></BeakerIcon>Expert advice and support</li>
            </ul>
        </div>
        <div >
            <h2>Our Newsletter</h2>
            <p class="bg-green-50 w-full">Dear subscribers,<br><br>
            We hope this newsletter finds you well. As we move into the new year, we're excited to share with you some of the latest developments from our company.<br>
            First, we're proud to announce that we've recently launched a new product that we think you'll love.<br> Our new software solution is designed to make your life easier by streamlining your workflow and simplifying complex tasks. Whether you're a small business owner or a busy professional, our software can help you be more productive and efficient.
            In addition to our new product launch, we're also excited to announce that we'll be hosting a webinar next month on the latest trends in our industry.<br> This is a great opportunity to learn from experts in the field and get a better understanding of the current landscape. Stay tuned for more details on how to register.
            Finally, we want to thank you for your continued support. Our company wouldn't be where it is today without our loyal customers, and we're committed to providing you with the best possible service and support. If you have any questions or feedback, please don't hesitate to reach out to us.
            <br><br>
            Thank you for your time, and we look forward to continuing to serve you in the future.</p>

        </div>
        <div class="bg-green-50 w-full">
            <h2>Contact us</h2>
            <form action="https://formspree.io/f/maykwboq" method="post" class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="name" placeholder="Jane">
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="lastname" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        E-mail
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-green-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" name="email" placeholder="info@contact.com" type="email">
      <p class="text-gray-600 text-xs italic"></p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Message
      </label>
      <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-green-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name="message" id="message"></textarea>
      <p class="text-gray-600 text-xs italic"><input id="re" class="px-2" type="checkbox"><label class="px-2" for='re'>Remember me</label></p>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button type="submit" class="shadow bg-green-300 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded btn">
        Send
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
</form>
        </div>
    </div>
</template>
<script setup>
import { BeakerIcon } from '@heroicons/vue/24/solid'
</script>

<style  scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0px;
}
</style>