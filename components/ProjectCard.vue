<template>
  <div class="group overflow-hidden rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300">
    <div class="relative overflow-hidden aspect-video">
      <img 
        :src="imageSrc" 
        :alt="title" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div class="p-6">
          <h3 class="text-white text-xl font-bold mb-2">{{ title }}</h3>
          <p class="text-white/80 mb-4">{{ client }}</p>
          <NuxtLink :to="link" class="inline-flex items-center text-white font-medium">
            Voir le projet
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="p-6 bg-white">
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="(tag, index) in tags" 
          :key="index" 
          class="inline-block px-3 py-1 text-xs font-medium bg-gray-light text-gray-dark rounded-full"
        >
          {{ tag }}
        </span>
      </div>
      <h3 class="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{{ title }}</h3>
      <p class="text-gray-dark">{{ description }}</p>
    </div>
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
  client: {
    type: String,
    required: true
  },
  imageSrc: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    default: () => []
  },
  link: {
    type: String,
    default: '/'
  }
})
</script>