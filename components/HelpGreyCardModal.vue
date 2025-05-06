<template>
    <div class="help-grey-card-modal">
        <div class="help-grey-card-modal-content">
            <div class="help-grey-card-modal-content-text">
                <h4>Aide</h4>
                <p>
                    Vous ne savez pas où trouver cette information ? Cliquez sur
                    <span>Aide</span>
                </p>
                <button @click="$emit('closeModal')">X</button>
            </div>
            <img src="/assets/img/carte_grise.jpg" alt="carte grise" />
        </div>
    </div>
</template>
<script setup></script>
