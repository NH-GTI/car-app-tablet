<template>
    <div class="main-container">
        <div class="choices-summary">
            <div class="summary-content">
                <p>Essuie-glace</p>
            </div>
        </div>
        <h1>Indiquez la marque de votre véhicule</h1>
        <div class="main-content">
            <div v-if="loading" class="loading">Chargement...</div>
            <div v-else class="brands-grid">
                <NuxtLink
                    v-for="brand in brands"
                    :key="brand.id"
                    :to="`/model/${brand.id}`"
                    class="brand-item"
                >
                    {{ brand.name }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const loading = ref(true);
    const brands = ref([]);

    onMounted(async () => {
        try {
            const response = await $fetch("http://localhost:1337/api/brands", {
                headers: {
                    Authorization: `Bearer 8b8035ecfa9bad12250953179a66389b18585ab5cef7c6741bfc315cec85693b6acb87781457e43f190ee10f6ba15df880fd8d8db012697d7652826032b31dcd09cb965713cf01f21128951c77fe9aaa7b11345402ff88d9a69efbe2d1cef518aa762a7cc7b522ce2fca88e358a8d2f3ead3c3ef14d6142bf1bfe59e54a6be5f`,
                },
            });
            console.log(response);

            brands.value = response.data;
        } catch (error) {
            console.error("Error fetching brands:", error);
        } finally {
            loading.value = false;
        }
    });
</script>

<style scoped>
    .loading {
        text-align: center;
        padding: 2rem;
    }
</style>
