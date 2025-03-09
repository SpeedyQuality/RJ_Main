<template>
  <div>
    <HeroSection
      title="Support Technique"
      subtitle="Une assistance technique experte et réactive pour assurer le bon fonctionnement de vos outils digitaux."
      primaryButtonText="Nous contacter"
      primaryButtonLink="/contact"
      secondaryButtonText="Découvrir nos services"
      secondaryButtonLink="#services"
    />
    
    <!-- Introduction Section -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-motion-slide-visible-once="{ direction: 'left' }">
            <h2 class="text-3xl font-bold mb-6">Un support technique dédié à votre réussite</h2>
            <p class="text-gray-dark mb-6">
              Dans un monde où la technologie est au cœur de votre activité, disposer d'un support technique fiable et réactif est essentiel. Notre équipe d'experts est à vos côtés pour résoudre rapidement vos problèmes techniques et assurer la continuité de vos opérations.
            </p>
            <p class="text-gray-dark mb-6">
              Que ce soit pour la maintenance préventive, la résolution d'incidents ou l'optimisation de vos outils, nous vous garantissons un accompagnement personnalisé et professionnel.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mt-8">
              <NuxtLink to="/contact" class="btn-primary">
                Demander un devis
              </NuxtLink>
              <NuxtLink to="#services" class="btn-outline">
                Nos services
              </NuxtLink>
            </div>
          </div>
          
          <div class="relative" v-motion-slide-visible-once="{ direction: 'right' }">
            <div class="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Support technique professionnel" 
                class="w-full h-full object-cover"
              >
            </div>
            <div class="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-elegant max-w-xs hidden md:block">
              <p class="text-lg font-bold mb-2">98%</p>
              <p class="text-gray-dark">de taux de satisfaction client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <section id="services" class="section bg-gray-light overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos services de support</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Une gamme complète de services pour assurer le bon fonctionnement de vos outils digitaux.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Maintenance Préventive -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 100 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Maintenance Préventive</h3>
            <p class="text-gray-dark mb-6">
              Surveillance proactive et maintenance régulière de vos systèmes pour prévenir les incidents.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Mises à jour régulières</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Sauvegardes automatiques</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Monitoring 24/7</span>
              </li>
            </ul>
          </div>
          
          <!-- Support Technique -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 200 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Assistance Technique</h3>
            <p class="text-gray-dark mb-6">
              Support réactif pour résoudre rapidement vos problèmes techniques et questions quotidiennes.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Support par email et téléphone</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Temps de réponse garanti</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Suivi des tickets</span>
              </li>
            </ul>
          </div>
          
          <!-- Gestion des Incidents -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 300 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Gestion des Incidents</h3>
            <p class="text-gray-dark mb-6">
              Résolution rapide des problèmes techniques pour minimiser les interruptions de service.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Intervention rapide</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Analyse des causes</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Solutions préventives</span>
              </li>
            </ul>
          </div>
          
          <!-- Formation Utilisateurs -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 400 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Formation Utilisateurs</h3>
            <p class="text-gray-dark mb-6">
              Formation de vos équipes pour une utilisation optimale des outils digitaux.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Sessions personnalisées</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Documentation détaillée</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Support continu</span>
              </li>
            </ul>
          </div>
          
          <!-- Optimisation Performance -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 500 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Optimisation Performance</h3>
            <p class="text-gray-dark mb-6">
              Amélioration continue des performances de vos outils digitaux.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Analyse des performances</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Optimisation code</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Recommandations</span>
              </li>
            </ul>
          </div>
          
          <!-- Sécurité -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 600 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Sécurité</h3>
            <p class="text-gray-dark mb-6">
              Protection de vos outils digitaux contre les menaces de sécurité.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Audit sécurité</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Mises à jour sécurité</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Protection données</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Plans Section -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos formules de support</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Des solutions adaptées à vos besoins et à votre budget.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Basic Plan -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 100 }">
            <h3 class="text-2xl font-bold mb-4">Essentiel</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold">299€</span>
              <span class="text-gray-dark">/mois</span>
            </div>
            <p class="text-gray-dark mb-6">
              Support technique de base pour les petites entreprises.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Support par email</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Temps de réponse < 24h</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Maintenance mensuelle</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-outline w-full text-center">
              Choisir ce plan
            </NuxtLink>
          </div>
          
          <!-- Pro Plan -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover border-2 border-primary" v-motion-slide-visible-once="{ direction: 'up', delay: 200 }">
            <div class="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
              Populaire
            </div>
            <h3 class="text-2xl font-bold mb-4">Business</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold">599€</span>
              <span class="text-gray-dark">/mois</span>
            </div>
            <p class="text-gray-dark mb-6">
              Support complet pour les entreprises en croissance.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Support prioritaire 24/7</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Temps de réponse < 4h</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Maintenance hebdomadaire</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Formation mensuelle</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-primary w-full text-center">
              Choisir ce plan
            </NuxtLink>
          </div>
          
          <!-- Enterprise Plan -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 300 }">
            <h3 class="text-2xl font-bold mb-4">Enterprise</h3>
            <div class="mb-6">
              <span class="text-4xl font-bold">Sur mesure</span>
            </div>
            <p class="text-gray-dark mb-6">
              Solution personnalisée pour les grandes entreprises.
            </p>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Support VIP dédié</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Temps de réponse immédiat</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Maintenance quotidienne</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Formation illimitée</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-outline w-full text-center">
              Nous contacter
            </NuxtLink>
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
            Découvrez les témoignages de clients qui font confiance à notre support technique.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sophie Martin"
            position="Directrice"
            company="Eco Solutions"
            quote="Le support technique de REFERENCE JEUNE est exceptionnel. Nos problèmes sont toujours résolus rapidement et efficacement."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 100 }"
          />
          
          <TestimonialCard
            name="Thomas Dubois"
            position="Responsable IT"
            company="InnoTech"
            quote="La réactivité et le professionnalisme de l'équipe support nous permettent de maintenir nos services en ligne 24/7."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 200 }"
          />
          
          <TestimonialCard
            name="Marie Leroy"
            position="CEO"
            company="Fashion Store"
            quote="Grâce à leur support proactif, nous n'avons plus de temps d'arrêt sur notre site e-commerce. Un vrai partenaire de confiance."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 300 }"
          />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Besoin d'assistance technique ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Contactez-nous pour découvrir comment notre support technique peut vous aider à maintenir et optimiser vos outils digitaux.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn bg-white text-primary hover:bg-gray-light">
            Nous contacter
          </NuxtLink>
          <NuxtLink to="#services" class="btn border-2 border-white text-white hover:bg-white/10">
            Découvrir nos services
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Support Technique',
  meta: [
    { 
      name: 'description', 
      content: 'Support technique professionnel pour vos outils digitaux. Maintenance préventive, assistance technique, gestion des incidents et optimisation des performances.'
    },
    {
      name: 'keywords',
      content: 'support technique, maintenance, assistance technique, gestion incidents, formation utilisateurs, optimisation performance, sécurité'
    }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>