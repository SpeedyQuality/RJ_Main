<template>
  <footer class="bg-primary text-secondary pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 class="text-xl font-bold mb-4 flex items-center">
            <img src="/Logo2.png" alt="REFERENCE JEUNE" class="h-8 mr-3">
            REFERENCE JEUNE
          </h4>
          <p class="mb-4 text-gray-medium">
            Votre partenaire de confiance pour l'accompagnement digital des PME.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-secondary hover:text-gray-medium transition-colors duration-300">
              <span class="sr-only">LinkedIn</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" class="text-secondary hover:text-gray-medium transition-colors duration-300">
              <span class="sr-only">Twitter</span>
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 class="text-xl font-bold mb-4">Services</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/services/strategie-digitale" class="hover:text-gray-medium transition-colors duration-300">Stratégie digitale</NuxtLink></li>
            <li><NuxtLink to="/services/developpement-web" class="hover:text-gray-medium transition-colors duration-300">Développement web</NuxtLink></li>
            <li><NuxtLink to="/services/marketing-digital" class="hover:text-gray-medium transition-colors duration-300">Marketing digital</NuxtLink></li>
            <li><NuxtLink to="/services/formation" class="hover:text-gray-medium transition-colors duration-300">Formation</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-xl font-bold mb-4">Liens utiles</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/a-propos" class="hover:text-gray-medium transition-colors duration-300">À propos</NuxtLink></li>
            <li><NuxtLink to="/realisations" class="hover:text-gray-medium transition-colors duration-300">Réalisations</NuxtLink></li>
            <li><NuxtLink to="/blog" class="hover:text-gray-medium transition-colors duration-300">Blog</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-gray-medium transition-colors duration-300">Contact</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-xl font-bold mb-4">Contact</h4>
          <address class="not-italic">
            <p class="mb-2">123 Avenue des Entrepreneurs</p>
            <p class="mb-2">75001 Paris, France</p>
            <p class="mb-2">
              <a href="mailto:contact@referencejeune.com" class="hover:text-gray-medium transition-colors duration-300">
                contact@referencejeune.com
              </a>
            </p>
            <p>
              <a href="tel:+33123456789" class="hover:text-gray-medium transition-colors duration-300">
                +33 1 23 45 67 89
              </a>
            </p>
          </address>
        </div>
      </div>
      
      <div class="border-t border-gray-dark pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-gray-medium mb-4 md:mb-0">
          &copy; {{ new Date().getFullYear() }} REFERENCE JEUNE. Tous droits réservés.
        </p>
        <div class="flex space-x-6">
          <NuxtLink to="/mentions-legales" class="text-sm text-gray-medium hover:text-secondary transition-colors duration-300">
            Mentions légales
          </NuxtLink>
          <NuxtLink to="/politique-de-confidentialite" class="text-sm text-gray-medium hover:text-secondary transition-colors duration-300">
            Politique de confidentialité
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>