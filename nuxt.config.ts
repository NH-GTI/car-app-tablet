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
        manifest: {
            name: "Car App Tablet",
            short_name: "Car App",
            description: "Application de recherche de pièces auto",
            theme_color: "#ffffff",
            icons: [
                {
                    src: "pwa-192x192.png",
                    sizes: "192x192",
                    type: "image/png",
                },
                {
                    src: "pwa-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                },
                {
                    src: "pwa-512x512.png",
                    sizes: "512x512",
                    type: "image/png",
                    purpose: "any maskable",
                },
            ],
        },
        workbox: {
            navigateFallback: "/",
            globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
            maximumFileSizeToCacheInBytes: 30000000,
        },
        client: {
            installPrompt: true,
            periodicSyncForUpdates: 20,
        },
        devOptions: {
            enabled: true,
            type: "module",
        },
    },
});
