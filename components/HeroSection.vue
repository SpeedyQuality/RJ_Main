<template>
  <section class="relative bg-primary text-secondary py-24 md:py-32 overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-3xl">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" v-motion>
          {{ title }}
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-gray-medium" v-motion>
          {{ subtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4" v-motion>
          <NuxtLink :to="primaryButtonLink" class="btn bg-white text-primary hover:bg-gray-light">
            {{ primaryButtonText }}
          </NuxtLink>
          <NuxtLink v-if="secondaryButtonText" :to="secondaryButtonLink" class="btn border-2 border-white text-white hover:bg-white/10">
            {{ secondaryButtonText }}
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- Background pattern -->
    <div class="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10">
      <div class="absolute -right-10 top-10 w-96 h-96 border border-white/20 rounded-full"></div>
      <div class="absolute right-40 top-40 w-64 h-64 border border-white/20 rounded-full"></div>
      <div class="absolute -right-20 bottom-20 w-80 h-80 border border-white/20 rounded-full"></div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  primaryButtonText: {
    type: String,
    required: true
  },
  primaryButtonLink: {
    type: String,
    default: '/'
  },
  secondaryButtonText: {
    type: String,
    default: ''
  },
  secondaryButtonLink: {
    type: String,
    default: '/'
  }
})

// Animation directive
const vMotion = {
  mounted(el) {
    if (process.client) {
      // Add initial classes
      el.classList.add('opacity-0', 'translate-y-8')
      
      // Create observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Add animation classes when element is visible
            setTimeout(() => {
              el.classList.add('transition-all', 'duration-700', 'ease-out')
              el.classList.remove('opacity-0', 'translate-y-8')
              el.classList.add('opacity-100', 'translate-y-0')
              
              // Unobserve after animation
              observer.unobserve(el)
            }, 100)
          }
        })
      }, { threshold: 0.1 })
      
      observer.observe(el)
    }
  }
}
</script>