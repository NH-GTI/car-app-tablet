// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    modules: [
        "@vite-pwa/nuxt",
        [
            "@pinia/nuxt",
            {
                autoImports: ["defineStore", "acceptHMRUpdate"],
            },
        ],
        "@nuxtjs/strapi",
    ],
    runtimeConfig: {
        public: {
            strapi: {
                url: process.env.STRAPI_URL || "http://localhost:1337",
            },
        },
        strapi: {
            token: process.env.STRAPI_TOKEN,
        },
    },
    strapi: {
        url: process.env.STRAPI_URL || "http://localhost:1337",
        prefix: "/api",
        admin: "admin",
        version: "v5",
        cookie: {},
        cookieName: "strapi_jwt",
    },
    future: {
        compatibilityVersion: 4,
    },
    imports: {
        dirs: ["stores"],
    },
    pwa: {
        registerType: "autoUpdate",
        devOptions: {
            enabled: true,
        },
    },
});
