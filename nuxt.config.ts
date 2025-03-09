export default defineNuxtConfig({
  // Configuration de base
  devtools: { enabled: false },
  ssr: true,
  experimental: {
    payloadExtraction: false,
  },
  compatibilityDate: '2025-03-05',

  // Configuration SEO essentielle
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://referencejeune.com',
    name: 'REFERENCE JEUNE',
    description: 'Accompagnement digital pour PME',
  },

  // Configuration de l'application
  app: {
    head: {
      titleTemplate: '%s | REFERENCE JEUNE',
      title: 'Accompagnement digital pour PME',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Solution clé en main pour la transformation digitale des PME - Stratégie, Développement et Formation',
        },
        { name: 'format-detection', content: 'telephone=no' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap',
          media: 'print',
          onload: "this.media='all'",
        },
      ],
    },
  },

  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    '@nuxt/image',
    'nuxt-site-config',
  ],

  // Configuration des modules
  robots: {
    rules: {
      UserAgent: '*',
      Allow: '/',
      Sitemap: `${
        process.env.NUXT_PUBLIC_SITE_URL || 'https://referencejeune.com'
      }/sitemap.xml`,
    },
  },

  sitemap: {
    strictNuxtContentPaths: true,
    exclude: [
      '/blog/tendances-marketing-digital',
      '/blog/optimisation-conversion',
    ],
  },

  schemaOrg: {
    canonicalHost:
      process.env.NUXT_PUBLIC_SITE_URL || 'https://referencejeune.com',
    defaultLanguage: 'fr-FR',
  },

  // Configuration CSS
  css: ['~/assets/css/main.css'],

  // Configuration Nitro pour le prerendering
  nitro: {
    prerender: {
      crawlLinks: true,
      ignore: [
        '/blog/tendances-marketing-digital',
        '/blog/optimisation-conversion',
      ],
    },
  },

  // Hooks pour le déploiement
  hooks: {
    'prerender:routes'(ctx) {
      if (ctx.routes instanceof Set) {
        // Conversion du Set en tableau, filtrage, puis reconversion en Set
        ctx.routes = new Set(
          [...ctx.routes].filter(
            (route) =>
              ![
                '/blog/tendances-marketing-digital',
                '/blog/optimisation-conversion',
              ].includes(route)
          )
        );
      } else {
        console.error('ctx.routes n\'est pas un Set.');
      }
    },
  },
});
