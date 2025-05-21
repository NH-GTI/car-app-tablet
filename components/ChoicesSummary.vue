<template>
    <div class="choices-summary">
        <div class="summary-content">
            <p>Essuie-glace > Audi > A1 > Après 2018</p>
        </div>
    </div>
</template>

<script setup>
    import { useCustomerChoicesStore } from "~/stores/customerChoices";
    import { storeToRefs } from "pinia";

    const store = useCustomerChoicesStore();
    const { choices } = storeToRefs(store);
</script>

<style scoped></style>
