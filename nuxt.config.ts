// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'

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
  ],

  modules:[
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt'

  ],
  elementPlus: { /** Options */ },
})
