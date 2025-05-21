<template>
    <div class="main-container">
        <h1>Que recherchez-vous ?</h1>
        <h2>Cliquez sur une catégorie pour voir les produits</h2>
        <h3>Faites défiler pour voir toutes les catégories</h3>
        <div class="main-content">
            <div class="category-container">
                <NuxtLink :to="`/brand/1`"
                    ><img src="/public/img/essuie-glace.jpg" alt="" />
                    Essuie-glace</NuxtLink
                >
                <NuxtLink :to="`/brand/1`"
                    ><img src="/public/img/batterie.jpeg" alt="" />
                    Batterie</NuxtLink
                >
                <NuxtLink :to="`/brand/1`"
                    ><img src="/public/img/eclairage.jpg" alt="" />
                    Éclairage</NuxtLink
                >
                <NuxtLink :to="`/brand/1`"
                    ><img src="/public/img/huile-moteur.png" alt="" /> Huile
                    moteur</NuxtLink
                >
                <NuxtLink :to="`/brand/1`"
                    ><img src="/public/img/interieur.jpg" alt="" />
                    Intérieur</NuxtLink
                >
                <NuxtLink :to="`/brand/1`"
                    ><img src="/public/img/siege.jpg" alt="" /> Siège</NuxtLink
                >
                <NuxtLink :to="`/brand/1`"
                    ><img src="/public/img/siege.jpg" alt="" /> Siège</NuxtLink
                >
                <NuxtLink :to="`/brand/1`"
                    ><img src="/public/img/siege.jpg" alt="" /> Siège</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script setup></script>
