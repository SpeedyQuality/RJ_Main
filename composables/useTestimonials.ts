import { ref } from 'vue'

export const useTestimonials = () => {
  const testimonials = ref([
    {
      name: "Sophie M.",
      company: "Boulangerie Franchisée",
      quote: "Nous avons transformé notre présence en ligne. Notre stratégie digitale reflète maintenant nos objectifs et génère 3 fois plus de leads qualifiés qu'avant.",
      rating: 5
    },
    {
      name: "Thomas D.",
      company: "Garage automobile",
      quote: "L'équipe de REFERENCE JEUNE a su comprendre nos besoins spécifiques et nous proposer une stratégie digitale parfaitement adaptée à notre secteur d'activité.",
      rating: 5
    },
    {
      name: "Benoit R.",
      company: "Agence de DJing",
      quote: "J'ai gagné pas mal de nouveau client qui ne m'aurait pas connu autrement, je suis satisfait.",
      rating: 5
    }
  ])

  // Fonction pour obtenir des témoignages filtrés par service
  const getTestimonialsByService = (service: string) => {
    switch(service) {
      case 'marketing':
        return testimonials.value.map(t => ({
          ...t,
          quote: t.quote.replace('stratégie digitale', 'stratégie marketing')
        }))
      case 'support':
        return testimonials.value.map(t => ({
          ...t,
          quote: "Le support technique de REFERENCE JEUNE est exceptionnel. Réactivité et professionnalisme au rendez-vous."
        }))
      case 'formation':
        return testimonials.value.map(t => ({
          ...t,
          quote: "La formation était exactement ce dont nous avions besoin. Nous avons pu mettre en pratique les conseils dès le lendemain."
        }))
      default:
        return testimonials.value
    }
  }

  return {
    testimonials,
    getTestimonialsByService
  }
}