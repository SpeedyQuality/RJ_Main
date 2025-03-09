<template>
  <div class="text-center mb-12 md:mb-16">
    <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ title }}</h2>
    <p v-if="subtitle" class="text-lg md:text-xl text-gray-dark max-w-3xl mx-auto">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>