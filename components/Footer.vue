<template>
    <div class="footer">
        <div class="footer-content">
            <div class="footer-left">
                <p>
                    Vous ne savez pas où trouver cette information ?
                    <button @click="toggleModal">Cliquez ici</button>
                    <HelpGreyCardModal
                        v-if="showModal"
                        @closeModal="toggleModal"
                    />
                </p>
            </div>
            <div class="footer-right">
                <h4>Footer</h4>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from "vue";

    const showModal = ref(false);

    const toggleModal = () => {
        console.log("toggleModal");
        showModal.value = !showModal.value;
    };
</script>
