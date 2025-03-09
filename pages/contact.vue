<template>
  <div>
    <HeroSection
      title="Contactez-nous"
      subtitle="Discutons de votre projet et voyons comment nous pouvons vous aider à atteindre vos objectifs."
      primaryButtonText="J'appelle"
      primaryButtonLink="tel:+33123456789"
    />
    
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 class="text-3xl font-bold mb-6">Parlons de votre projet</h2>
            <p class="text-gray-dark mb-8">
              Que vous souhaitiez développer votre présence en ligne, optimiser votre stratégie digitale ou former votre équipe, nous sommes là pour vous accompagner à chaque étape.
            </p>
            
            <div class="space-y-6 mb-8">
              <div class="flex items-start">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-1">Adresse</h3>
                  <p class="text-gray-dark">123 Avenue des Entrepreneurs<br>75001 Paris, France</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-1">Téléphone</h3>
                  <p class="text-gray-dark">
                    <a href="tel:+33123456789" class="hover:text-primary transition-colors duration-300">
                      +33 1 23 45 67 89
                    </a>
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-1">Email</h3>
                  <p class="text-gray-dark">
                    <a href="mailto:contact@referencejeune.com" class="hover:text-primary transition-colors duration-300">
                      contact@referencejeune.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-1">Horaires</h3>
                  <p class="text-gray-dark">
                    Lundi - Vendredi: 9h00 - 18h00<br>
                    Samedi - Dimanche: Fermé
                  </p>
                </div>
              </div>
            </div>
            
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <span class="sr-only">LinkedIn</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <span class="sr-only">Twitter</span>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact',
  meta: [
    { 
      name: 'description', 
      content: 'Contactez REFERENCE JEUNE pour discuter de vos besoins en transformation digitale. Notre équipe d\'experts est prête à vous accompagner dans vos projets.'
    }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>