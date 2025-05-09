<template>
    <div class="product-list-container">
        <NuxtLink
            to="/product/valeo"
            id="product-id-1"
            class="product-list-item"
        >
            <h2>Valeo</h2>
            <img src="/assets/img/valeo.png" alt="Product Image" />
        </NuxtLink>
        <NuxtLink
            to="/product/imdicar"
            id="product-id-2"
            class="product-list-item"
        >
            <h2>Imdicar</h2>
            <img src="/assets/img/imdicar.png" alt="Product Image" />
        </NuxtLink>
    </div>
</template>

<style>
    .product-list-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0 auto;
        /* max-width: 1400px; */
        /* width: fit-content; */
        /* min-width: 1000px; */
        /* background-color: white; */
        /* box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3); */
    }

    .product-list-container h2 {
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
    }

    .product-list-item {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        text-decoration: none;
        color: black;
    }

    .product-list-item img {
        width: 100%;
        max-width: 100px;
        padding: 1rem;
    }

    .product-list-item-details {
        /* border: 1px solid black; */
        background-color: #f8f6f6;
        padding: 1rem 2rem 2rem 3rem;
    }

    .product-list-item-details h1 {
        font-size: 3rem;
        font-weight: 600;
    }

    .product-details h2 {
        font-size: 1.7rem;
        font-weight: 600;
        text-decoration: underline;
    }

    .product-details ul {
        list-style-type: none;
        padding: 0;
    }

    .product-details ul li {
        margin: 0 0 1rem 1rem;
        font-weight: 500;
        font-size: 1.2rem;
    }
</style>
