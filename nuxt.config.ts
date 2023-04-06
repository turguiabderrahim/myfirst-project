// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules :['@nuxtjs/tailwindcss'],
    buildModules:  [
        '@nuxtjs/fontawesome','@nuxtjs/google-fonts'
     ],
     fontawesome: {
        icons:{
         solid:true,
         brands:true
        }
       }
       ,
       app:{
            head:{
                title:'Turgui murch',
                meta:[
                    { name:'description',content:'Turgui brand murch nuxt3'}
                ],
                link :[{rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}]
            }
       }
})