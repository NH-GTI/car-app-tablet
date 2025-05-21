import { defineStore } from "pinia";

export const useCustomerChoicesStore = defineStore("customerChoices", {
    state: () => ({
        choices: {
            productCategory: null,
            brand: null,
            model: null,
            circulationDate: null,
            productType: null,
            options: [],
        },
    }),

    actions: {
        setChoice(category, value) {
            this.choices[category] = value;
        },

        addOption(option) {
            if (!this.choices.options.includes(option)) {
                this.choices.options.push(option);
            }
        },

        removeOption(option) {
            this.choices.options = this.choices.options.filter(
                (opt) => opt !== option
            );
        },

        resetChoices() {
            this.choices = {
                productCategory: null,
                brand: null,
                model: null,
                circulationDate: null,
                productType: null,
                options: [],
            };
        },
    },

    getters: {
        getChoices: (state) => state.choices,
        hasChoice: (state) => (category) => !!state.choices[category],
        getOptions: (state) => state.choices.options,
    },
});
