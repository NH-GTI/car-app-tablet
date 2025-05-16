<template>
    <div class="layout">
        <!-- Header -->
        <header>
            <nav>
                <Navigation />
            </nav>
        </header>

        <!-- Main Content -->
        <main>
            <slot />
            <NeedHelp />
        </main>

        <!-- Footer -->
        <footer>
            <Footer />
        </footer>
    </div>
</template>

<script setup>
    // Add any layout-specific logic here
</script>

<style scoped>
    .layout {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    main {
        flex: 1 0 auto;
    }

    footer {
        flex-shrink: 0;
    }
</style>
