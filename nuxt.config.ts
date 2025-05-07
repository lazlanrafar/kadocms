// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@unocss/nuxt",
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/supabase",
    "@prisma/nuxt",
  ],

  runtimeConfig: {
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME, // server only
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY, // server only
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET, // server only

    public: {
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME, // exposed if needed client-side
    },
  },

  supabase: {
    redirectOptions: {
      login: "/login",
      callback: "/confirm", // <--
      exclude: ["/register", "/forgot-password"],
    },
  },

  css: ["@unocss/reset/tailwind.css"],

  colorMode: {
    classSuffix: "",
  },

  features: {
    // For UnoCSS
    inlineStyles: false,
  },

  eslint: {
    config: {
      standalone: false,
    },
  },

  routeRules: {
    "/components": { redirect: "/components/accordion" },
    "/settings": { redirect: "/settings/profile" },

    // Cached for 1 hour
    "/api/*": { cache: { maxAge: 60 * 60 } },
  },

  imports: {
    dirs: ["./lib"],
  },

  compatibilityDate: "2024-12-14",
});
