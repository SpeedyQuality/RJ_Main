<template>
  <div class="bg-white p-8 rounded-lg shadow-elegant h-full flex flex-col">
    <div class="flex items-center mb-6">
      <div class="mr-4">
        <div class="w-16 h-16 bg-gray-light rounded-full overflow-hidden">
          <img v-if="imageSrc" :src="imageSrc" :alt="name" class="w-full h-full object-cover">
          <div v-else class="w-full h-full flex items-center justify-center bg-primary text-white text-xl font-bold">
            {{ getInitials(name) }}
          </div>
        </div>
      </div>
      <div>
        <h4 class="font-bold text-lg">{{ name }}</h4>
        <p class="text-gray-dark">{{ company }}</p>
      </div>
    </div>
    
    <div class="mb-6">
      <svg class="w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
    </div>
    
    <p class="text-gray-dark flex-grow">{{ quote }}</p>
    
    <div class="flex mt-6">
      <div v-for="i in 5" :key="i" class="mr-1">
        <svg class="w-5 h-5" :class="i <= rating ? 'text-yellow-500' : 'text-gray-medium'" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 5,
    validator: (value) => value >= 1 && value <= 5
  },
  imageSrc: {
    type: String,
    default: ''
  }
})

const getInitials = (name) => {
  return name
    .split(' ')
    .map(part => part.charAt(0))
    .join('')
    .toUpperCase()
    .substring(0, 2)
}
</script>