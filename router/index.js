import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../pages/Home.vue"),
    },
    {
        path: "/categories",
        name: "Categories",
        component: () => import("../pages/Categories.vue"),
    },
    {
        path: "/brands",
        name: "Brands",
        component: () => import("../pages/Brands.vue"),
    },
    {
        path: "/subcategories",
        name: "Subcategories",
        component: () => import("../pages/Subcategories.vue"),
    },
    {
        path: "/circulation-dates",
        name: "CirculationDates",
        component: () => import("../pages/CirculationDates.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
