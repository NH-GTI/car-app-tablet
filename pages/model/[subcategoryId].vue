<template>
    <div class="main-container">
        <div class="choices-summary">
            <div class="summary-content">
                <p>Essuie-glace > Audi</p>
            </div>
        </div>
        <h1>Indiquez le modèle de votre véhicule</h1>
        <div class="main-content">
            <div v-if="loading" class="loading">Chargement...</div>
            <div class="subcategory-grid">
                <NuxtLink
                    v-for="model in models"
                    :to="`/vehicleInfos/circulationDate`"
                    class="subcategory-item"
                >
                    {{ model.name }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
    const models = ref([]);
    const route = useRoute();
    const subcategoryId = route.params.subcategoryId;
    const loading = ref(true);

    console.log(subcategoryId);

    onMounted(async () => {
        try {
            const response = await $fetch(
                `http://localhost:1337/api/models?filters[brand][id][$eq]=${subcategoryId}`,
                {
                    headers: {
                        Authorization: `Bearer 8b8035ecfa9bad12250953179a66389b18585ab5cef7c6741bfc315cec85693b6acb87781457e43f190ee10f6ba15df880fd8d8db012697d7652826032b31dcd09cb965713cf01f21128951c77fe9aaa7b11345402ff88d9a69efbe2d1cef518aa762a7cc7b522ce2fca88e358a8d2f3ead3c3ef14d6142bf1bfe59e54a6be5f`,
                    },
                }
            );
            console.log(response);

            models.value = response.data;
        } catch (error) {
            console.error("Error fetching models:", error);
        } finally {
            loading.value = false;
        }
    });
</script>
