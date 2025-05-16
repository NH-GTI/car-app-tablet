<template>
    <h1>Type d'essuie glace</h1>
    <div class="product-type-container">
        <NuxtLink to="/productList/1" class="product-type-item"
            >Balai d'essuie glace Avant</NuxtLink
        >
        <NuxtLink to="/productList/2" class="product-type-item"
            >Balai d'essuie glace Arrière</NuxtLink
        >
        <NuxtLink to="/productList/3" class="product-type-item"
            >Balai d'essuie glace Standard</NuxtLink
        >
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
