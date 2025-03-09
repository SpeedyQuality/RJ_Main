<template>
  <div>
    <HeroSection
      title="Formation Digitale"
      subtitle="Maîtrisez les outils et stratégies digitales pour développer votre entreprise. Des formations pratiques et sur mesure pour vous et vos équipes."
      primaryButtonText="Demander un devis"
      primaryButtonLink="/contact"
      secondaryButtonText="Découvrir nos formations"
      secondaryButtonLink="#formations"
    />
    
    <!-- Introduction Section -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-motion-slide-visible-once="{ direction: 'left' }">
            <h2 class="text-3xl font-bold mb-6">Des formations pratiques pour votre réussite digitale</h2>
            <p class="text-gray-dark mb-6">
              Dans un monde digital en constante évolution, la formation continue est essentielle pour rester compétitif. Nos experts vous accompagnent avec des formations pratiques et personnalisées, conçues pour répondre à vos besoins spécifiques.
            </p>
            <p class="text-gray-dark mb-6">
              Que vous souhaitiez améliorer votre visibilité en ligne, optimiser vos campagnes publicitaires ou développer une stratégie digitale cohérente, nos formations vous donnent les clés pour réussir.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mt-8">
              <NuxtLink to="/contact" class="btn-primary">
                Demander un devis
              </NuxtLink>
              <NuxtLink to="#formations" class="btn-outline">
                Voir nos formations
              </NuxtLink>
            </div>
          </div>
          
          <div class="relative" v-motion-slide-visible-once="{ direction: 'right' }">
            <div class="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Formation digitale pour entreprises" 
                class="w-full h-full object-cover"
              >
            </div>
            <div class="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-elegant max-w-xs hidden md:block">
              <p class="text-lg font-bold mb-2">+500</p>
              <p class="text-gray-dark">professionnels formés avec succès</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Formations Section -->
    <section id="formations" class="section bg-gray-light overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos formations</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Des formations pratiques et concrètes pour maîtriser les aspects essentiels du digital.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- SEO Formation -->
          <div class="bg-white rounded-lg shadow-elegant overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 100 }">
            <div class="relative overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Formation SEO" 
                class="w-full h-full object-cover"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div class="p-6">
                  <h3 class="text-white text-2xl font-bold">Comment alimenter son site en SEO</h3>
                </div>
              </div>
            </div>
            <div class="p-6">
              <div class="mb-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-dark">Durée</p>
                    <p class="font-semibold">1 journée (7 heures)</p>
                  </div>
                </div>
                <p class="text-gray-dark">
                  Apprenez à créer un contenu optimisé pour les moteurs de recherche et à mettre en place une stratégie de contenu efficace pour améliorer votre visibilité naturelle.
                </p>
              </div>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Recherche de mots-clés stratégiques</span>
                </div>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Structure de contenu optimisée</span>
                </div>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Techniques de rédaction SEO</span>
                </div>
              </div>
              
              <NuxtLink to="/contact" class="btn-primary w-full text-center">
                S'inscrire à la formation
              </NuxtLink>
            </div>
          </div>
          
          <!-- Ads Formation -->
          <div class="bg-white rounded-lg shadow-elegant overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 200 }">
            <div class="relative overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Formation Google Ads" 
                class="w-full h-full object-cover"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div class="p-6">
                  <h3 class="text-white text-2xl font-bold">Comment monitorer intelligemment ses campagnes sponsorisées</h3>
                </div>
              </div>
            </div>
            <div class="p-6">
              <div class="mb-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-dark">Durée</p>
                    <p class="font-semibold">1 journée (7 heures)</p>
                  </div>
                </div>
                <p class="text-gray-dark">
                  Maîtrisez les outils d'analyse et apprenez à optimiser vos campagnes publicitaires pour maximiser votre retour sur investissement.
                </p>
              </div>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Configuration des KPIs</span>
                </div>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Analyse des performances</span>
                </div>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Optimisation des campagnes</span>
                </div>
              </div>
              
              <NuxtLink to="/contact" class="btn-primary w-full text-center">
                S'inscrire à la formation
              </NuxtLink>
            </div>
          </div>
          
          <!-- Digital Strategy Formation -->
          <div class="bg-white rounded-lg shadow-elegant overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 300 }">
            <div class="relative overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Formation Stratégie Digitale" 
                class="w-full h-full object-cover"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div class="p-6">
                  <h3 class="text-white text-2xl font-bold">Comment accorder sa stratégie avec l'ère du digital</h3>
                </div>
              </div>
            </div>
            <div class="p-6">
              <div class="mb-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-dark">Durée</p>
                    <p class="font-semibold">2 journées (14 heures)</p>
                  </div>
                </div>
                <p class="text-gray-dark">
                  Développez une stratégie digitale cohérente et efficace pour transformer votre entreprise et l'adapter aux enjeux du numérique.
                </p>
              </div>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Analyse de l'écosystème digital</span>
                </div>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Définition des objectifs</span>
                </div>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Plan d'action digital</span>
                </div>
              </div>
              
              <NuxtLink to="/contact" class="btn-primary w-full text-center">
                S'inscrire à la formation
              </NuxtLink>
            </div>
          </div>
          
          <!-- Online-Offline Integration Formation -->
          <div class="bg-white rounded-lg shadow-elegant overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 400 }">
            <div class="relative overflow-hidden aspect-video">
              <img 
                src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Formation Intégration Online-Offline" 
                class="w-full h-full object-cover"
              >
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div class="p-6">
                  <h3 class="text-white text-2xl font-bold">Comment connecter ses activités physiques et sa présence en ligne</h3>
                </div>
              </div>
            </div>
            <div class="p-6">
              <div class="mb-6">
                <div class="flex items-center mb-4">
                  <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-dark">Durée</p>
                    <p class="font-semibold">1 journée (7 heures)</p>
                  </div>
                </div>
                <p class="text-gray-dark">
                  Créez une expérience client unifiée en connectant intelligemment vos activités physiques et votre présence digitale.
                </p>
              </div>
              
              <div class="space-y-3 mb-6">
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Stratégie omnicanale</span>
                </div>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Outils de connexion</span>
                </div>
                <div class="flex items-center">
                  <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span class="text-primary text-xs">✓</span>
                  </div>
                  <span>Mesure des performances</span>
                </div>
              </div>
              
              <NuxtLink to="/contact" class="btn-primary w-full text-center">
                S'inscrire à la formation
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Benefits Section -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Pourquoi choisir nos formations ?</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Des formations conçues pour maximiser votre apprentissage et vous permettre d'appliquer immédiatement les connaissances acquises.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-elegant text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 100 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Expertise reconnue</h3>
            <p class="text-gray-dark">
              Des formateurs experts avec une solide expérience terrain dans leur domaine.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 200 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Approche pratique</h3>
            <p class="text-gray-dark">
              Des exercices concrets et des cas pratiques pour une application immédiate.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 300 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Petits groupes</h3>
            <p class="text-gray-dark">
              Des groupes limités pour un apprentissage personnalisé et interactif.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 400 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Suivi post-formation</h3>
            <p class="text-gray-dark">
              Un accompagnement personnalisé pour assurer la mise en pratique des acquis.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="section bg-gray-light overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Ce que nos clients disent</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Découvrez les témoignages de professionnels qui ont suivi nos formations.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sophie Martin"
            position="Responsable Marketing"
            company="Eco Solutions"
            quote="La formation SEO était exactement ce dont j'avais besoin. J'ai pu mettre en pratique les conseils dès le lendemain et les résultats sont déjà visibles."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 100 }"
          />
          
          <TestimonialCard
            name="Thomas Dubois"
            position="Directeur Commercial"
            company="InnoTech"
            quote="Une formation Google Ads très complète qui m'a permis de reprendre le contrôle de nos campagnes publicitaires et d'optimiser notre budget."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 200 }"
          />
          
          <TestimonialCard
            name="Marie Leroy"
            position="Gérante"
            company="Artisan Gourmet"
            quote="Grâce à la formation sur l'intégration online-offline, j'ai pu développer une vraie synergie entre ma boutique et ma présence en ligne."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 300 }"
          />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Prêt à développer vos compétences digitales ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Contactez-nous pour discuter de vos besoins en formation et découvrir nos programmes personnalisés.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn bg-white text-primary hover:bg-gray-light">
            Demander un devis
          </NuxtLink>
          <NuxtLink to="#formations" class="btn border-2 border-white text-white hover:bg-white/10">
            Voir nos formations
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Formation',
  meta: [
    { 
      name: 'description', 
      content: 'Formations professionnelles en marketing digital : SEO, Google Ads, stratégie digitale et intégration online-offline. Des formations pratiques pour développer vos compétences digitales.'
    },
    {
      name: 'keywords',
      content: 'formation digitale, formation SEO, formation Google Ads, formation marketing digital, stratégie digitale, présence en ligne, PME'
    }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>