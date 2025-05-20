<template>
    <div class="main-container">
        <h1>Que recherchez-vous ?</h1>
        <h2>Cliquez sur une catégorie pour voir les produits</h2>
        <h3>Faites défiler pour voir toutes les catégories</h3>
        <div class="main-content">
            <div class="category-container">
                <NuxtLink
                    v-for="category in categories"
                    :key="category.id"
                    :to="`/brand/${category.id}`"
                    ><img src="/public/img/essuie-glace.jpg" alt="" />
                    {{ category.name }}</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script setup>
    const categories = ref([]);

    // Function to create a new category
    const createCategory = async (categoryData) => {
        try {
            const response = await $fetch(
                "http://localhost:1337/api/categories",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer 8b8035ecfa9bad12250953179a66389b18585ab5cef7c6741bfc315cec85693b6acb87781457e43f190ee10f6ba15df880fd8d8db012697d7652826032b31dcd09cb965713cf01f21128951c77fe9aaa7b11345402ff88d9a69efbe2d1cef518aa762a7cc7b522ce2fca88e358a8d2f3ead3c3ef14d6142bf1bfe59e54a6be5f`,
                    },
                    body: {
                        data: {
                            name: categoryData.name,
                            description: categoryData.description,
                            // Add other fields as needed
                        },
                    },
                }
            );
            console.log("Category created:", response);
            // Refresh the categories list
            await fetchCategories();
        } catch (error) {
            console.error("Error creating category:", error);
        }
    };

    // Function to fetch categories
    const fetchCategories = async () => {
        try {
            const response = await $fetch(
                "http://localhost:1337/api/categories",
                {
                    headers: {
                        Authorization: `Bearer 8b8035ecfa9bad12250953179a66389b18585ab5cef7c6741bfc315cec85693b6acb87781457e43f190ee10f6ba15df880fd8d8db012697d7652826032b31dcd09cb965713cf01f21128951c77fe9aaa7b11345402ff88d9a69efbe2d1cef518aa762a7cc7b522ce2fca88e358a8d2f3ead3c3ef14d6142bf1bfe59e54a6be5f`,
                    },
                }
            );
            categories.value = response.data;
            console.log("Categories:", categories.value);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    onMounted(() => {
        fetchCategories();
    });

    // Example of how to use createCategory:
    // createCategory({
    //     name: "New Category",
    //     description: "This is a new category"
    // });
</script>
