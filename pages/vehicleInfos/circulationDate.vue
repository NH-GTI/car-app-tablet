<template>
    <div class="main-container">
        <div class="main-header">
            <h1>
                Indiquez la date de 1ère mise en circulation de votre véhicule
            </h1>
            <BsQuestionCircle @click="toggleModal" />
        </div>
        <div class="main-content">
            <div class="circulation-date-container">
                <NuxtLink :to="`/productType/1`" class="circulation-date-item"
                    >Jusqu'au 02/2018</NuxtLink
                >
                <NuxtLink :to="`/productType/2`" class="circulation-date-item"
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

    const { showModal } = storeToRefs(modalStore);

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
