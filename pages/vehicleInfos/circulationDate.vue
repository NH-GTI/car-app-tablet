<template>
    <div class="main-container">
        <div class="main-content">
            <h1>Indiquez la date de mise en circulation de votre véhicule</h1>
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
    const circulationDate = ref("");
</script>

<style scoped>
    .circulation-date-container {
        display: flex;
        flex-direction: column;
    }
</style>
