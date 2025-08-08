// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
   devtools: { enabled: false },
   modules: [
      '@nuxtjs/html-validator',
      '@nuxt/image',
      '@nuxt/icon',
      '@nuxt/scripts',
      'nuxt-swiper'
   ],
  app: {
     head: {
        title: 'Test site',
        htmlAttrs: {
           lang: 'en'
         }
     }
   },
   css: ['~/assets/scss/styles.scss'],
   experimental: {
      treeshakeClientOnly: true
   },
   vite: {
      css: {
         preprocessorOptions: {
           scss: {
               additionalData: `
             @use "@/assets/scss/base/_container.scss" as *;
             @use "@/assets/scss/base/_fonts.scss" as *;
             @use "@/assets/scss/base/_functions.scss" as *;
             @use "@/assets/scss/base/_globals.scss" as *;
             @use "@/assets/scss/base/_mixins.scss" as *;
             @use "@/assets/scss/base/_normalize.scss" as *;
             `,
            }
         },
         preprocessorMaxWorkers: true,
         devSourcemap: true,
       },
      build: {
         cssCodeSplit: true,
         cssMinify: true
       },
       optimizeDeps: {
         include: ['sass']
      },
      assetsInclude: ['**/*.avif']
   },
   image: {
      provider: 'ipxStatic',
      quality: 85,
      densities: [1, 2]
   },
   icon: {
      customCollections: [
        {
          prefix: 'my-icon',
            dir: './public/my-icons',
            normalizeIconName: false,
        },
      ],
   },
})