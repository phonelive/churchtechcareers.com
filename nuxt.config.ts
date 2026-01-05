export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'Church Tech Careers - Your Path to Ministry Through Technology',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Church Tech Careers podcast helps you grow your career in church technology. Learn about leadership, career growth, and advancing in church tech roles.' },
        { property: 'og:title', content: 'Church Tech Careers Podcast' },
        { property: 'og:description', content: 'Your path to ministry through technology. Career growth, leadership, and advancing in church tech roles.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://churchtechcareers.com' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-4JLFJZWYT4',
          async: true
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4JLFJZWYT4');`
        }
      ]
    }
  },

  nitro: {
    preset: 'static'
  },

  compatibilityDate: '2025-01-04'
})
