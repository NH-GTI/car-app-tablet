<template>
    <div class="main-container">
        <Navigation />
        <div class="main-content">
            <h1>Que recherchez-vous ?</h1>
            <h2>Cliquez sur une catégorie pour voir les produits</h2>
            <h3>Faites défiler pour voir toutes les catégories</h3>
            <div class="category-container">
                <NuxtLink :to="`/category/1`"
                    ><img src="/public/img/essuie-glace.jpg" alt="" />
                    <h4>Essuie-glace</h4></NuxtLink
                >
                <NuxtLink :to="`/category/1`"
                    ><img src="/public/img/batterie.jpeg" alt="" />
                    <h4>Batterie</h4></NuxtLink
                >
                <NuxtLink :to="`/category/1`"
                    ><img src="/public/img/eclairage.jpg" alt="" />
                    <h4>Éclairage</h4></NuxtLink
                >
                <NuxtLink :to="`/category/1`"
                    ><img src="/public/img/huile-moteur.png" alt="" />
                    <h4>Huile moteur</h4></NuxtLink
                >
                <NuxtLink :to="`/category/1`"
                    ><img src="/public/img/interieur.jpg" alt="" />
                    <h4>Intérieur</h4></NuxtLink
                >
                <NuxtLink :to="`/category/1`"
                    ><img src="/public/img/siege.jpg" alt="" />
                    <h4>Siège</h4></NuxtLink
                >
                <NuxtLink :to="`/category/1`"
                    ><img src="/public/img/siege.jpg" alt="" />
                    <h4>Siège</h4></NuxtLink
                >
                <NuxtLink :to="`/category/1`"
                    ><img src="/public/img/siege.jpg" alt="" />
                    <h4>Siège</h4></NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script setup></script>
