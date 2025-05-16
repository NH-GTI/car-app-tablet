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
    ],
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
