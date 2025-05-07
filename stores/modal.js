// stores/counter.js
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
    state: () => {
        return { showModal: false };
    },
    actions: {
        toggleModal() {
            console.log("toggleModal in store");
            this.showModal = !this.showModal;
        },
    },

    getters: {
        getShowModal: (state) => state.showModal,
    },
});

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot));
}
