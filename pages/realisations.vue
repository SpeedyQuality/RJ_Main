<template>
  <div>
    <HeroSection
      title="Nos réalisations"
      subtitle="Découvrez les projets que nous avons réalisés pour nos clients et les résultats obtenus."
      primaryButtonText="Demander un devis"
      primaryButtonLink="/contact"
    />
    
    <!-- Projects Filter -->
    <section class="py-12 bg-gray-light">
      <div class="container">
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <button 
            @click="selectedCategory = 'all'" 
            class="px-6 py-2 rounded-full transition-colors duration-300"
            :class="selectedCategory === 'all' ? 'bg-primary text-white' : 'bg-white text-gray-dark hover:bg-primary/10'"
          >
            Tous
          </button>
          <button 
            v-for="category in categories" 
            :key="category.value"
            @click="selectedCategory = category.value" 
            class="px-6 py-2 rounded-full transition-colors duration-300"
            :class="selectedCategory === category.value ? 'bg-primary text-white' : 'bg-white text-gray-dark hover:bg-primary/10'"
          >
            {{ category.label }}
          </button>
        </div>
      </div>
    </section>
    
    <!-- Projects Grid -->
    <section class="section">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :title="project.title"
            :description="project.description"
            :client="project.client"
            :imageSrc="project.imageSrc"
            :tags="project.tags"
            :link="`/realisations/${project.id}`"
          />
        </div>
        
        <div v-if="filteredProjects.length === 0" class="text-center py-16">
          <p class="text-xl text-gray-dark">Aucun projet ne correspond à cette catégorie pour le moment.</p>
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
            name="Sophie Martin"
            position="Directrice"
            company="Eco Solutions"
            quote="REFERENCE JEUNE a complètement transformé notre présence en ligne. Notre site web génère maintenant 3 fois plus de leads qualifiés qu'avant."
            :rating="5"
          />
          
          <TestimonialCard
            name="Thomas Dubois"
            position="Fondateur"
            company="InnoTech"
            quote="L'équipe de REFERENCE JEUNE a su comprendre nos besoins spécifiques et nous proposer une stratégie digitale parfaitement adaptée à notre secteur d'activité."
            :rating="5"
          />
          
          <TestimonialCard
            name="Marie Leroy"
            position="Responsable Marketing"
            company="Artisan Gourmet"
            quote="Grâce à la stratégie de marketing digital mise en place, nous avons augmenté notre chiffre d'affaires de 40% en seulement 6 mois."
            :rating="4"
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
useHead({
  title: 'Réalisations',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez les projets réalisés par REFERENCE JEUNE pour ses clients. Sites web, applications, stratégies digitales et marketing pour PME.'
    }
  ]
})

definePageMeta({
  layout: 'default'
})

const selectedCategory = ref('all')

const categories = [
  { label: 'Sites web', value: 'site-web' },
  { label: 'E-commerce', value: 'e-commerce' },
  { label: 'Applications', value: 'application' },
  { label: 'Marketing', value: 'marketing' }
]

const projects = [
  {
    id: 'eco-solutions',
    title: 'Refonte du site web et stratégie SEO',
    description: 'Refonte complète du site web avec une approche centrée sur l\'utilisateur et mise en place d\'une stratégie SEO performante.',
    client: 'Eco Solutions',
    imageSrc: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    tags: ['site-web', 'seo', 'ux-design'],
    category: 'site-web'
  },
  {
    id: 'artisan-gourmet',
    title: 'Plateforme e-commerce et stratégie marketing',
    description: 'Création d\'une plateforme e-commerce sur mesure et mise en place d\'une stratégie marketing digitale complète.',
    client: 'Artisan Gourmet',
    imageSrc: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    tags: ['e-commerce', 'marketing', 'seo'],
    category: 'e-commerce'
  },
  {
    id: 'innotech',
    title: 'Application web de gestion de projets',
    description: 'Développement d\'une application web sur mesure pour la gestion de projets et le suivi des performances.',
    client: 'InnoTech',
    imageSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    tags: ['application', 'développement', 'ui-design'],
    category: 'application'
  },
  {
    id: 'urban-style',
    title: 'Boutique en ligne et stratégie social media',
    description: 'Création d\'une boutique en ligne et mise en place d\'une stratégie de marketing sur les réseaux sociaux.',
    client: 'Urban Style',
    imageSrc: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    tags: ['e-commerce', 'social-media', 'marketing'],
    category: 'e-commerce'
  },
  {
    id: 'tech-consulting',
    title: 'Site web corporate et stratégie de contenu',
    description: 'Création d\'un site web corporate moderne et élaboration d\'une stratégie de contenu pour renforcer l\'expertise de l\'entreprise.',
    client: 'Tech Consulting',
    imageSrc: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    tags: ['site-web', 'content-marketing', 'seo'],
    category: 'site-web'
  },
  {
    id: 'green-energy',
    title: 'Campagne marketing digital',
    description: 'Conception et mise en œuvre d\'une campagne de marketing digital complète pour le lancement d\'un nouveau produit.',
    client: 'Green Energy',
    imageSrc: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    tags: ['marketing', 'sea', 'social-media'],
    category: 'marketing'
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory === 'all') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory)
})
</script>