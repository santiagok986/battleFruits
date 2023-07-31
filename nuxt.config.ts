// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // components:[
    //   {path:'~/components', prefix:'s'}
    // ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
})
