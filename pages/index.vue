<template>
  <div>
    <HeroSection
      title="Transformez votre PME avec des solutions digitales sur mesure"
      subtitle="REFERENCE JEUNE accompagne les entreprises dans leur transformation digitale avec expertise, innovation et excellence."
      primaryButtonText="Découvrir nos services"
      primaryButtonLink="/services"
      secondaryButtonText="Nous contacter"
      secondaryButtonLink="/contact"
    />
    
    <!-- Services Section -->
    <section class="section bg-gray-light">
      <div class="container">
        <SectionTitle
          title="Nos services"
          subtitle="Des solutions digitales complètes pour propulser votre entreprise vers le succès."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="Stratégie digitale"
            description="Élaboration d'une stratégie digitale sur mesure pour atteindre vos objectifs commerciaux et maximiser votre présence en ligne."
            icon="🎯"
            link="/services/strategie-digitale"
          />
          
          <ServiceCard
            title="Développement web"
            description="Création de sites web et d'applications performants, sécurisés et optimisés pour convertir vos visiteurs en clients."
            icon="💻"
            link="/services/developpement-web"
          />
          
          <ServiceCard
            title="Marketing digital"
            description="Stratégies de marketing digital efficaces pour augmenter votre visibilité, générer des leads et fidéliser vos clients."
            icon="📈"
            link="/services/marketing-digital"
          />
          
          <ServiceCard
            title="Formation"
            description="Programmes de formation personnalisés pour permettre à votre équipe de maîtriser les outils et techniques digitaux."
            icon="🎓"
            link="/services/formation"
          />
          
          <ServiceCard
            title="Audit & conseil"
            description="Analyse approfondie de votre présence digitale et recommandations stratégiques pour optimiser vos performances."
            icon="🔍"
            link="/services/audit-conseil"
          />
          
          <ServiceCard
            title="Support technique"
            description="Assistance technique continue pour assurer le bon fonctionnement de vos outils digitaux et résoudre rapidement tout problème."
            icon="🛠️"
            link="/services/support-technique"
          />
        </div>
        
        <div class="text-center mt-12">
          <NuxtLink to="/services" class="btn-primary">
            Tous nos services
          </NuxtLink>
        </div>
      </div>
    </section>
    
    <!-- About Section -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Pourquoi choisir REFERENCE JEUNE ?</h2>
            
            <div class="space-y-6">
              <div class="flex">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                    <span class="text-xl font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Expertise</h3>
                  <p class="text-gray-dark">Notre équipe d'experts combine des compétences techniques pointues et une connaissance approfondie des enjeux business.</p>
                </div>
              </div>
              
              <div class="flex">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                    <span class="text-xl font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Sur mesure</h3>
                  <p class="text-gray-dark">Chaque solution est conçue spécifiquement pour répondre aux besoins uniques de votre entreprise.</p>
                </div>
              </div>
              
              <div class="flex">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                    <span class="text-xl font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Innovation</h3>
                  <p class="text-gray-dark">Nous restons à la pointe des dernières technologies et tendances pour vous offrir des solutions innovantes.</p>
                </div>
              </div>
              
              <div class="flex">
                <div class="mr-4 flex-shrink-0">
                  <div class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                    <span class="text-xl font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Résultats</h3>
                  <p class="text-gray-dark">Notre approche orientée résultats garantit un retour sur investissement mesurable et significatif.</p>
                </div>
              </div>
            </div>
            
            <div class="mt-8">
              <NuxtLink to="/a-propos" class="btn-outline">
                En savoir plus sur nous
              </NuxtLink>
            </div>
          </div>
          
          <div class="relative">
            <div class="aspect-[4/3] bg-gray-light rounded-lg overflow-hidden">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Équipe REFERENCE JEUNE" class="w-full h-full object-cover">
            </div>
            
            <div class="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-elegant max-w-xs">
              <p class="text-lg font-bold mb-2">+200</p>
              <p class="text-gray-dark">Projets réalisés avec succès pour des PME de tous secteurs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="section bg-gray-light">
      <div class="container">
        <SectionTitle
          title="Ce que nos clients disent"
          subtitle="Découvrez les témoignages de nos clients satisfaits qui ont transformé leur entreprise grâce à nos solutions digitales."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            v-for="testimonial in testimonials"
            :key="testimonial.name"
            :name="testimonial.name"
            :position="testimonial.position"
            :company="testimonial.company"
            :quote="testimonial.quote"
            :rating="testimonial.rating"
          />
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
const { testimonials } = useTestimonials()

useHead({
  title: 'Accueil',
  meta: [
    { 
      name: 'description', 
      content: 'REFERENCE JEUNE accompagne les PME dans leur transformation digitale avec des solutions sur mesure et innovantes. Découvrez nos services de stratégie digitale, développement web et marketing digital.'
    }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>