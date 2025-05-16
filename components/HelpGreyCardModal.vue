<template>
    <div class="help-grey-card-modal">
        <div class="help-grey-card-modal-content">
            <div class="help-grey-card-modal-content-header">
                <div class="help-grey-card-modal-content-header-left">
                    <h4><BsLightbulb /> Comment lire sa carte grise ?</h4>
                </div>
                <div class="help-grey-card-modal-content-header-right">
                    <button @click="$emit('closeModal')">
                        <BsXLg />
                    </button>
                </div>
            </div>
            <div class="help-grey-card-modal-content-img">
                <img src="/assets/img/carte_grise.jpg" alt="carte grise" />
            </div>
        </div>
    </div>
</template>
<script setup>
    import { BsLightbulb } from "@kalimahapps/vue-icons";
    import { BsXLg } from "@kalimahapps/vue-icons";
</script>

<style scoped></style>
