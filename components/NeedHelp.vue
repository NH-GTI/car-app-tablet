<template>
    <div class="need-help">
        <div @click="toggleHelp">
            <h3>Besoin d'aide ?</h3>
            <p>Cliquez ici</p>
        </div>
        <div>
            <button>Où trouver la date de 1ère mise en circulation ?</button>
        </div>
    </div>
</template>

<script setup>
    const isOpen = ref(false);

    const toggleHelp = () => {
        const helpButton = document.querySelector(
            ".need-help div:nth-child(1)"
        );
        const helpDetails = document.querySelector(
            ".need-help div:nth-child(2)"
        );

        helpButton.classList.toggle("help-button-active");
        helpDetails.classList.toggle("help-details-active");
    };
</script>

<style scoped>
    .need-help > div:nth-child(1) {
        background-color: #ffffff;
        padding: 0 1rem 0 1rem;
        border-radius: 10px 0 0 10px;
        margin-top: 20px;
        position: fixed;
        top: 10rem;
        right: 0;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .need-help h3 {
        font-size: 1.1rem;
        font-weight: 600;
    }

    .need-help p {
        font-size: 0.9rem;
        font-weight: 400;
        font-style: italic;
    }

    .need-help div:nth-child(2) {
        background-color: white;
        padding: 1rem;
        border-radius: 10px;
        position: fixed;
        top: 10rem;
        right: -20rem;
        width: 10rem;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        cursor: pointer;
        min-height: 15rem;
        transition: all 0.3s ease;
    }

    .need-help div:nth-child(2) > button {
        background-color: #f0f0f0;
        padding: 1rem;
        border-radius: 10px;
        border: none;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        cursor: pointer;
        font-size: 0.9rem;
    }

    .help-button-active {
        right: 12rem !important;
    }

    .help-details-active {
        right: 0rem !important;
    }
</style>
