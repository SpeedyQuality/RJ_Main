<template>
  <div>
    <HeroSection
      title="Notre Blog"
      subtitle="Découvrez nos articles, conseils et actualités sur la transformation digitale des entreprises."
      primaryButtonText="Tous nos articles"
      primaryButtonLink="#articles"
    />
    
    <section id="articles" class="section">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="post in blogPosts" :key="post.slug" class="bg-white rounded-lg shadow-elegant overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-hover">
            <div class="relative aspect-video">
              <img :src="post.image" :alt="post.title" class="w-full h-full object-cover">
              <div class="absolute top-4 left-4">
                <span class="bg-primary text-white px-4 py-1 rounded-full text-sm">{{ post.category }}</span>
              </div>
            </div>
            <div class="p-6">
              <div class="flex items-center mb-4 text-sm text-gray-dark">
                <span>{{ post.date }}</span>
                <span class="mx-2">•</span>
                <span>{{ post.readTime }} min de lecture</span>
              </div>
              <h2 class="text-xl font-bold mb-3 line-clamp-2">{{ post.title }}</h2>
              <p class="text-gray-dark mb-4 line-clamp-3">{{ post.excerpt }}</p>
              <NuxtLink :to="`/blog/${post.slug}`" class="inline-flex items-center text-primary font-semibold hover:text-accent transition-colors duration-300">
                Lire l'article
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
    
    <!-- Newsletter Section -->
    <section class="section bg-gray-light">
      <div class="container">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-3xl font-bold mb-4">Restez informé</h2>
          <p class="text-gray-dark mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos derniers articles et conseils sur la transformation digitale.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              v-model="email" 
              placeholder="Votre adresse email" 
              class="flex-grow px-4 py-3 rounded-lg border border-gray-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
              required
            >
            <button type="submit" class="btn-primary whitespace-nowrap">
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const email = ref('')

const blogPosts = [
  {
    slug: 'importance-strategie-digitale',
    title: 'L\'importance d\'une stratégie digitale pour les PME en 2025',
    excerpt: 'Découvrez pourquoi une stratégie digitale solide est devenue indispensable pour les PME et comment la mettre en place efficacement.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    category: 'Stratégie',
    date: '15 avril 2025',
    readTime: 5
  },
  {
    slug: 'tendances-marketing-digital',
    title: 'Les tendances du marketing digital à suivre en 2025',
    excerpt: 'Analyse des principales tendances qui façonnent le marketing digital cette année et comment les intégrer dans votre stratégie.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    category: 'Marketing',
    date: '10 avril 2025',
    readTime: 4
  },
  {
    slug: 'optimisation-conversion',
    title: 'Comment optimiser votre taux de conversion en 5 étapes',
    excerpt: 'Guide pratique pour améliorer le taux de conversion de votre site web et transformer plus de visiteurs en clients.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    category: 'Conversion',
    date: '5 avril 2025',
    readTime: 6
  }
]

const subscribeNewsletter = () => {
  // TODO: Implémenter l'inscription à la newsletter
  console.log('Email inscrit:', email.value)
  email.value = ''
  alert('Merci pour votre inscription !')
}

useHead({
  title: 'Blog',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez nos articles, conseils et actualités sur la transformation digitale des entreprises. Restez informé des dernières tendances du digital.'
    }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>