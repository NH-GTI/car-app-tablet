<template>
    <div class="main-container">
        <div class="main-header">
            <h1>Indiquez la date de mise en circulation de votre véhicule</h1>
            <BsQuestionCircle @click="toggleModal" />
        </div>
        <div class="main-content">
            <div class="circulation-date-container">
                <div class="circulation-date-item">
                    <h4>Jusqu'au 02/2018</h4>
                </div>
                <div class="circulation-date-item">
                    <h4>Depuis le 03/2018</h4>
                </div>
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
