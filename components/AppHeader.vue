<template>
  <header class="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-4">
        <NuxtLink to="/" class="flex items-center">
          <img src="/logo.png" alt="REFERENCE JEUNE" class="h-8">
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" 
            class="text-primary hover:text-accent font-medium transition-colors duration-300">
            {{ item.name }}
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-primary">
            Nous contacter
          </NuxtLink>
        </nav>
        
        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden focus:outline-none">
          <span v-if="!isMenuOpen" class="block w-6 h-0.5 bg-black mb-1.5"></span>
          <span v-if="!isMenuOpen" class="block w-6 h-0.5 bg-black mb-1.5"></span>
          <span v-if="!isMenuOpen" class="block w-6 h-0.5 bg-black"></span>
          <span v-else class="block text-2xl">&times;</span>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden py-4 border-t border-gray-medium">
        <nav class="flex flex-col space-y-4">
          <NuxtLink v-for="item in navItems" :key="item.path" :to="item.path" 
            class="text-primary hover:text-accent font-medium transition-colors duration-300"
            @click="isMenuOpen = false">
            {{ item.name }}
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-primary text-center" @click="isMenuOpen = false">
            Nous contacter
          </NuxtLink>
        </nav>
      </div>
    </div>
  </header>
  <!-- Spacer to prevent content from hiding behind fixed header -->
  <div class="h-16"></div>
</template>

<script setup>
const isMenuOpen = ref(false)

const navItems = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Blog', path: '/blog' },
  { name: 'À propos', path: '/a-propos' },
  { name: 'Réalisations', path: '/realisations' },
]

// Close mobile menu when window is resized to desktop size
onMounted(() => {
  if (process.client) {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768 && isMenuOpen.value) {
        isMenuOpen.value = false
      }
    })
  }
})
</script>