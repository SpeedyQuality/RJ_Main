<template>
  <form @submit.prevent="submitForm" class="bg-white p-8 rounded-lg shadow-elegant">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div>
        <label for="firstName" class="block text-sm font-medium text-gray-dark mb-2">Prénom</label>
        <input 
          type="text" 
          id="firstName" 
          v-model="form.firstName" 
          class="w-full px-4 py-2 border border-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          required
        >
      </div>
      
      <div>
        <label for="lastName" class="block text-sm font-medium text-gray-dark mb-2">Nom</label>
        <input 
          type="text" 
          id="lastName" 
          v-model="form.lastName" 
          class="w-full px-4 py-2 border border-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
          required
        >
      </div>
    </div>
    
    <div class="mb-6">
      <label for="email" class="block text-sm font-medium text-gray-dark mb-2">Email</label>
      <input 
        type="email" 
        id="email" 
        v-model="form.email" 
        class="w-full px-4 py-2 border border-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        required
      >
    </div>
    
    <div class="mb-6">
      <label for="company" class="block text-sm font-medium text-gray-dark mb-2">Entreprise</label>
      <input 
        type="text" 
        id="company" 
        v-model="form.company" 
        class="w-full px-4 py-2 border border-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
    </div>
    
    <div class="mb-6">
      <label for="service" class="block text-sm font-medium text-gray-dark mb-2">Service souhaité</label>
      <select 
        id="service" 
        v-model="form.service" 
        class="w-full px-4 py-2 border border-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <option value="">Sélectionnez un service</option>
        <option value="strategie-digitale">Stratégie digitale</option>
        <option value="developpement-web">Développement web</option>
        <option value="marketing-digital">Marketing digital</option>
        <option value="formation">Formation</option>
        <option value="autre">Autre</option>
      </select>
    </div>
    
    <div class="mb-6">
      <label for="message" class="block text-sm font-medium text-gray-dark mb-2">Message</label>
      <textarea 
        id="message" 
        v-model="form.message" 
        rows="5" 
        class="w-full px-4 py-2 border border-gray-medium rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
        required
      ></textarea>
    </div>
    
    <div class="mb-6">
      <label class="flex items-start">
        <input 
          type="checkbox" 
          v-model="form.consent" 
          class="mt-1 mr-2"
          required
        >
        <span class="text-sm text-gray-dark">
          J'accepte que mes données soient traitées conformément à la 
          <NuxtLink to="/politique-de-confidentialite" class="text-primary hover:underline">
            politique de confidentialité
          </NuxtLink>.
        </span>
      </label>
    </div>
    
    <div>
      <button 
        type="submit" 
        class="w-full btn-primary"
        :disabled="isSubmitting"
      >
        <span v-if="isSubmitting">Envoi en cours...</span>
        <span v-else>Envoyer</span>
      </button>
    </div>
    
    <div v-if="formStatus" class="mt-4 p-4 rounded-md" :class="formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'">
      {{ formStatus.message }}
    </div>
  </form>
</template>

<script setup>
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  service: '',
  message: '',
  consent: false
})

const isSubmitting = ref(false)
const formStatus = ref(null)

const submitForm = async () => {
  isSubmitting.value = true
  
  try {
    // Simulation d'envoi de formulaire
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Réinitialiser le formulaire
    form.value = {
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      service: '',
      message: '',
      consent: false
    }
    
    formStatus.value = {
      type: 'success',
      message: 'Votre message a été envoyé avec succès. Nous vous contacterons dans les plus brefs délais.'
    }
  } catch (error) {
    formStatus.value = {
      type: 'error',
      message: 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.'
    }
  } finally {
    isSubmitting.value = false
    
    // Effacer le message après 5 secondes
    setTimeout(() => {
      formStatus.value = null
    }, 5000)
  }
}
</script>