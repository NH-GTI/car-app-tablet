<template>
    <div class="main-container">
        <h1>Veuillez indiquer l'emplacement de l'essuie glace souhaité</h1>
        <div class="product-spec-content">
            <img
                src="@/public/img/white-car-small.png"
                alt="product-spec"
                class="product-spec-image"
            />
            <div class="product-spec-buttons">
                <NuxtLink to="/productType/1" class="product-spec-button"
                    >Conducteur</NuxtLink
                >
                <NuxtLink to="/productType/1" class="product-spec-button"
                    >Passager</NuxtLink
                >
                <NuxtLink to="/productType/1" class="product-spec-button"
                    >Arrière</NuxtLink
                >
            </div>
        </div>
    </div>
</template>
<script setup>
    const { productId } = useRoute().params;
</script>
