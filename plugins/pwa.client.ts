export default defineNuxtPlugin(async () => {
    const { registerSW } = await import("virtual:pwa-register");

    registerSW({
        immediate: true,
        onNeedRefresh() {
            if (confirm("Nouvelle version disponible. Recharger ?")) {
                window.location.reload();
            }
        },
        onOfflineReady() {
            console.log("Application prête pour une utilisation hors ligne");
        },
    });
});
