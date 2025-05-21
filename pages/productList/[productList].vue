<template>
    <div class="choices-summary">
        <div class="summary-content">
            <p>
                Essuie-glace > Audi > A1 > Après 2018 > Conducteur > Balai
                d'essuie-glace plat universel
            </p>
        </div>
    </div>
    <h1>Liste des produits compatibles avec votre véhicule</h1>
    <div class="product-list-container">
        <div class="product-list-item">
            <div
                class="product-list-item-content"
                id="product-list-item-content-1"
            >
                <NuxtLink to="/product/valeo" id="product-id-1">
                    <img src="/assets/img/valeo.png" alt="Product Image" />
                </NuxtLink>
                <div class="product-list-item-details">
                    <BsBook @click="toogleDetails('1')" />
                    <BsZoomIn @click="toogleModal('valeo.png')" />
                </div>
            </div>
            <div
                class="product-list-item-details-description"
                id="product-list-item-details-description-1"
            >
                <ul>
                    <li><span>Marque :</span> Valeo</li>
                    <li><span>Référence :</span> VS70</li>
                    <li>
                        <span>Longueur :</span>
                        350mm
                    </li>
                    <li>
                        <span>Emplacement :</span>
                        Côté conducteur
                    </li>
                </ul>
            </div>
        </div>
        <div class="product-list-item">
            <div
                class="product-list-item-content"
                id="product-list-item-content-2"
            >
                <NuxtLink to="/product/imdicar" id="product-id-2">
                    <img src="/assets/img/imdicar.png" alt="Product Image" />
                </NuxtLink>
                <div class="product-list-item-details">
                    <BsBook @click="toogleDetails('2')" />
                    <BsZoomIn @click="toogleModal('imdicar.png')" />
                </div>
            </div>
            <div
                class="product-list-item-details-description"
                id="product-list-item-details-description-2"
            >
                <ul>
                    <li><span>Marque :</span> Imdicar</li>
                    <li><span>Référence :</span> 480</li>
                    <li>
                        <span>Longueur :</span>
                        350mm
                    </li>
                    <li>
                        <span>Emplacement :</span>
                        Côté conducteur
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="product-list-modal" v-if="showModal">
        <img
            :src="modalImg"
            alt="Product Image"
            id="product-list-modal-img"
            @click="modalZoom"
        />
        <BsX @click="showModal = false" />
    </div>
</template>

<script setup>
    import { BsBook } from "@kalimahapps/vue-icons";
    import { BsZoomIn } from "@kalimahapps/vue-icons";
    import { BsX } from "@kalimahapps/vue-icons";
    import { useCustomerChoicesStore } from "~/stores/customerChoices";

    const store = useCustomerChoicesStore();

    const showModal = ref(false);
    const modalImg = ref("");

    const toogleDetails = (id) => {
        const element = document.getElementById(
            "product-list-item-content-" + id
        );
        const descriptionElement = document.getElementById(
            "product-list-item-details-description-" + id
        );

        // Check if the clicked element already has the classes before removing them
        const wasActive = element.classList.contains("sliding-left");

        // Remove sliding-left class and showing-description class from all elements
        const elements = document.querySelectorAll(".sliding-left");
        elements.forEach((element) => {
            element.classList.remove("sliding-left");
        });
        const descriptionElements = document.querySelectorAll(
            ".showing-description"
        );
        descriptionElements.forEach((element) => {
            element.classList.remove("showing-description");
        });

        // Only add classes if the element wasn't active before
        if (!wasActive) {
            element.classList.add("sliding-left");
            descriptionElement.classList.add("showing-description");
        }
    };

    const toogleModal = (img) => {
        console.log("showModal");
        showModal.value = !showModal.value;
        modalImg.value = "/img/" + img;
    };

    const modalZoom = () => {
        console.log("modalZoom");

        const modalImg = document.getElementById("product-list-modal-img");
        modalImg.classList.toggle("modal-zoom");
    };
</script>

<style>
    .product-list-container {
        display: flex;
        flex-direction: row;
        gap: 5rem;
        justify-content: center;
        margin-top: 3rem;
        /* margin: 0 auto; */
    }

    h1 {
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
    }

    .product-list-container h2 {
        font-size: 2rem;
        font-weight: 600;
        text-align: center;
    }

    .product-list-item {
        display: flex;
        flex-direction: row;
        transition: all 0.3s ease;
    }

    .product-list-item-content {
        background-color: white;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        text-decoration: none;
        color: black;
        text-align: center;
        padding: 1rem;
        display: flex;
        height: fit-content;
        position: relative;
        left: 0rem;
        transition: all 1s ease;
    }

    .product-list-item a {
        text-decoration: none;
        color: black;
        margin-right: 0.7rem;
    }

    .product-list-item img {
        padding: 1rem;
        max-height: 57dvh;
    }

    .product-list-item-details {
        padding: 1rem 1rem 1rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        border-left: 1px solid black;
        width: 100%;
        transition: width 5s ease;
        /* justify-content: space-between; */
    }

    .product-list-item-details svg {
        width: 2rem;
        height: 2rem;
        transition: all 0.1s ease;
    }

    .product-list-item-details svg:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.1s ease;
    }

    .product-list-item-details h1 {
        font-size: 3rem;
        font-weight: 600;
    }

    .product-list-item-details-description {
        width: 2rem;
        overflow: hidden;
        transition: all 1s ease;
        background-color: white;
        /* opacity: 0; */
        position: relative;
        left: -9.5rem;
        z-index: -1;
        padding: 1rem;
        max-height: 28rem;
    }

    .product-list-item-details-description ul {
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 1.2rem;
    }

    .product-list-item-details-description ul li {
        margin-bottom: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
    }

    .product-list-item-details-description ul li span {
        font-weight: 700;
    }

    /* Modal */
    .product-list-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100dvh;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    }

    .product-list-modal img {
        height: 90dvh;
        /* max-width: 90vw; */
        object-fit: contain;
        transition: height 1s ease;
    }

    .product-list-modal svg {
        position: absolute;
        top: 2rem;
        right: 50rem;
        width: 4rem;
        height: 4rem;
        color: white;
        cursor: pointer;
    }

    /* Animation */
    .sliding-left {
        left: -4.7rem;
    }

    .showing-description {
        opacity: 1;
        width: 26rem;
        left: -4.5rem;
    }

    .modal-zoom {
        height: 200% !important;
        transition: height 1s ease;
        overflow-y: scroll;
    }

    .success-message {
        color: green;
        font-size: 1.2rem;
        font-weight: 600;
        margin-top: 1rem;
    }
</style>
