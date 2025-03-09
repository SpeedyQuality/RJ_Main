<template>
  <div>
    <HeroSection
      title="Développement Web"
      subtitle="Des solutions web sur mesure, performantes et sécurisées pour propulser votre entreprise dans l'ère digitale."
      primaryButtonText="Demander un devis"
      primaryButtonLink="/contact"
      secondaryButtonText="Voir nos réalisations"
      secondaryButtonLink="/realisations"
    />
    
    <!-- Introduction Section with Diagonal Layout -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gray-light transform -skew-y-6 origin-top-right z-0"></div>
      <div class="container relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-motion-slide-visible-once="{ direction: 'left' }">
            <h2 class="text-3xl font-bold mb-6">Créations web sur mesure pour votre entreprise</h2>
            <p class="text-gray-dark mb-6">
              Dans un monde où votre site web est souvent le premier point de contact avec vos clients, disposer d'une présence en ligne professionnelle et performante est essentiel. Chez REFERENCE JEUNE, nous concevons et développons des solutions web qui reflètent l'identité de votre entreprise tout en répondant aux exigences techniques les plus élevées.
            </p>
            <p class="text-gray-dark mb-6">
              Notre équipe de développeurs expérimentés maîtrise les technologies les plus récentes pour créer des sites web et des applications qui se démarquent par leur design, leur performance et leur facilité d'utilisation.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mt-8">
              <NuxtLink to="/contact" class="btn-primary">
                Discuter de votre projet
              </NuxtLink>
              <NuxtLink to="/services" class="btn-outline">
                Tous nos services
              </NuxtLink>
            </div>
          </div>
          
          <div class="relative" v-motion-slide-visible-once="{ direction: 'right' }">
            <div class="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Développement web professionnel" 
                class="w-full h-full object-cover"
              >
            </div>
            <div class="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-elegant max-w-xs hidden md:block">
              <p class="text-lg font-bold mb-2">+150</p>
              <p class="text-gray-dark">Sites web et applications développés avec succès</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Grid with Hexagon Layout -->
    <section class="section relative overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos services de développement web</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Quelle que soit la complexité de votre projet, nous avons l'expertise nécessaire pour le réaliser. Découvrez nos services de développement web sur mesure.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="group" v-motion-slide-visible-once="{ direction: 'up', delay: 100 }">
            <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-hover h-full flex flex-col">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Sites Web Vitrines</h3>
              <p class="text-gray-dark mb-6 flex-grow">
                Présentez votre entreprise avec élégance grâce à un site vitrine moderne, responsive et optimisé pour les moteurs de recherche. Idéal pour établir votre présence en ligne et attirer de nouveaux clients.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Design sur mesure</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Responsive (mobile, tablette, desktop)</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Optimisation SEO</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Service 2 -->
          <div class="group" v-motion-slide-visible-once="{ direction: 'up', delay: 200 }">
            <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-hover h-full flex flex-col">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Sites E-commerce</h3>
              <p class="text-gray-dark mb-6 flex-grow">
                Vendez vos produits ou services en ligne avec une boutique e-commerce performante, sécurisée et facile à gérer. Nous créons des expériences d'achat fluides qui convertissent les visiteurs en clients.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Gestion de catalogue produits</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Paiement sécurisé</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Gestion des stocks et commandes</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Service 3 -->
          <div class="group" v-motion-slide-visible-once="{ direction: 'up', delay: 300 }">
            <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-hover h-full flex flex-col">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Applications Web</h3>
              <p class="text-gray-dark mb-6 flex-grow">
                Optimisez vos processus internes ou offrez de nouveaux services à vos clients grâce à des applications web sur mesure, développées selon vos besoins spécifiques et vos objectifs business.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Développement sur mesure</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Interfaces utilisateur intuitives</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Intégration avec vos systèmes existants</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Service 4 -->
          <div class="group" v-motion-slide-visible-once="{ direction: 'up', delay: 400 }">
            <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-hover h-full flex flex-col">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Sites Web Responsives</h3>
              <p class="text-gray-dark mb-6 flex-grow">
                Assurez-vous que votre site s'affiche parfaitement sur tous les appareils, des smartphones aux grands écrans. Nous créons des interfaces adaptatives qui offrent une expérience utilisateur optimale sur tous les supports.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Adaptation à tous les écrans</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Temps de chargement optimisés</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Expérience utilisateur cohérente</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Service 5 -->
          <div class="group" v-motion-slide-visible-once="{ direction: 'up', delay: 500 }">
            <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-hover h-full flex flex-col">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Systèmes de Gestion de Contenu (CMS)</h3>
              <p class="text-gray-dark mb-6 flex-grow">
                Prenez le contrôle de votre contenu avec un CMS intuitif et personnalisé. Nous développons des solutions qui vous permettent de mettre à jour facilement votre site sans connaissances techniques.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Interface d'administration intuitive</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Gestion des utilisateurs et des droits</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Personnalisation selon vos besoins</span>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Service 6 -->
          <div class="group" v-motion-slide-visible-once="{ direction: 'up', delay: 600 }">
            <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-hover h-full flex flex-col">
              <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:bg-primary group-hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Maintenance et Support</h3>
              <p class="text-gray-dark mb-6 flex-grow">
                Assurez la pérennité et la sécurité de votre site web avec nos services de maintenance et de support. Nous veillons à ce que votre site reste performant, sécurisé et à jour.
              </p>
              <ul class="space-y-2 mb-6">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Mises à jour de sécurité</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Sauvegardes régulières</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Support technique réactif</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Technologies Section with Staggered Layout -->
    <section class="section bg-gray-light overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Technologies maîtrisées</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Nous utilisons les technologies les plus adaptées à chaque projet pour garantir performance, sécurité et évolutivité.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div class="order-2 md:order-1" v-motion-slide-visible-once="{ direction: 'left' }">
            <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                <div class="text-3xl mb-2">🌐</div>
                <p class="font-medium">HTML5/CSS3</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                <div class="text-3xl mb-2">⚛️</div>
                <p class="font-medium">React</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                <div class="text-3xl mb-2">🟢</div>
                <p class="font-medium">Vue.js</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                <div class="text-3xl mb-2">🟨</div>
                <p class="font-medium">JavaScript</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                <div class="text-3xl mb-2">🔷</div>
                <p class="font-medium">TypeScript</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                <div class="text-3xl mb-2">🐘</div>
                <p class="font-medium">PHP</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                <div class="text-3xl mb-2">🟦</div>
                <p class="font-medium">WordPress</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                <div class="text-3xl mb-2">🔶</div>
                <p class="font-medium">Laravel</p>
              </div>
              <div class="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-md">
                <div class="text-3xl mb-2">🟩</div>
                <p class="font-medium">Node.js</p>
              </div>
            </div>
          </div>
          
          <div class="order-1 md:order-2" v-motion-slide-visible-once="{ direction: 'right' }">
            <h3 class="text-2xl font-bold mb-4">Expertise technique de pointe</h3>
            <p class="text-gray-dark mb-6">
              Notre équipe maîtrise un large éventail de technologies front-end et back-end pour développer des solutions web adaptées à vos besoins spécifiques. Nous sélectionnons les technologies les plus appropriées en fonction de votre projet, de vos objectifs et de vos contraintes.
            </p>
            <p class="text-gray-dark mb-6">
              Que vous ayez besoin d'un site vitrine élégant, d'une boutique e-commerce performante ou d'une application web complexe, nous avons l'expertise nécessaire pour concrétiser votre vision.
            </p>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-bold mb-1">Technologies modernes</h4>
                  <p class="text-gray-dark">
                    Nous utilisons les frameworks et bibliothèques les plus récents pour créer des sites web rapides, réactifs et évolutifs.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 class="text-lg font-bold mb-1">Sécurité renforcée</h4>
                  <p class="text-gray-dark">
                    La sécurité est notre priorité. Nous mettons en œuvre les meilleures pratiques pour protéger votre site et les données de vos utilisateurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Section with Interactive Timeline -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Notre processus de développement</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Une méthodologie éprouvée pour transformer votre idée en solution web performante et adaptée à vos besoins.
          </p>
        </div>
        
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>
          
          <!-- Timeline items -->
          <div class="space-y-24 relative">
            <!-- Step 1 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative" v-motion-slide-visible-once="{ direction: 'up' }">
              <div class="md:text-right">
                <div class="bg-white p-8 rounded-lg shadow-elegant">
                  <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 md:ml-auto">
                    <span class="text-xl font-bold">1</span>
                  </div>
                  <h3 class="text-xl font-bold mb-3">Analyse des besoins</h3>
                  <p class="text-gray-dark mb-4">
                    Nous commençons par comprendre en profondeur vos objectifs, votre public cible et vos exigences spécifiques pour définir le périmètre du projet.
                  </p>
                  <ul class="space-y-2 md:ml-auto md:text-right">
                    <li class="flex items-center md:justify-end">
                      <span>Réunion de cadrage</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li class="flex items-center md:justify-end">
                      <span>Définition des objectifs</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li class="flex items-center md:justify-end">
                      <span>Analyse de la concurrence</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="hidden md:block"></div>
              
              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center z-10 hidden md:flex">
                <span class="text-xl font-bold">1</span>
              </div>
            </div>
            
            <!-- Step 2 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative" v-motion-slide-visible-once="{ direction: 'up' }">
              <div class="hidden md:block"></div>
              
              <div>
                <div class="bg-white p-8 rounded-lg shadow-elegant">
                  <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                    <span class="text-xl font-bold">2</span>
                  </div>
                  <h3 class="text-xl font-bold mb-3">Conception et design</h3>
                  <p class="text-gray-dark mb-4">
                    Nous créons une architecture et un design qui répondent à vos besoins tout en offrant une expérience utilisateur optimale et une identité visuelle cohérente.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Wireframes et maquettes</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Design responsive</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Validation des maquettes</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center z-10 hidden md:flex">
                <span class="text-xl font-bold">2</span>
              </div>
            </div>
            
            <!-- Step 3 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative" v-motion-slide-visible-once="{ direction: 'up' }">
              <div class="md:text-right">
                <div class="bg-white p-8 rounded-lg shadow-elegant">
                  <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 md:ml-auto">
                    <span class="text-xl font-bold">3</span>
                  </div>
                  <h3 class="text-xl font-bold mb-3">Développement</h3>
                  <p class="text-gray-dark mb-4">
                    Notre équipe de développeurs transforme les maquettes en code, en utilisant les technologies les plus adaptées à votre projet pour garantir performance et évolutivité.
                  </p>
                  <ul class="space-y-2 md:ml-auto md:text-right">
                    <li class="flex items-center md:justify-end">
                      <span>Intégration HTML/CSS</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li class="flex items-center md:justify-end">
                      <span>Développement back- end</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li class="flex items-center md:justify-end">
                      <span>Tests unitaires et fonctionnels</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="hidden md:block"></div>
              
              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center z-10 hidden md:flex">
                <span class="text-xl font-bold">3</span>
              </div>
            </div>
            
            <!-- Step 4 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative" v-motion-slide-visible-once="{ direction: 'up' }">
              <div class="hidden md:block"></div>
              
              <div>
                <div class="bg-white p-8 rounded-lg shadow-elegant">
                  <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                    <span class="text-xl font-bold">4</span>
                  </div>
                  <h3 class="text-xl font-bold mb-3">Tests et validation</h3>
                  <p class="text-gray-dark mb-4">
                    Nous effectuons des tests rigoureux pour garantir que votre site fonctionne parfaitement sur tous les navigateurs et appareils, et qu'il répond à toutes vos exigences.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Tests de compatibilité</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Tests de performance</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Validation client</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center z-10 hidden md:flex">
                <span class="text-xl font-bold">4</span>
              </div>
            </div>
            
            <!-- Step 5 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative" v-motion-slide-visible-once="{ direction: 'up' }">
              <div class="md:text-right">
                <div class="bg-white p-8 rounded-lg shadow-elegant">
                  <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4 md:ml-auto">
                    <span class="text-xl font-bold">5</span>
                  </div>
                  <h3 class="text-xl font-bold mb-3">Déploiement</h3>
                  <p class="text-gray-dark mb-4">
                    Nous mettons en ligne votre site web sur votre serveur ou nous vous aidons à choisir la solution d'hébergement la plus adaptée à vos besoins.
                  </p>
                  <ul class="space-y-2 md:ml-auto md:text-right">
                    <li class="flex items-center md:justify-end">
                      <span>Configuration du serveur</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li class="flex items-center md:justify-end">
                      <span>Mise en production</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li class="flex items-center md:justify-end">
                      <span>Tests post-déploiement</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="hidden md:block"></div>
              
              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center z-10 hidden md:flex">
                <span class="text-xl font-bold">5</span>
              </div>
            </div>
            
            <!-- Step 6 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative" v-motion-slide-visible-once="{ direction: 'up' }">
              <div class="hidden md:block"></div>
              
              <div>
                <div class="bg-white p-8 rounded-lg shadow-elegant">
                  <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                    <span class="text-xl font-bold">6</span>
                  </div>
                  <h3 class="text-xl font-bold mb-3">Suivi et maintenance</h3>
                  <p class="text-gray-dark mb-4">
                    Nous assurons le suivi et la maintenance de votre site pour garantir son bon fonctionnement dans la durée et l'adapter à l'évolution de vos besoins.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Mises à jour régulières</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Support technique</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Évolutions et améliorations</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center z-10 hidden md:flex">
                <span class="text-xl font-bold">6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section with Curved Background -->
    <section class="section bg-gray-light relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-24 bg-white" style="border-radius: 0 0 50% 50% / 0 0 100% 100%;"></div>
      <div class="container relative z-10 pt-12">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients qui ont transformé leur présence en ligne grâce à nos solutions de développement web sur mesure.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sophie Martin"
            position="Directrice"
            company="Eco Solutions"
            quote="REFERENCE JEUNE a créé un site web qui reflète parfaitement notre identité et nos valeurs. Le résultat est à la hauteur de nos attentes, tant sur le plan esthétique que fonctionnel."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 100 }"
          />
          
          <TestimonialCard
            name="Thomas Dubois"
            position="Fondateur"
            company="InnoTech"
            quote="L'équipe de développement a su transformer notre vision en une application web performante et intuitive. Leur expertise technique et leur professionnalisme ont fait toute la différence."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 200 }"
          />
          
          <TestimonialCard
            name="Marie Leroy"
            position="Responsable Marketing"
            company="Artisan Gourmet"
            quote="Notre boutique en ligne développée par REFERENCE JEUNE a dépassé toutes nos attentes. Les ventes ont augmenté de 45% dès le premier mois après le lancement."
            :rating="4"
            v-motion-slide-visible-once="{ direction: 'up', delay: 300 }"
          />
        </div>
      </div>
      <div class="absolute bottom-0 left-0 w-full h-24 bg-white" style="border-radius: 50% 50% 0 0 / 100% 100% 0 0;"></div>
    </section>
    
    <!-- FAQ Section with Accordion -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Vous avez des questions sur nos services de développement web ? Consultez nos réponses aux questions les plus fréquentes.
          </p>
        </div>
        
        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-6" v-motion-slide-visible-once="{ direction: 'up', delay: index * 100 }">
            <button 
              @click="toggleFaq(index)" 
              class="flex justify-between items-center w-full text-left p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <span class="font-bold">{{ faq.question }}</span>
              <svg 
                class="w-5 h-5 transition-transform duration-300" 
                :class="{ 'transform rotate-180': faq.isOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              v-show="faq.isOpen" 
              class="mt-2 p-4 bg-white rounded-lg shadow-sm"
            >
              <p class="text-gray-dark">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Quote Request Section with Gradient Background -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-elegant overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-8 md:p-12">
              <h2 class="text-2xl md:text-3xl font-bold mb-6">Demandez un devis gratuit</h2>
              <p class="text-gray-dark mb-6">
                Vous avez un projet de développement web ? Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et sans engagement.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Devis détaillé et transparent</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Réponse sous 48h maximum</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Sans engagement</span>
                </li>
              </ul>
              <NuxtLink to="/contact" class="btn-primary">
                Demander un devis
              </NuxtLink>
            </div>
            <div class="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Demande de devis développement web" 
                class="w-full h-full object-cover"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Prêt à concrétiser votre projet web ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn bg-white text-primary hover:bg-gray-light">
            Demander un devis gratuit
          </NuxtLink>
          <NuxtLink to="/realisations" class="btn border-2 border-white text-white hover:bg-white/10">
            Voir nos réalisations
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Développement Web',
  meta: [
    { 
      name: 'description', 
      content: 'Services de développement web sur mesure pour PME : sites vitrines, e-commerce, applications web, responsive design. Solutions performantes, sécurisées et optimisées pour convertir vos visiteurs en clients.'
    },
    {
      name: 'keywords',
      content: 'développement web, création site internet, site vitrine, e-commerce, application web, responsive design, PME, développeur web, agence web'
    }
  ]
})

definePageMeta({
  layout: 'default'
})

const faqs = ref([
  {
    question: "Combien coûte la création d'un site web ?",
    answer: "Le coût de création d'un site web varie en fonction de plusieurs facteurs : type de site (vitrine, e-commerce, application), nombre de pages, fonctionnalités spécifiques, design sur mesure, etc. Nous établissons un devis personnalisé après avoir analysé précisément vos besoins. Nos tarifs débutent généralement à partir de 2 500€ pour un site vitrine professionnel.",
    isOpen: false
  },
  {
    question: "Quel est le délai de réalisation d'un site web ?",
    answer: "Le délai de réalisation dépend de la complexité du projet. En général, comptez 4 à 6 semaines pour un site vitrine, 8 à 12 semaines pour un site e-commerce, et 12 à 24 semaines pour une application web complexe. Nous établissons un planning détaillé dès le début du projet et vous tenons informé de l'avancement à chaque étape.",
    isOpen: false
  },
  {
    question: "Mon site sera-t-il optimisé pour les moteurs de recherche (SEO) ?",
    answer: "Absolument ! Tous nos sites sont développés avec une attention particulière à l'optimisation pour les moteurs de recherche. Nous intégrons les bonnes pratiques SEO dès la conception : structure HTML sémantique, temps de chargement optimisé, responsive design, méta-données appropriées, etc. Nous pouvons également vous proposer des services SEO plus avancés pour améliorer votre positionnement.",
    isOpen: false
  },
  {
    question: "Proposez-vous des services de maintenance après la mise en ligne ?",
    answer: "Oui, nous proposons différentes formules de maintenance pour assurer le bon fonctionnement de votre site dans la durée. Ces formules incluent les mises à jour de sécurité, les sauvegardes régulières, les corrections de bugs, l'assistance technique et, selon la formule choisie, des évolutions fonctionnelles. Nous vous recommandons vivement de souscrire à un contrat de maintenance pour garantir la pérennité de votre investissement.",
    isOpen: false
  },
  {
    question: "Mon site sera-t-il adapté aux mobiles et tablettes ?",
    answer: "Tous nos sites sont développés en responsive design, ce qui signifie qu'ils s'adaptent automatiquement à tous les types d'écrans (ordinateurs, tablettes, smartphones). Nous testons rigoureusement chaque site sur différents appareils et navigateurs pour garantir une expérience utilisateur optimale, quelle que soit la façon dont vos visiteurs accèdent à votre site.",
    isOpen: false
  },
  {
    question: "Puis-je mettre à jour moi-même le contenu de mon site ?",
    answer: "Oui, nous intégrons systématiquement un système de gestion de contenu (CMS) intuitif qui vous permet de modifier facilement les textes, images et autres contenus de votre site sans connaissances techniques particulières. Nous vous formons à l'utilisation de cet outil et restons disponibles pour vous accompagner si besoin.",
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>