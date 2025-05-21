<template>
    <div class="navigation">
        <div class="navigation-left">
            <BsHouseDoor @click="goToHome" />
            <BsArrowLeft @click="goBack" />
        </div>
        <div class="navigation-right">
            <BsSearch @click="searchFocus" />
            <input
                type="text"
                placeholder="Rechercher un produit"
                id="search"
            />
        </div>
    </div>
</template>

<script setup>
    import { BsHouseDoor } from "@kalimahapps/vue-icons";
    import { BsArrowLeft } from "@kalimahapps/vue-icons";
    import { BsSearch } from "@kalimahapps/vue-icons";
    import { useRouter } from "vue-router";

    const router = useRouter();

    const searchFocus = () => {
        document.getElementById("search").classList.toggle("search-focus");
    };

    const goBack = () => {
        router.back();
    };

    const goToHome = () => {
        router.push("/");
    };
</script>

<style scoped>
    .navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 0.1rem;
        background-color: rgb(255, 255, 255);
        height: 5rem;
    }

    .navigation svg {
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .navigation svg:hover {
        transform: scale(1.1);
        color: #206bb1;
    }

    .navigation svg:active {
        transform: scale(0.95);
    }

    .navigation-left svg {
        margin-left: 2rem;
        width: 3rem;
        height: 3rem;
    }

    .navigation svg:first-child {
        border-right: 2px solid black;
        padding-right: 2rem;
    }

    .navigation input {
        height: 2rem;
        width: 2rem;
        margin-right: 1rem;
        border-radius: 5rem;
        transition: width 0.3s ease;
        border: 2px solid rgb(0, 0, 0);
    }

    .navigation input:focus {
        outline: none;
        width: 20rem;
        transition: all 0.3s ease;
    }

    .navigation-right {
        display: flex;
        justify-content: space-around;
    }

    .navigation-right svg {
        margin-right: 2rem;
        width: 2.5rem;
        height: 2.5rem;
    }

    .navigation-right .search-focus {
        width: 20rem;
        transition: all 0.3s ease;
    }
</style>
