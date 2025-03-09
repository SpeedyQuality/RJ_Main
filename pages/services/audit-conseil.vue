<template>
  <div>
    <HeroSection
      title="Audit & Conseil Digital"
      subtitle="Optimisez votre présence digitale grâce à nos services d'audit et de conseil personnalisés pour votre entreprise."
      primaryButtonText="Demander un audit"
      primaryButtonLink="/contact"
      secondaryButtonText="Découvrir nos services"
      secondaryButtonLink="#services"
    />
    
    <!-- Introduction Section -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div v-motion-slide-visible-once="{ direction: 'left' }">
            <h2 class="text-3xl font-bold mb-6">Un regard expert sur votre stratégie digitale</h2>
            <p class="text-gray-dark mb-6">
              Dans un environnement digital en constante évolution, il est crucial d'avoir une vision claire de vos performances et des opportunités d'amélioration. Notre équipe d'experts analyse en profondeur votre présence digitale pour identifier les leviers de croissance et optimiser votre stratégie.
            </p>
            <p class="text-gray-dark mb-6">
              Que vous souhaitiez améliorer votre visibilité, optimiser vos conversions ou renforcer votre image de marque en ligne, nos services d'audit et de conseil vous apportent des solutions concrètes et mesurables.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mt-8">
              <NuxtLink to="/contact" class="btn-primary">
                Demander un audit gratuit
              </NuxtLink>
              <NuxtLink to="#services" class="btn-outline">
                Nos services
              </NuxtLink>
            </div>
          </div>
          
          <div class="relative" v-motion-slide-visible-once="{ direction: 'right' }">
            <div class="aspect-[4/3] rounded-lg overflow-hidden shadow-elegant">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" 
                alt="Audit et conseil digital" 
                class="w-full h-full object-cover"
              >
            </div>
            <div class="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-elegant max-w-xs hidden md:block">
              <p class="text-lg font-bold mb-2">+150</p>
              <p class="text-gray-dark">audits réalisés avec succès</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Services Section -->
    <section id="services" class="section bg-gray-light overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Nos services d'audit et conseil</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Une approche complète pour analyser et optimiser tous les aspects de votre présence digitale.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Audit SEO -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 100 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Audit SEO</h3>
            <p class="text-gray-dark mb-6">
              Analyse approfondie de votre référencement naturel pour améliorer votre visibilité sur les moteurs de recherche.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Analyse technique du site</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Étude des mots-clés</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Analyse de la concurrence</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-outline w-full text-center">
              Demander un audit SEO
            </NuxtLink>
          </div>
          
          <!-- Audit UX -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 200 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Audit UX</h3>
            <p class="text-gray-dark mb-6">
              Évaluation de l'expérience utilisateur de votre site pour optimiser les conversions et la satisfaction client.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Parcours utilisateur</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Points de friction</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Optimisation conversion</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-outline w-full text-center">
              Demander un audit UX
            </NuxtLink>
          </div>
          
          <!-- Audit Performance -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 300 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Audit Performance</h3>
            <p class="text-gray-dark mb-6">
              Analyse des performances techniques de votre site pour améliorer la vitesse et l'expérience utilisateur.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Vitesse de chargement</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Optimisation mobile</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Core Web Vitals</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-outline w-full text-center">
              Demander un audit performance
            </NuxtLink>
          </div>
          
          <!-- Audit Marketing -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 400 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Audit Marketing Digital</h3>
            <p class="text-gray-dark mb-6">
              Évaluation de vos campagnes marketing pour optimiser votre retour sur investissement.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Analyse des campagnes</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>ROI par canal</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Recommandations</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-outline w-full text-center">
              Demander un audit marketing
            </NuxtLink>
          </div>
          
          <!-- Conseil Stratégique -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 500 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Conseil Stratégique</h3>
            <p class="text-gray-dark mb-6">
              Accompagnement personnalisé pour définir et mettre en œuvre votre stratégie digitale.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Vision stratégique</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Plan d'action</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Accompagnement</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-outline w-full text-center">
              Demander un conseil
            </NuxtLink>
          </div>
          
          <!-- Veille Concurrentielle -->
          <div class="bg-white rounded-lg shadow-elegant p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 600 }">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-4">Veille Concurrentielle</h3>
            <p class="text-gray-dark mb-6">
              Analyse approfondie de votre marché et de vos concurrents pour identifier les opportunités.
            </p>
            <ul class="space-y-3 mb-6">
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Analyse concurrentielle</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Opportunités marché</span>
              </li>
              <li class="flex items-center">
                <div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span class="text-primary text-xs">✓</span>
                </div>
                <span>Recommandations</span>
              </li>
            </ul>
            <NuxtLink to="/contact" class="btn-outline w-full text-center">
              Demander une analyse
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Process Section -->
    <section class="section overflow-hidden">
      <div class="container">
        <div class="text-center mb-16" v-motion-fade-visible-once>
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Notre méthodologie</h2>
          <p class="text-lg text-gray-dark max-w-3xl mx-auto">
            Une approche structurée en 4 étapes pour vous apporter des résultats concrets et mesurables.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-elegant transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 100 }">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">1</div>
            <h3 class="text-xl font-bold mb-4">Analyse</h3>
            <p class="text-gray-dark">
              Audit complet de votre présence digitale et identification des points d'amélioration.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 200 }">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">2</div>
            <h3 class="text-xl font-bold mb-4">Recommandations</h3>
            <p class="text-gray-dark">
              Élaboration d'un plan d'action détaillé avec des solutions concrètes.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 300 }">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">3</div>
            <h3 class="text-xl font-bold mb-4">Accompagnement</h3>
            <p class="text-gray-dark">
              Support dans la mise en œuvre des recommandations et suivi des actions.
            </p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover" v-motion-slide-visible-once="{ direction: 'up', delay: 400 }">
            <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-6">4</div>
            <h3 class="text-xl font-bold mb-4">Mesure</h3>
            <p class="text-gray-dark">
              Évaluation des résultats et ajustements pour optimiser les performances.
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
            Découvrez les témoignages de clients qui ont transformé leur présence digitale grâce à nos services d'audit et conseil.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sophie Martin"
            position="Directrice Marketing"
            company="Eco Solutions"
            quote="L'audit SEO réalisé par REFERENCE JEUNE nous a permis d'identifier rapidement les axes d'amélioration et de mettre en place une stratégie efficace."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 100 }"
          />
          
          <TestimonialCard
            name="Thomas Dubois"
            position="CEO"
            company="InnoTech"
            quote="Le conseil stratégique nous a aidés à structurer notre approche digitale et à obtenir des résultats concrets en quelques mois."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 200 }"
          />
          
          <TestimonialCard
            name="Marie Leroy"
            position="Directrice E-commerce"
            company="Fashion Store"
            quote="L'audit UX a transformé notre site e-commerce. Nos taux de conversion ont augmenté de 45% en seulement 3 mois."
            :rating="5"
            v-motion-slide-visible-once="{ direction: 'up', delay: 300 }"
          />
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Prêt à optimiser votre présence digitale ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">
          Contactez-nous pour bénéficier d'un audit gratuit et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/contact" class="btn bg-white text-primary hover:bg-gray-light">
            Demander un audit gratuit
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
  title: 'Audit & Conseil Digital',
  meta: [
    { 
      name: 'description', 
      content: 'Services d\'audit et conseil digital pour optimiser votre présence en ligne. Audit SEO, UX, performance et marketing digital. Accompagnement stratégique personnalisé.'
    },
    {
      name: 'keywords',
      content: 'audit digital, conseil digital, audit SEO, audit UX, audit performance, stratégie digitale, veille concurrentielle, optimisation web'
    }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>