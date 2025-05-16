<template>
    <div class="product-container">
        <div class="product-image">
            <img src="/assets/img/product-example.jpg" alt="Product Image" />
        </div>
        <div class="product-details">
            <h1>Valeo Hydroconnect</h1>
            <h2>Description du produit</h2>
            <ul>
                <li>Longueur : 1000mm</li>
                <li>Côté assemblage : avant</li>
                <li>
                    Type de fixation : Fixation par crochet(s), Top Lock,
                    Fixation par goupille
                </li>
                <li>Longueur (pouces) : 16</li>
                <li>Poids(kg) : 0,15</li>
            </ul>
        </div>
    </div>
</template>

<style>
    .product-container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin: 0 auto;
        max-width: 1400px;
        /* width: fit-content; */
        /* min-width: 1000px; */
        background-color: white;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
    }

    .product-image img {
        width: 600px;
        height: auto;
        /* object-fit: cover; */
        /* background-color: black; */
    }

    .product-details {
        /* border: 1px solid black; */
        background-color: #f8f6f6;
        padding: 1rem 2rem 2rem 3rem;
    }

    .product-details h1 {
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
