// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs-alt/auth", "@nuxtjs-alt/http", "@pinia/nuxt"],

  auth: {
    strategies: {
      local: {
        token: {
          required: true,
          type: "Bearer",
        },
        endpoints: {
          login: {
            url: "/login",
            method: "post",
          },
          logout: {
            url: "/logout",
            method: "get",
          },
          user: { url: "/me", method: "get" },
        },
      },
    },
  },
});
