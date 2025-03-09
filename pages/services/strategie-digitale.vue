<template>
  <div>
    <HeroSection
      title="Stratégie Digitale"
      subtitle="Propulsez votre entreprise vers de nouveaux sommets avec une stratégie digitale sur mesure, adaptée à vos objectifs et à votre marché."
      primaryButtonText="Demander un devis"
      primaryButtonLink="/contact"
      secondaryButtonText="Découvrir nos réalisations"
      secondaryButtonLink="/realisations"
    />
    
    <!-- Introduction Section -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="relative" v-motion-slide-visible-once="{ direction: 'left' }">
            <div class="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Stratégie digitale pour PME" 
                class="w-full h-full object-cover"
              >
            </div>
            <div class="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-elegant max-w-xs hidden md:block">
              <p class="text-lg font-bold mb-2">+70%</p>
              <p class="text-gray-dark">d'augmentation moyenne du trafic qualifié pour nos clients</p>
            </div>
          </div>
          
          <div v-motion-slide-visible-once="{ direction: 'right' }">
            <h2 class="text-3xl font-bold mb-6">Une approche stratégique pour votre transformation digitale</h2>
            <p class="text-gray-dark mb-6">
              Dans un monde où le digital est devenu incontournable, disposer d'une stratégie claire et efficace est essentiel pour se démarquer. Chez REFERENCE JEUNE, nous concevons des stratégies digitales sur mesure qui répondent précisément aux besoins de votre entreprise.
            </p>
            <p class="text-gray-dark mb-6">
              Notre approche combine analyse approfondie, expertise technique et créativité pour élaborer des solutions qui génèrent des résultats concrets et mesurables.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mt-8">
              <NuxtLink to="/contact" class="btn-primary">
                Demander un devis
              </NuxtLink>
              <NuxtLink to="/services" class="btn-outline">
                Tous nos services
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Solutions Section -->
    <section class="section bg-gray-light overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Des solutions sur-mesure, adaptées à votre réalité</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Nous développons des stratégies digitales qui s'adaptent parfaitement à votre secteur d'activité, à votre cible et à vos objectifs commerciaux.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 100 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Identification des Leviers de Croissance</h3>
            <p class="text-gray-dark">
              Nous analysons votre marché, votre concurrence et vos performances actuelles pour identifier les opportunités de croissance les plus prometteuses pour votre entreprise.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 200 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Ciblage des Prospects Qualifiés</h3>
            <p class="text-gray-dark">
              Nous définissons précisément vos personas et mettons en place des stratégies d'acquisition ciblées pour attirer des prospects à fort potentiel de conversion.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 300 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Modernisation de votre Présence en Ligne</h3>
            <p class="text-gray-dark">
              Nous repensons votre écosystème digital pour offrir une expérience utilisateur optimale et refléter l'excellence de votre marque à travers tous les points de contact.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 400 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Amélioration du Positionnement Google</h3>
            <p class="text-gray-dark">
              Nous optimisons votre visibilité sur les moteurs de recherche grâce à des stratégies SEO avancées, vous permettant d'apparaître en tête des résultats pour les requêtes stratégiques.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 500 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Renforcement de la Notoriété Locale</h3>
            <p class="text-gray-dark">
              Nous développons des stratégies locales efficaces pour augmenter votre visibilité auprès de votre clientèle de proximité et renforcer votre ancrage territorial.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 600 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Optimisation des Conversions</h3>
            <p class="text-gray-dark">
              Nous analysons et optimisons chaque étape du parcours client pour maximiser vos taux de conversion et transformer les visiteurs en clients fidèles.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Management Section -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-motion-slide-visible-once="{ direction: 'left' }">
            <h2 class="text-3xl font-bold mb-6">Une Gestion Clé en Main</h2>
            <p class="text-gray-dark mb-6">
              Concentrez-vous sur votre cœur de métier pendant que nous pilotons votre stratégie digitale. Notre équipe d'experts reste force de proposition pour garantir votre succès en ligne.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">Suivi régulier et transparent</h3>
                  <p class="text-gray-dark">
                    Nous vous fournissons des rapports détaillés et des analyses régulières pour suivre l'évolution de vos performances et ajuster la stratégie si nécessaire.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">Réactivité et adaptabilité</h3>
                  <p class="text-gray-dark">
                    Notre équipe réagit rapidement aux évolutions du marché et aux nouvelles opportunités pour maintenir votre avantage concurrentiel.
                  </p>
                </div>
              </div>
              
              <div class="flex items-start">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-2">Expertise et veille technologique</h3>
                  <p class="text-gray-dark">
                    Nous restons constamment à l'affût des dernières tendances et innovations pour vous proposer des solutions à la pointe de la technologie.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative" v-motion-slide-visible-once="{ direction: 'right' }">
            <div class="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Équipe de stratégie digitale" 
                class="w-full h-full object-cover"
              >
            </div>
            <div class="absolute -top-8 -left-8 bg-white p-6 rounded-lg shadow-elegant max-w-xs hidden md:block">
              <p class="text-lg font-bold mb-2">100%</p>
              <p class="text-gray-dark">de nos clients recommandent nos services de stratégie digitale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Section -->
    <section class="section bg-gray-light overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Notre processus d'élaboration stratégique</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Une méthodologie éprouvée en 4 étapes pour développer une stratégie digitale performante et adaptée à vos besoins.
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
                  <h3 class="text-xl font-bold mb-3">1. Audit et analyse</h3>
                  <p class="text-gray-dark mb-4">
                    Nous réalisons un audit complet de votre présence digitale actuelle, analysons votre marché, votre concurrence et identifions les opportunités à saisir.
                  </p>
                  <ul class="space-y-2 md:ml-auto md:text-right">
                    <li class="flex items-center md:justify-end">
                      <span>Analyse de votre écosystème digital</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li class="flex items-center md:justify-end">
                      <span>Étude de marché et de la concurrence</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li class="flex items-center md:justify-end">
                      <span>Identification des forces et faiblesses</span>
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
                  <h3 class="text-xl font-bold mb-3">2. Élaboration de la stratégie</h3>
                  <p class="text-gray-dark mb-4">
                    Nous définissons les objectifs, les KPIs et élaborons une stratégie digitale sur mesure qui répond à vos besoins spécifiques et s'aligne avec vos objectifs commerciaux.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Définition des objectifs SMART</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Sélection des canaux et leviers pertinents</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Planification des actions et du budget</span>
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
                  <h3 class="text-xl font-bold mb-3">3. Mise en œuvre</h3>
                  <p class="text-gray-dark mb-4">
                    Nous déployons la stratégie définie en mettant en place les différentes actions et en coordonnant les différents leviers pour maximiser leur efficacité.
                  </p>
                  <ul class="space-y-2 md:ml-auto md:text-right">
                    <li class="flex items-center md:justify-end">
                      <span>Déploiement des actions marketing</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li class="flex items-center md:justify-end">
                      <span>Optimisation des canaux digitaux</span>
                      <svg class="w-5 h-5 text-primary ml-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                    </li>
                    <li class="flex items-center md:justify-end">
                      <span>Coordination des différents leviers</span>
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
                  <h3 class="text-xl font-bold mb-3">4. Suivi et optimisation</h3>
                  <p class="text-gray-dark mb-4">
                    Nous suivons en continu les performances de votre stratégie, analysons les résultats et apportons les ajustements nécessaires pour optimiser constamment les résultats.
                  </p>
                  <ul class="space-y-2">
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Analyse des performances et KPIs</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Rapports réguliers et transparents</span>
                    </li>
                    <li class="flex items-center">
                      <svg class="w-5 h-5 text-primary mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                      </svg>
                      <span>Optimisation continue de la stratégie</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Timeline dot -->
              <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center z-10 hidden md:flex">
                <span class="text-xl font-bold">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients qui ont transformé leur entreprise grâce à nos stratégies digitales sur mesure.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sophie Martin"
            position="Directrice"
            company="Eco Solutions"
            quote="REFERENCE JEUNE a complètement transformé notre présence en ligne. Notre stratégie digitale génère maintenant 3 fois plus de leads qualifiés qu'avant."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 100 }"
          />
          
          <TestimonialCard
            name="Thomas Dubois"
            position="Fondateur"
            company="InnoTech"
            quote="L'équipe de REFERENCE JEUNE a su comprendre nos besoins spécifiques et nous proposer une stratégie digitale parfaitement adaptée à notre secteur d'activité."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 200 }"
          />
          
          <TestimonialCard
            name="Marie Leroy"
            position="Responsable Marketing"
            company="Artisan Gourmet"
            quote="Grâce à la stratégie digitale mise en place, nous avons augmenté notre chiffre d'affaires de 40% en seulement 6 mois. Un investissement rentable !"
            :rating="4"
            v-motion-slide-visible-once="{ direction: 'up', delay: 300 }"
          />
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="section bg-gray-light overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Questions fréquentes</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Vous avez des questions sur notre approche en stratégie digitale ? Consultez nos réponses aux questions les plus fréquentes.
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
    
    <!-- CTA Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre stratégie digitale ?</h2>
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
  title: 'Stratégie Digitale',
  meta: [
    { 
      name: 'description', 
      content: 'Propulsez votre PME avec une stratégie digitale sur mesure. Identification des leviers de croissance, ciblage des prospects qualifiés, amélioration du positionnement Google et optimisation des conversions.'
    },
    {
      name: 'keywords',
      content: 'stratégie digitale, marketing digital, transformation digitale, PME, référencement, SEO, conversion, présence en ligne, notoriété locale'
    }
  ]
})

definePageMeta({
  layout: 'default'
})

const faqs = ref([
  {
    question: "Combien de temps faut-il pour voir les résultats d'une stratégie digitale ?",
    answer: "Les premiers résultats peuvent être visibles dès les premières semaines, notamment pour les actions à effet immédiat comme les campagnes publicitaires. Cependant, une stratégie digitale complète déploie généralement son plein potentiel sur 3 à 6 mois, le temps que les actions SEO et de content marketing produisent leurs effets et que les optimisations soient mises en place.",
    isOpen: false
  },
  {
    question: "Comment mesurez-vous l'efficacité d'une stratégie digitale ?",
    answer: "Nous définissons des KPIs (indicateurs clés de performance) spécifiques à vos objectifs : trafic qualifié, taux de conversion, coût d'acquisition, engagement, etc. Nous mettons en place des outils d'analyse pour suivre ces métriques et vous fournissons des rapports réguliers détaillant les performances et les résultats obtenus, avec des recommandations d'optimisation.",
    isOpen: false
  },
  {
    question: "Quelle est la différence entre stratégie digitale et marketing digital ?",
    answer: "La stratégie digitale est une vision globale qui définit comment votre entreprise va utiliser les canaux numériques pour atteindre ses objectifs commerciaux. Elle englobe tous les aspects de votre présence en ligne. Le marketing digital est une composante de cette stratégie, qui se concentre spécifiquement sur les actions promotionnelles et d'acquisition de clients via les canaux numériques.",
    isOpen: false
  },
  {
    question: "Est-ce que votre approche est adaptée aux petites entreprises ?",
    answer: "Absolument ! Nous adaptons notre approche à la taille et aux besoins spécifiques de chaque entreprise. Pour les petites structures, nous privilégions des stratégies efficaces et ciblées qui maximisent le retour sur investissement avec des budgets maîtrisés. Notre objectif est de vous proposer une stratégie qui correspond à vos ressources tout en générant des résultats concrets.",
    isOpen: false
  },
  {
    question: "Puis-je modifier ma stratégie digitale en cours de route ?",
    answer: "Oui, et c'est même recommandé ! Une bonne stratégie digitale doit être agile et s'adapter aux résultats obtenus, aux évolutions du marché et à vos objectifs. Nous analysons en continu les performances et proposons des ajustements pour optimiser les résultats. Cette approche itérative permet d'améliorer constamment l'efficacité de votre stratégie.",
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>