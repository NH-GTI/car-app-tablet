<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
    useHead({
        meta: [
            { name: "theme-color", content: "#ffffff" },
            { name: "apple-mobile-web-app-capable", content: "yes" },
            {
                name: "apple-mobile-web-app-status-bar-style",
                content: "black-translucent",
            },
        ],
        link: [{ rel: "apple-touch-icon", href: "/pwa-192x192.png" }],
    });
</script>

<style>
    @import url("~/assets/css/style.css");
</style>
