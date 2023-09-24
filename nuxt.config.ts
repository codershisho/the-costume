// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/",
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap",
          crossorigin: "",
        },
      ],
    },
  },
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "vuetify/lib/styles/main.sass",
    "mdi/css/materialdesignicons.min.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  typescript: {
    shim: false, // shimsファイル生成の無効化（VSCodeでVolarを使う場合はfalseにする）
    strict: true, // 型チェックを厳格化
    typeCheck: false, // nuxt devまたはnuxt build時に型チェックを実行
  },
});
