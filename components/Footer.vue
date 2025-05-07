<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-left">
                <!-- <p>
                    Vous ne savez pas où trouver cette information ?
                    <button @click="toggleModal">Cliquez ici</button>
                </p> -->
                <HelpGreyCardModal v-if="showModal" @closeModal="toggleModal" />
            </div>
            <div class="footer-right"></div>
        </div>
    </div>
</template>
<script setup>
    import { useModalStore } from "@/stores/modal";
    import HelpGreyCardModal from "./HelpGreyCardModal.vue";

    const modalStore = useModalStore();
    const { showModal } = storeToRefs(modalStore);

    const toggleModal = () => {
        modalStore.toggleModal();
        console.log(showModal.value);
    };
</script>
