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
  // gtag: {
  //   tags: [
  //     {
  //       id: 'G-165J27ZQHR',
  //     },
  //     'G-ZGHPBWE0JV',
  //   ],
  // },
  gtm: {
    id: 'GTM-W4SRZ2ZZ',
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
        { name: 'twitter:description', content: 'Plastični rezervoari, plastične septičke jame, plastični pontoni, plastične kace, plastične cevi. Za domaćinstva i proizvodnje. Kvalitetno, povoljno, dugotrajno i ekološki ispravno.' },
        { name: 'twitter:image', content: '/social_share.jpg' },
        { name: 'msapplication-TileColor', content: '#081107' },
        { name: 'theme-color', content: '#081107' },
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
    url: 'https://panic-plast.rs',
    name: 'Delmont 014',
    description: 'Plastični rezervoari, plastične septičke jame, plastični pontoni, plastične kace, plastične cevi. Za domaćinstva i proizvodnje. Kvalitetno, povoljno, dugotrajno i ekološki ispravno.',
    defaultLocale: 'sr',
  },
  sitemap: {
    xslColumns: [
      { label: 'URL', width: '50%' },
      { label: 'Last Modified', select: 'sitemap:lastmod', width: '12.5%' },
      { label: 'Priority', select: 'sitemap:priority', width: '12.5%' },
      { label: 'Change Frequency', select: 'sitemap:changefreq', width: '12.5%' },
      { label: 'Hreflangs', select: 'count(xhtml:link)', width: '12.5%' },
    ]
  },
  schemaOrg: {
    identity: {
      type: 'Company',
      name: 'Delmont 014',
      url: 'https://panic-plast.rs',
      logo: 'https://panic-plast.rs/panic_plast_logo.png'
    }
  },
  sitemap: {
    enabled: false
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
      SUSE: [100, 200, 300, 400, 500, 600, 700, 800],
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
    public: {
      googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      // metapixel: {
      //   default: { id: process.env.FACEBOOK_PIXEL_CODE, pageView: '/' },
      // }
    },
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
            suse: ['SUSE', 'sans-serif']
          },
          colors: {
            'brand-black': '#081107',
            'brand-grey-1': '#4A4A4A',
            'brand-grey-2': '#D3D3D3',
            // 'brand-green': '#4CAF50',
            'brand-green': '#acbc90',
            'brand-yellow': '#FFF8DC'
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
    'nuxt-gtag',
    '@nuxtjs/seo',
    // 'nuxt-meta-pixel'
    '@nuxtjs/google-fonts',
    '@zadigetvoltaire/nuxt-gtm'
  ]
}