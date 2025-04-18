// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from 'path'
export default {
  typescript: {
    shim: false, // Disable TypeScript shims
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  devServer: {
    port: 4000
  },
  css: [
    '~/assets/css/main.css'
  ],
  image: {
    format: ['webp', 'jpeg', 'jpg', 'png'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  // DEPRECATED BECAUSE OF THE GTM BELOW
  // gtag: {
  //   tags: [
  //     {
  //       id: 'G-165J27ZQHR',
  //     },
  //     'G-ZGHPBWE0JV',
  //   ],
  // },
  // DEPRECATED BECAUSE OF THE GTM BELOW
  gtm: {
    id: 'GTM-MVZBFXWV',
    defer: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      htmlAttrs: {
        lang: 'sr',
      },
      meta: [
        { property: 'og:image', content: '/social_share.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: '%pageTitle %separator %siteName' },
        { name: 'twitter:description', content: 'Projektovanje, ugradnja i održavanje savremenih električnih i elektronskih sistema.' },
        { name: 'twitter:image', content: '/social_share.jpg' },
        { name: 'msapplication-TileColor', content: '#081107' },
        { name: 'theme-color', content: '#081107' },
        { name: 'robots', content: 'noindex, nofollow' },
      ],
      link: [
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#acbc90' },
      ],
      templateParams: {
        separator: '-'
      }
    },
  },
  site: {
    url: 'https://delmont014.rs',
    name: 'Delmont 014',
    description: 'Projektovanje, ugradnja i održavanje savremenih električnih i elektronskih sistema.',
    defaultLocale: 'sr',
  },
  sitemap: {
    // xslColumns: [
    //   { label: 'URL', width: '50%' },
    //   { label: 'Last Modified', select: 'sitemap:lastmod', width: '12.5%' },
    //   { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
    //   { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' },
    //   { label: 'Hreflangs', select: 'count(xhtml:link)', width: '12.5%' },
    // ],
    enabled: false
  },
  schemaOrg: {
    identity: {
      type: 'Company',
      name: 'Delmont 014',
      url: 'https://delmont014.rs',
      logo: 'https://delmont014.rs/delmont_logo.png'
    }
  },
  // seo: {
  //   redirectToCanonicalSiteUrl: false
  // },
  ogImage: {
    enabled: false
  },
  seoExperiments: {
    enabled: false
  },
  googleFonts: {
    families: {
      "Afacad Flux": [100, 200, 300, 400, 500, 600, 700, 800],
    },
    display: 'swap',
    prefetch: true,
    preload: true,
    preconnect: true,
  },
  runtimeConfig: {
    // Private keys (only available on the server side)
    mailgunApiKey: process.env.MAILGUN_API,
    mailgunDomain: process.env.MAILGUN_DOMAIN,
    
    // Public keys (accessible on both server and client if necessary)
    // public: {
    //   googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    //   // metapixel: {
    //   //   default: { id: process.env.FACEBOOK_PIXEL_CODE, pageView: '/' },
    //   // }
    // },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    config: {
      theme: {
        extend: {
          fontFamily: {
            alata: ['Afacad Flux', 'sans-serif']
          },
          colors: {
            'brand-black': '#1a1a1a',
            'brand-yellow': '#ffe787',
            'brand-orange': '#e07b17',
          },
          transitionDuration: {
            DEFAULT: '500ms'
          },
          screens: {
            'xs': '600px',
          },
        }
      }
    }
  },
  nitro: {
    prerender: {
      routes: ["/"],
    },
  },
  modules: [
    '@nuxt/ui',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    'nuxt-vitalizer',
    // 'nuxt-mail',
    // 'nuxt-gtag',
    '@nuxtjs/seo',
    // 'nuxt-meta-pixel'
    '@nuxtjs/google-fonts',
    '@zadigetvoltaire/nuxt-gtm'
  ]
}