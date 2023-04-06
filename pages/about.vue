<template>
    <div>
        <h2>About</h2>
        <p>
            Turgui Brand is a [short description of what the entity does]. Our goal is to [brief statement of mission or values]. We strive to [unique selling point or key feature].

            Turgui Brand was founded in [year] and has been [brief history or key achievements]. We are located in [location] and serve [target audience or market].

            [Additional information or details, such as awards or accolades, industry recognition, partnerships, or notable clients/customers.]

            Thank you for considering Turgui Brand.
            [Call to action or closing statement].
        </p>
        <div>{{ data }}</div>
    </div>
    <div>
        <div class="grid">
            <div class="card">
                <h4></h4>
            </div>
            <div class="card"></div>
            <div class="card"></div>
            <div class="card"></div>
        </div>
    </div>
</template>

<script setup>
 const  { data } = await useFetch('/api/ninja')
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