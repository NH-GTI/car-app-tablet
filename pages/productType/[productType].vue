<template>
    <div class="main-container">
        <h1>Type d'essuie-glace</h1>
        <div class="main-content">
            <div class="product-type-grid">
                <NuxtLink to="/productList/1" class="product-type-item"
                    >Balai d'essuie-glace plat universel</NuxtLink
                >
                <NuxtLink to="/productList/2" class="product-type-item"
                    >Balai d'essuie-glace standard</NuxtLink
                >
                <NuxtLink to="/productList/3" class="product-type-item"
                    >Balai d'essuie-glace plat retrofit</NuxtLink
                >
                <NuxtLink to="/productList/3" class="product-type-item"
                    >Balai d'essuie-glace plat origine</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<style>
    .product-type-container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .product-type-container a {
        text-decoration: underline;
    }
</style>
