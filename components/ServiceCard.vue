<template>
  <div class="bg-white p-8 rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300 h-full flex flex-col">
    <div class="mb-6 text-primary">
      <slot name="icon">
        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <span class="text-2xl font-bold">{{ icon }}</span>
        </div>
      </slot>
    </div>
    
    <h3 class="text-xl font-bold mb-3">{{ title }}</h3>
    
    <p class="text-gray-dark mb-6 flex-grow">{{ description }}</p>
    
    <NuxtLink :to="link" class="inline-flex items-center font-semibold text-primary hover:text-accent transition-colors duration-300">
      En savoir plus
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: '✦'
  },
  link: {
    type: String,
    default: '/'
  }
})
</script>