<template>
  <div>
    <HeroSection
      title="Nos services"
      subtitle="Des solutions digitales complètes pour propulser votre entreprise vers le succès."
      primaryButtonText="Demander un devis"
      primaryButtonLink="/contact"
    />
    
    <section class="section">
      <div class="container">
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
            description="Programmes de formation personnalisés pour maîtriser les outils digitaux : SEO, Ads, stratégie digitale et intégration online-offline."
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
      </div>
    </section>
    
    <!-- Pricing Section -->
    <section class="section bg-gray-light">
      <div class="container">
        <SectionTitle
          title="Nos forfaits"
          subtitle="Des solutions adaptées à tous les budgets pour répondre à vos besoins spécifiques."
        />
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-elegant overflow-hidden transition-all duration-300 hover:shadow-hover">
            <div class="p-8">
              <h3 class="text-xl font-bold mb-2">Essentiel</h3>
              <p class="text-gray-dark mb-6">Idéal pour les petites entreprises qui débutent leur transformation digitale.</p>
              <div class="mb-6">
                <span class="text-4xl font-bold">999€</span>
                <span class="text-gray-dark">/mois</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Site web vitrine (5 pages)</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Optimisation SEO de base</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Gestion de 2 réseaux sociaux</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Support technique (heures ouvrables)</span>
                </li>
              </ul>
            </div>
            <div class="px-8 pb-8">
              <NuxtLink to="/contact" class="btn-outline w-full text-center">
                Demander un devis
              </NuxtLink>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-elegant overflow-hidden transition-all duration-300 hover:shadow-hover transform md:-translate-y-4 border-2 border-primary">
            <div class="bg-primary text-white py-2 text-center">
              <span class="text-sm font-medium">Recommandé</span>
            </div>
            <div class="p-8">
              <h3 class="text-xl font-bold mb-2">Business</h3>
              <p class="text-gray-dark mb-6">Solution complète pour les PME en pleine croissance.</p>
              <div class="mb-6">
                <span class="text-4xl font-bold">2499€</span>
                <span class="text-gray-dark">/mois</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Site web personnalisé (10 pages)</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Optimisation SEO avancée</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Gestion de 4 réseaux sociaux</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Campagnes publicitaires (budget inclus)</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Support technique prioritaire 24/7</span>
                </li>
              </ul>
            </div>
            <div class="px-8 pb-8">
              <NuxtLink to="/contact" class="btn-primary w-full text-center">
                Demander un devis
              </NuxtLink>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-elegant overflow-hidden transition-all duration-300 hover:shadow-hover">
            <div class="p-8">
              <h3 class="text-xl font-bold mb-2">Enterprise</h3>
              <p class="text-gray-dark mb-6">Solution sur mesure pour les grandes entreprises avec des besoins complexes.</p>
              <div class="mb-6">
                <span class="text-4xl font-bold">Sur mesure</span>
              </div>
              <ul class="space-y-3 mb-8">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Solutions digitales entièrement personnalisées</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Stratégie digitale complète</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Équipe dédiée</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Intégration avec vos systèmes existants</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Support VIP 24/7</span>
                </li>
              </ul>
            </div>
            <div class="px-8 pb-8">
              <NuxtLink to="/contact" class="btn-outline w-full text-center">
                Demander un devis
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="section">
      <div class="container">
        <SectionTitle
          title="Questions fréquentes"
          subtitle="Vous avez des questions ? Nous avons les réponses."
        />
        
        <div class="max-w-3xl mx-auto">
          <div v-for="(faq, index) in faqs" :key="index" class="mb-6">
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
  title: 'Services',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez les services digitaux proposés par REFERENCE JEUNE : stratégie digitale, développement web, marketing digital et formation pour PME.'
    }
  ]
})

definePageMeta({
  layout: 'default'
})

const faqs = ref([
  {
    question: "Combien de temps faut-il pour développer un site web ?",
    answer: "Le délai de développement d'un site web dépend de sa complexité. Un site vitrine simple peut être réalisé en 2 à 4 semaines, tandis qu'un site e-commerce ou une application web sur mesure peut nécessiter 2 à 4 mois. Nous établissons un calendrier précis lors de la phase de planification du projet.",
    isOpen: false
  },
  {
    question: "Comment mesurez-vous les résultats de vos services ?",
    answer: "Nous définissons des KPIs (indicateurs clés de performance) spécifiques à chaque projet et mettons en place des outils d'analyse pour suivre ces métriques. Nous fournissons des rapports réguliers détaillant les performances et les résultats obtenus, avec des recommandations d'optimisation.",
    isOpen: false
  },
  {
    question: "Proposez-vous des contrats de maintenance ?",
    answer: "Oui, nous proposons différentes formules de maintenance pour assurer le bon fonctionnement de votre site web ou application. Ces contrats incluent les mises à jour de sécurité, les sauvegardes régulières, les corrections de bugs et un support technique réactif.",
    isOpen: false
  },
  {
    question: "Puis-je modifier mon forfait en cours de contrat ?",
    answer: "Absolument. Nous comprenons que les besoins des entreprises évoluent. Vous pouvez ajuster votre forfait à tout moment, à la hausse comme à la baisse, avec un préavis d'un mois. Notre équipe vous accompagnera dans cette transition pour assurer une continuité de service optimale.",
    isOpen: false
  },
  {
    question: "Quelles technologies utilisez-vous pour le développement ?",
    answer: "Nous utilisons les technologies les plus adaptées à chaque projet. Pour le développement web, nous travaillons principalement avec des frameworks modernes comme Vue.js, React, Node.js, et des CMS comme WordPress. Nous privilégions toujours les solutions qui offrent les meilleures performances, sécurité et évolutivité.",
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>