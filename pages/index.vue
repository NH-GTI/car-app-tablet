<template>
    <div class="main-container">
        <Navigation />
        <div class="main-content">
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
                <h4>Eclairage</h4></NuxtLink
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
                <h4>Siege</h4></NuxtLink
            >
            <NuxtLink :to="`/category/1`"
                ><img src="/public/img/siege.jpg" alt="" />
                <h4>Siege</h4></NuxtLink
            >
            <NuxtLink :to="`/category/1`"
                ><img src="/public/img/siege.jpg" alt="" />
                <h4>Siege</h4></NuxtLink
            >
        </div>
    </div>
</template>

<script setup></script>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");
    body {
        margin: 0;
        font-family: "Roboto", sans-serif;
        font-weight: 100;
    }

    .main-container {
        width: 100%;
    }
    .top-bar {
        height: 5rem;
        background-color: rebeccapurple;
        margin-bottom: 2rem;
    }
    .main-content {
        display: grid;
        height: 32rem;
        width: 70%;
        margin: 0 auto;
        grid-template-columns: repeat(4, 1fr);
        gap: 120px;
        justify-items: center;
    }
    .main-content > div,
    .main-content > a {
        background-color: rebeccapurple;
        border-radius: 20px;
        width: 13rem;
        max-height: 15rem;
        transition: all 0.3s ease;
        box-shadow: rgba(0, 0, 0, 0.45) 0px 17px 20px -8px;
        text-decoration: none;
    }
    .main-content > a > h4 {
        text-align: center;
        margin-top: 2rem;
        text-transform: uppercase;
        color: #000;
        font-size: 1.2rem;
    }

    .main-content > a > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
    .main-content > div:hover,
    .main-content > a:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
        cursor: pointer;
        transform: scale(1.05);
        transition: all 0.3s ease;
    }
</style>
