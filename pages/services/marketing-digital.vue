<template>
  <div>
    <HeroSection
      title="Marketing Digital"
      subtitle="Boostez votre visibilité en ligne et générez plus de leads qualifiés grâce à nos solutions de marketing digital sur mesure."
      primaryButtonText="Demander un devis"
      primaryButtonLink="/contact"
      secondaryButtonText="Découvrir nos réalisations"
      secondaryButtonLink="/realisations"
    />
    
    <!-- Introduction Section -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-motion-slide-visible-once="{ direction: 'left' }">
            <h2 class="text-3xl font-bold mb-6">Attirez plus de clients grâce à une stratégie marketing digitale efficace</h2>
            <p class="text-gray-dark mb-6">
              Dans un monde de plus en plus connecté, votre présence en ligne est devenue un élément crucial de votre succès commercial. Chez REFERENCE JEUNE, nous vous aidons à développer et mettre en œuvre des stratégies de marketing digital performantes qui vous permettent d'atteindre vos objectifs commerciaux.
            </p>
            <p class="text-gray-dark mb-6">
              Que vous souhaitiez augmenter votre visibilité, générer plus de leads qualifiés ou fidéliser vos clients, nos experts en marketing digital vous accompagnent avec des solutions sur mesure adaptées à votre secteur d'activité et à votre cible.
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
          
          <div class="relative" v-motion-slide-visible-once="{ direction: 'right' }">
            <div class="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Marketing digital pour PME" 
                class="w-full h-full object-cover"
              >
            </div>
            <div class="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-elegant max-w-xs hidden md:block">
              <p class="text-lg font-bold mb-2">+85%</p>
              <p class="text-gray-dark">d'augmentation moyenne du trafic qualifié pour nos clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Section with Tabs -->
    <section class="section bg-gray-light overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos services de marketing digital</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Nous proposons deux approches complémentaires pour maximiser votre visibilité en ligne et générer un flux constant de prospects qualifiés.
          </p>
        </div>
        
        <div class="flex flex-col md:flex-row justify-center mb-12">
          <button 
            @click="activeTab = 'sea'" 
            class="px-8 py-4 font-semibold transition-all duration-300 rounded-t-lg md:rounded-tr-none md:rounded-l-lg"
            :class="activeTab === 'sea' ? 'bg-white text-primary' : 'bg-primary/10 text-primary hover:bg-primary/20'"
          >
            Campagnes SEA (Ads)
          </button>
          <button 
            @click="activeTab = 'seo'" 
            class="px-8 py-4 font-semibold transition-all duration-300 rounded-b-lg md:rounded-bl-none md:rounded-r-lg"
            :class="activeTab === 'seo' ? 'bg-white text-primary' : 'bg-primary/10 text-primary hover:bg-primary/20'"
          >
            Optimisation SEO
          </button>
        </div>
        
        <!-- SEA Tab Content -->
        <div v-if="activeTab === 'sea'" class="bg-white rounded-lg shadow-elegant p-8 md:p-12" v-motion-fade-visible-once>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold">Campagnes SEA sur mesure</h3>
              </div>
              
              <p class="text-gray-dark mb-6">
                Nos campagnes publicitaires Google Ads et sur les réseaux sociaux sont conçues pour générer rapidement du trafic qualifié et des conversions. Nous mettons en place une stratégie SEA complète et optimisée pour maximiser votre retour sur investissement.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="min-w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary font-semibold"></span>
                  </div>
                  <div>
                    <h4 class="font-bold mb-1">Étude de marché approfondie</h4>
                    <p class="text-gray-dark">Analyse de votre secteur, de votre concurrence et identification des opportunités à saisir.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="min-w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary font-semibold"></span>
                  </div>
                  <div>
                    <h4 class="font-bold mb-1">Ciblage précis des opportunités</h4>
                    <p class="text-gray-dark">Sélection des mots-clés les plus pertinents et définition des audiences cibles pour maximiser l'efficacité de vos campagnes.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="min-w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary font-semibold"></span>
                  </div>
                  <div>
                    <h4 class="font-bold mb-1">Répartition optimale du budget</h4>
                    <p class="text-gray-dark">Allocation stratégique de votre budget publicitaire pour maximiser le retour sur investissement.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="min-w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary font-semibold"></span>
                  </div>
                  <div>
                    <h4 class="font-bold mb-1">Suivi et optimisation continue</h4>
                    <p class="text-gray-dark">Analyse régulière des performances et ajustements pour améliorer constamment les résultats.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-light rounded-lg p-8">
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold mb-2">Forfait SEA</h3>
                <div class="flex justify-center items-baseline mb-4">
                  <span class="text-4xl font-bold">Sur mesure</span>
                </div>
                <p class="text-gray-dark mb-6">
                  Budget publicitaire + frais de gestion
                </p>
              </div>
              
              <div class="mb-8">
                <div class="flex items-center justify-between p-3 bg-white rounded-lg mb-2">
                  <span class="font-medium">Mise en place des campagnes</span>
                  <span class="text-primary">✓</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-white rounded-lg mb-2">
                  <span class="font-medium">Création des annonces</span>
                  <span class="text-primary">✓</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-white rounded-lg mb-2">
                  <span class="font-medium">Optimisation des landing pages</span>
                  <span class="text-primary">✓</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span class="font-medium">Suivi des performances</span>
                  <span class="text-primary">✓</span>
                </div>
              </div>
              
              <div class="bg-primary/5 p-6 rounded-lg mb-8">
                <h4 class="font-bold mb-3">Abonnement de gestion SEA</h4>
                <div class="flex justify-between items-center mb-2">
                  <span>Gestion mensuelle</span>
                  <span class="font-bold">120€ /mois</span>
                </div>
                <ul class="text-sm text-gray-dark space-y-2 mb-4">
                  <li class="flex items-center">
                    <div class="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                      <span class="text-primary text-xs">✓</span>
                    </div>
                    <span>Rapport mensuel détaillé</span>
                  </li>
                  <li class="flex items-center">
                    <div class="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                      <span class="text-primary text-xs">✓</span>
                    </div>
                    <span>Audit trimestriel approfondi</span>
                  </li>
                  <li class="flex items-center">
                    <div class="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                      <span class="text-primary text-xs">✓</span>
                    </div>
                    <span>Optimisation continue des campagnes</span>
                  </li>
                  <li class="flex items-center">
                    <div class="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                      <span class="text-primary text-xs">✓</span>
                    </div>
                    <span>Correctifs mineurs et ajustements</span>
                  </li>
                </ul>
              </div>
              
              <div class="text-center">
                <NuxtLink to="/contact" class="btn-primary w-full">
                  Demander un devis
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        
        <!-- SEO Tab Content -->
        <div v-if="activeTab === 'seo'" class="bg-white rounded-lg shadow-elegant p-8 md:p-12" v-motion-fade-visible-once>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold">Optimisation SEO</h3>
              </div>
              
              <p class="text-gray-dark mb-6">
                Améliorez votre visibilité organique sur les moteurs de recherche et attirez un flux constant de visiteurs qualifiés grâce à notre expertise en référencement naturel (SEO). Nous optimisons votre site pour qu'il apparaisse en tête des résultats de recherche pour les requêtes stratégiques.
              </p>
              
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <div class="min-w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary font-semibold"></span>
                  </div>
                  <div>
                    <h4 class="font-bold mb-1">Audit SEO complet</h4>
                    <p class="text-gray-dark">Analyse approfondie de votre site web et identification des axes d'amélioration.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="min-w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary font-semibold"></span>
                  </div>
                  <div>
                    <h4 class="font-bold mb-1">Optimisation technique</h4>
                    <p class="text-gray-dark">Amélioration de la structure, de la vitesse et de l'expérience utilisateur de votre site.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="min-w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary font-semibold"></span>
                  </div>
                  <div>
                    <h4 class="font-bold mb-1">Optimisation du contenu</h4>
                    <p class="text-gray-dark">Création et optimisation de contenus pertinents et de qualité pour vos utilisateurs et les moteurs de recherche.</p>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <div class="min-w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary font-semibold"></span>
                  </div>
                  <div>
                    <h4 class="font-bold mb-1">Stratégie de netlinking</h4>
                    <p class="text-gray-dark">Développement d'une stratégie d'acquisition de liens de qualité pour renforcer l'autorité de votre site.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-light rounded-lg p-8">
              <div class="text-center mb-6">
                <h3 class="text-2xl font-bold mb-2">Forfait SEO</h3>
                <div class="flex justify-center items-baseline mb-4">
                  <span class="text-4xl font-bold">Sur mesure</span>
                </div>
                <p class="text-gray-dark mb-6">
                  Adapté à vos besoins et objectifs
                </p>
              </div>
              
              <div class="mb-8">
                <div class="flex items-center justify-between p-3 bg-white rounded-lg mb-2">
                  <span class="font-medium">Audit SEO initial</span>
                  <span class="text-primary">✓</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-white rounded-lg mb-2">
                  <span class="font-medium">Optimisation on-page</span>
                  <span class="text-primary">✓</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-white rounded-lg mb-2">
                  <span class="font-medium">Optimisation technique</span>
                  <span class="text-primary">✓</span>
                </div>
                <div class="flex items-center justify-between p-3 bg-white rounded-lg">
                  <span class="font-medium">Stratégie de contenu</span>
                  <span class="text-primary">✓</span>
                </div>
              </div>
              
              <div class="space-y-6 mb-8">
                <div class="bg-primary/5 p-6 rounded-lg">
                  <h4 class="font-bold mb-3">Abonnement de gestion SEO</h4>
                  <div class="flex justify-between items-center mb-2">
                    <span>Gestion mensuelle</span>
                    <span class="font-bold">80€ /mois</span>
                  </div>
                  <ul class="text-sm text-gray-dark space-y-2">
                    <li class="flex items-center">
                      <div class="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                        <span class="text-primary text-xs">✓</span>
                      </div>
                      <span>Rapport mensuel détaillé</span>
                    </li>
                    <li class="flex items-center">
                      <div class="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                        <span class="text-primary text-xs">✓</span>
                      </div>
                      <span>Audit trimestriel approfondi</span>
                    </li>
                    <li class="flex items-center">
                      <div class="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                        <span class="text-primary text-xs">✓</span>
                      </div>
                      <span>Correctifs mineurs</span>
                    </li>
                  </ul>
                </div>
                
                <div class="bg-primary/5 p-6 rounded-lg">
                  <h4 class="font-bold mb-3">Création de contenu SEO</h4>
                  <div class="flex justify-between items-center mb-2">
                    <span>Article mensuel</span>
                    <span class="font-bold">85€ /article</span>
                  </div>
                  <ul class="text-sm text-gray-dark space-y-2">
                    <li class="flex items-center">
                      <div class="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                        <span class="text-primary text-xs">✓</span>
                      </div>
                      <span>Rédaction par des experts</span>
                    </li>
                    <li class="flex items-center">
                      <div class="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                        <span class="text-primary text-xs">✓</span>
                      </div>
                      <span>Optimisé pour le SEO</span>
                    </li>
                    <li class="flex items-center">
                      <div class="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                        <span class="text-primary text-xs">✓</span>
                      </div>
                      <span>Mise en ligne clé en main</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="text-center">
                <NuxtLink to="/contact" class="btn-primary w-full">
                  Demander un devis
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Results Section with Animated Numbers -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Des résultats concrets et mesurables</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Nos stratégies de marketing digital sont conçues pour générer des résultats tangibles qui contribuent directement à la croissance de votre entreprise.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-elegant text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 100 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-4xl font-bold mb-3">+75%</h3>
            <p class="text-gray-dark">d'augmentation moyenne de la visibilité en ligne</p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 200 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 class="text-4xl font-bold mb-3">+65%</h3>
            <p class="text-gray-dark">d'augmentation du taux d'engagement</p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 300 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-4xl font-bold mb-3">-30%</h3>
            <p class="text-gray-dark">de réduction du coût d'acquisition client</p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 400 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-4xl font-bold mb-3">+45%</h3>
            <p class="text-gray-dark">d'augmentation moyenne du taux de conversion</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Section -->
    <section class="section bg-gray-light overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Notre approche du marketing digital</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Une méthodologie éprouvée en 4 étapes pour développer et mettre en œuvre des stratégies de marketing digital performantes.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="relative" v-motion-slide-visible-once="{ direction: 'up', delay: 100 }">
            <div class="bg-white p-8 rounded-lg shadow-elegant h-full pt-14">
              <div class="-top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <h3 class="text-xl font-bold mb-4">Analyse et stratégie</h3>
              <p class="text-gray-dark mb-4">
                Nous analysons votre marché, votre concurrence et vos objectifs pour élaborer une stratégie marketing digitale sur mesure.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Audit de l'existant</span>
                </li>
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Analyse concurrentielle</span>
                </li>
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Définition des objectifs</span>
                </li>
              </ul>
            </div>
            <div class="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rotate-45 border-t-2 border-r-2 border-primary"></div>
          </div>
          
          <div class="relative" v-motion-slide-visible-once="{ direction: 'up', delay: 200 }">
            <div class="bg-white p-8 rounded-lg shadow-elegant h-full pt-14">
              <div class="-top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <h3 class="text-xl font-bold mb-4">Mise en œuvre</h3>
              <p class="text-gray-dark mb-4">
                Nous déployons les actions définies dans la stratégie en utilisant les meilleurs outils et techniques du marché.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Configuration des outils</span>
                </li>
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Création des campagnes</span>
                </li>
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Optimisation du site</span>
                </li>
              </ul>
            </div>
            <div class="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rotate-45 border-t-2 border-r-2 border-primary"></div>
          </div>
          
          <div class="relative" v-motion-slide-visible-once="{ direction: 'up', delay: 300 }">
            <div class="bg-white p-8 rounded-lg shadow-elegant h-full pt-14">
              <div class="-top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <h3 class="text-xl font-bold mb-4">Suivi et analyse</h3>
              <p class="text-gray-dark mb-4">
                Nous suivons en continu les performances de vos actions marketing et analysons les résultats pour identifier les axes d'amélioration.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Monitoring des KPIs</span>
                </li>
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Rapports détaillés</span>
                </li>
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Analyse des performances</span>
                </li>
              </ul>
            </div>
            <div class="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rotate-45 border-t-2 border-r-2 border-primary"></div>
          </div>
          
          <div class="relative" v-motion-slide-visible-once="{ direction: 'up', delay: 400 }">
            <div class="bg-white p-8 rounded-lg shadow-elegant h-full pt-14">
              <div class="-top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">4</div>
              <h3 class="text-xl font-bold mb-4">Optimisation continue</h3>
              <p class="text-gray-dark mb-4">
                Nous optimisons en permanence vos actions marketing pour améliorer les performances et maximiser votre retour sur investissement.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Ajustements stratégiques</span>
                </li>
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Tests A/B</span>
                </li>
                <li class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Amélioration continue</span>
                </li>
              </ul>
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
            Découvrez les témoignages de nos clients qui ont transformé leur présence en ligne grâce à nos solutions de marketing digital.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sophie Martin"
            position="Directrice"
            company="Eco Solutions"
            quote="Grâce aux campagnes SEA mises en place par REFERENCE JEUNE, nous avons multiplié par 3 le nombre de demandes de devis en seulement 2 mois."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 100 }"
          />
          
          <TestimonialCard
            name="Thomas Dubois"
            position="Fondateur"
            company="InnoTech"
            quote="L'optimisation SEO réalisée par l'équipe a considérablement amélioré notre visibilité sur Google. Nous sommes maintenant en première page pour nos mots-clés stratégiques."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 200 }"
          />
          
          <TestimonialCard
            name="Marie Leroy"
            position="Responsable Marketing"
            company="Artisan Gourmet"
            quote="La stratégie de contenu mise en place a non seulement amélioré notre référencement, mais a également renforcé notre image d'expert dans notre domaine."
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
            Vous avez des questions sur nos services de marketing digital ? Consultez nos réponses aux questions les plus fréquentes.
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
    
    <!-- CTA Section with Gradient Background -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-90"></div>
      <div class="container relative z-10">
        <div class="max-w-4xl mx-auto bg-white rounded-lg shadow-elegant overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-8 md:p-12">
              <h2 class="text-2xl md:text-3xl font-bold mb-6">Prêt à booster votre visibilité en ligne ?</h2>
              <p class="text-gray-dark mb-6">
                Contactez-nous dès aujourd'hui pour discuter de vos besoins en marketing digital et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
              </p>
              <ul class="space-y-4 mb-8">
                <li class="flex items-start">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Stratégie personnalisée</span>
                </li>
                <li class="flex items-start">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Expertise reconnue</span>
                </li>
                <li class="flex items-start">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Résultats garantis</span>
                </li>
              </ul>
              <NuxtLink to="/contact" class="btn-primary">
                Demander un devis gratuit
              </NuxtLink>
            </div>
            <div class="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Marketing digital pour PME" 
                class="w-full h-full object-cover"
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Marketing Digital',
  meta: [
    { 
      name: 'description', 
      content: 'Boostez votre visibilité en ligne avec nos services de marketing digital : SEA (campagnes publicitaires) et SEO (référencement naturel). Solutions sur mesure pour PME avec résultats mesurables.'
    },
    {
      name: 'keywords',
      content: 'marketing digital, SEA, SEO, Google Ads, référencement naturel, campagnes publicitaires, visibilité en ligne, PME, leads qualifiés, contenu SEO'
    }
  ]
})

definePageMeta({
  layout: 'default'
})

const activeTab = ref('sea')

const faqs = ref([
  {
    question: "Quelle est la différence entre SEA et SEO ?",
    answer: "Le SEA (Search Engine Advertising) correspond aux campagnes publicitaires payantes sur les moteurs de recherche, qui permettent d'obtenir des résultats immédiats mais nécessitent un budget publicitaire. Le SEO (Search Engine Optimization) est l'optimisation de votre site pour améliorer son positionnement naturel dans les résultats de recherche, avec des résultats plus durables mais qui prennent plus de temps à se manifester. Ces deux approches sont complémentaires et peuvent être utilisées conjointement pour maximiser votre visibilité en ligne.",
    isOpen: false
  },
  {
    question: "Combien de temps faut-il pour voir les résultats d'une stratégie SEO ?",
    answer: "Les premiers résultats d'une stratégie SEO peuvent être visibles après 3 à 6 mois, selon la concurrence de votre secteur et l'état initial de votre site. Les optimisations techniques peuvent avoir un impact plus rapide, tandis que les stratégies de contenu et de netlinking produisent des effets à plus long terme. Le SEO est un investissement sur la durée qui génère des résultats durables et un retour sur investissement croissant avec le temps.",
    isOpen: false
  },
  {
    question: "Comment mesurez-vous l'efficacité de vos campagnes marketing ?",
    answer: "Nous définissons des KPIs (indicateurs clés de performance) spécifiques à vos objectifs : trafic qualifié, taux de conversion, coût d'acquisition, engagement, etc. Nous mettons en place des outils d'analyse comme Google Analytics et des tableaux de bord personnalisés pour suivre ces métriques. Vous recevez des rapports réguliers détaillant les performances et les résultats obtenus, avec des recommandations d'optimisation.",
    isOpen: false
  },
  {
    question: "Quel budget faut-il prévoir pour une campagne SEA efficace ?",
    answer: "Le budget nécessaire pour une campagne SEA efficace dépend de plusieurs facteurs : votre secteur d'activité, la concurrence sur les mots-clés ciblés, vos objectifs commerciaux et votre zone géographique. Pour une PME, un budget mensuel minimum de 500€ à 1000€ est généralement recommandé pour obtenir des résultats significatifs. Nous adaptons toujours notre approche à votre budget et cherchons à maximiser votre retour sur investissement.",
    isOpen: false
  },
  {
    question: "Pourquoi est-il important de créer régulièrement du contenu pour le SEO ?",
    answer: "La création régulière de contenu de qualité est essentielle pour le SEO pour plusieurs raisons : elle permet d'enrichir votre site avec des mots-clés pertinents, de répondre aux questions de vos prospects, d'établir votre expertise dans votre domaine, et d'inciter les autres sites à créer des liens vers le vôtre. Les moteurs de recherche favorisent les sites qui publient régulièrement du contenu frais et pertinent. Notre service de création de contenu SEO vous permet de bénéficier de ces avantages sans avoir à y consacrer du temps en interne.",
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>