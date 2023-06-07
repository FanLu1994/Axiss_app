// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app:{
    head:{
      title:"Axiss_app",
      meta:[
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ]
    }
  },

  devServer:{
    port: 1818,
    host: '0.0.0.0'
  },

  css:[
    '@/assets/css/main.css',
    '@/assets/css/font.css',
    '@/assets/css/wechat_theme/index.scss',
    'vue-toast-notification/dist/theme-default.css'
  ],

  modules:[
    '@nuxtjs/tailwindcss',
  ],

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import "assets/css/wechat_theme/index.scss";',
  //       }
  //     }
  //   }
  // }
})
