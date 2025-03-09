// Client-side animation directives
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('motion-fade-visible-once', {
    mounted(el) {
      el.classList.add('opacity-0')
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add('transition-opacity', 'duration-1000')
              el.classList.remove('opacity-0')
              observer.unobserve(el)
            }, 100)
          }
        })
      }, { threshold: 0.1 })
      
      observer.observe(el)
    }
  })

  nuxtApp.vueApp.directive('motion-slide-visible-once', {
    mounted(el, binding) {
      const direction = binding.value?.direction || 'up'
      const delay = binding.value?.delay || 0
      
      // Set initial state based on direction
      if (direction === 'up') {
        el.classList.add('opacity-0', 'translate-y-16')
      } else if (direction === 'down') {
        el.classList.add('opacity-0', '-translate-y-16')
      } else if (direction === 'left') {
        el.classList.add('opacity-0', 'translate-x-16')
      } else if (direction === 'right') {
        el.classList.add('opacity-0', '-translate-x-16')
      }
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.classList.add('transition-all', 'duration-1000')
              el.classList.remove('opacity-0')
              
              if (direction === 'up' || direction === 'down') {
                el.classList.remove('translate-y-16', '-translate-y-16')
              } else {
                el.classList.remove('translate-x-16', '-translate-x-16')
              }
              
              observer.unobserve(el)
            }, delay)
          }
        })
      }, { threshold: 0.1 })
      
      observer.observe(el)
    }
  })
})