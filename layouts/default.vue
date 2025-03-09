<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s | REFERENCE JEUNE',
  meta: [
    { name: 'description', content: 'REFERENCE JEUNE accompagne les PME dans leur transformation digitale avec des solutions sur mesure et innovantes.' }
  ]
})
</script>