// https://nuxt.com/docs/api/configuration/nuxt-config
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import prismjs from 'vite-plugin-prismjs'

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
  vite: {
    plugins: [
      prismjs({
        // 添加支持的高亮的语言, 如果需要支持全部的话改成这样:  languages: "all"
        languages: ['cpp',
          'javascript',
          'bash',
          'dart',
          'sql',
          'css',
          'html',
          'java',
          'json',
          'sass',
          'scss',
          'c',
          'log',
          'swift',
          'md',
          'nginx',
          'yaml',
          'xml',
          'shell',
          'ts'
        ],
        // 配置prism插件 toolbar是后面两个插件依赖的插件.
        // show-language: 显示语言名。
        // copy-to-clipboard: 添加复制代码功能。
        plugins: ['toolbar', 'show-language', 'copy-to-clipboard'],
        // 主题名称,支持的主题可以在 node_moduels中安装此库的目录下寻找。
        theme: "tomorrow",
        css: true
      })
    ]
  },
})
