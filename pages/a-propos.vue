<template>
  <div>
    <HeroSection
      title="À propos de REFERENCE JEUNE"
      subtitle="Votre partenaire de confiance pour l'accompagnement digital des PME."
      primaryButtonText="Nos services"
      primaryButtonLink="/services"
      secondaryButtonText="Nous contacter"
      secondaryButtonLink="/contact"
    />
    
    <!-- Mission Section -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Notre mission</h2>
            <p class="text-gray-dark mb-6">
              Chez REFERENCE JEUNE, notre mission est d'accompagner les PME dans leur transformation digitale en leur fournissant des solutions sur mesure, innovantes et performantes. Nous croyons fermement que chaque entreprise, quelle que soit sa taille, mérite d'avoir accès aux meilleurs outils et stratégies digitales pour se développer et prospérer dans un monde de plus en plus connecté.
            </p>
            <p class="text-gray-dark mb-6">
              Notre approche combine expertise technique, compréhension des enjeux business et créativité pour concevoir des solutions qui répondent parfaitement aux besoins spécifiques de chaque client. Nous ne nous contentons pas de livrer un produit ou un service, nous construisons des partenariats durables basés sur la confiance, la transparence et l'excellence.
            </p>
            <div class="grid grid-cols-2 gap-6 mt-8">
              <div class="text-center">
                <p class="text-4xl font-bold text-primary mb-2">+200</p>
                <p class="text-gray-dark">Projets réalisés</p>
              </div>
              <div class="text-center">
                <p class="text-4xl font-bold text-primary mb-2">+150</p>
                <p class="text-gray-dark">Clients satisfaits</p>
              </div>
              <div class="text-center">
                <p class="text-4xl font-bold text-primary mb-2">+15</p>
                <p class="text-gray-dark">Experts passionnés</p>
              </div>
              <div class="text-center">
                <p class="text-4xl font-bold text-primary mb-2">5</p>
                <p class="text-gray-dark">Années d'expérience</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="L'équipe REFERENCE JEUNE" class="rounded-lg shadow-elegant">
          </div>
        </div>
      </div>
    </section>
    
    <!-- Values Section -->
    <section class="section bg-gray-light">
      <div class="container">
        <SectionTitle
          title="Nos valeurs"
          subtitle="Les principes qui guident nos actions et nos décisions au quotidien."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Excellence</h3>
            <p class="text-gray-dark">Nous visons l'excellence dans chaque aspect de notre travail, en nous efforçant constamment de dépasser les attentes de nos clients.</p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Innovation</h3>
            <p class="text-gray-dark">Nous embrassons l'innovation et la créativité pour développer des solutions qui se démarquent et apportent une réelle valeur ajoutée.</p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Collaboration</h3>
            <p class="text-gray-dark">Nous croyons en la puissance de la collaboration, tant au sein de notre équipe qu'avec nos clients, pour créer des solutions optimales.</p>
          </div>
          
          <div class="bg-white p-8 rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300">
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Intégrité</h3>
            <p class="text-gray-dark">Nous agissons avec honnêteté, transparence et éthique dans toutes nos interactions, en plaçant toujours l'intérêt du client au premier plan.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Team Section -->
    <section class="section">
      <div class="container">
        <SectionTitle
          title="Notre équipe"
          subtitle="Des experts passionnés et talentueux dédiés à votre réussite."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-elegant overflow-hidden group">
            <div class="relative overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Thomas Durand" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-1">Thomas Durand</h3>
              <p class="text-gray-dark mb-4">Fondateur & CEO</p>
              <p class="text-gray-dark mb-4">
                Avec plus de 15 ans d'expérience dans le digital, Thomas a fondé REFERENCE JEUNE avec la vision de démocratiser l'accès aux solutions digitales pour les PME.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-primary hover:text-accent transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" class="text-primary hover:text-accent transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-elegant overflow-hidden group">
            <div class="relative overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80" alt="Sophie Martin" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-1">Sophie Martin</h3>
              <p class="text-gray-dark mb-4">Directrice Marketing</p>
              <p class="text-gray-dark mb-4">
                Spécialiste du marketing digital, Sophie élabore des stratégies innovantes qui permettent à nos clients de se démarquer et d'atteindre leurs objectifs commerciaux.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-primary hover:text-accent transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" class="text-primary hover:text-accent transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-elegant overflow-hidden group">
            <div class="relative overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Alexandre Dubois" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105">
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-1">Alexandre Dubois</h3>
              <p class="text-gray-dark mb-4">Directeur Technique</p>
              <p class="text-gray-dark mb-4">
                Expert en développement web et applications, Alexandre supervise tous les aspects techniques de nos projets pour garantir des solutions performantes et évolutives.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-primary hover:text-accent transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" class="text-primary hover:text-accent transition-colors duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/contact" class="btn-primary">
            Rejoindre notre équipe
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- Partners Section -->
    <section class="section bg-gray-light">
      <div class="container">
        <SectionTitle
          title="Nos partenaires"
          subtitle="Nous collaborons avec les meilleurs pour vous offrir des solutions de qualité."
        />
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div class="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm">
            <div class="h-12 text-center text-gray-dark font-bold">PARTENAIRE 1</div>
          </div>
          <div class="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm">
            <div class="h-12 text-center text-gray-dark font-bold">PARTENAIRE 2</div>
          </div>
          <div class="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm">
            <div class="h-12 text-center text-gray-dark font-bold">PARTENAIRE 3</div>
          </div>
          <div class="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm">
            <div class="h-12 text-center text-gray-dark font-bold">PARTENAIRE 4</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Prêt à transformer votre entreprise ?</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs.</p>
        <NuxtLink to="/contact" class="btn bg-white text-primary hover:bg-gray-light">
          Demander un devis gratuit
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'À propos',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez REFERENCE JEUNE, votre partenaire de confiance pour l\'accompagnement digital des PME. Notre équipe d\'experts vous aide à réussir votre transformation digitale.'
    }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>