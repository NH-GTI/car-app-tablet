<template>
    <div class="main-container">
        <div class="choices-summary">
            <div class="summary-content">
                <p>Essuie-glace > Audi > A1</p>
            </div>
        </div>
        <div class="main-header">
            <h1>
                Indiquez la date de 1ère mise en circulation de votre véhicule
            </h1>
            <BsQuestionCircle @click="toggleModal" />
        </div>
        <div class="main-content">
            <div class="circulation-date-container">
                <NuxtLink :to="`/productSpec/1`" class="circulation-date-item"
                    >Jusqu'au 02/2018</NuxtLink
                >
                <NuxtLink :to="`/productSpec/2`" class="circulation-date-item"
                    >Depuis le 03/2018</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script setup>
    import { BsQuestionCircle } from "@kalimahapps/vue-icons";
    import { useModalStore } from "../../stores/modal";

    const modalStore = useModalStore();

    const toggleModal = () => {
        console.log("toggleModal");
        modalStore.toggleModal();
    };
</script>

<style scoped>
    .circulation-date-container {
        display: flex;
        flex-direction: column;
    }
</style>
