export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  ssr: true,
  nitro: {
    preset: 'static'
  },
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
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-4JLFJZWYT4'
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4JLFJZWYT4');
          `
        }
      ]
    }
  }
})
