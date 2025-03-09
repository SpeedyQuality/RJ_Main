export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('motion-slide-visible-once', {
    mounted(el, binding) {
      if (process.client) {
        const direction = binding.value?.direction || 'up';
        const delay = binding.value?.delay || 0;
        
        // Set initial styles
        el.style.opacity = '0';
        el.style.transition = `transform 0.8s ease ${delay}ms, opacity 0.8s ease ${delay}ms`;
        
        if (direction === 'up') {
          el.style.transform = 'translateY(40px)';
        } else if (direction === 'down') {
          el.style.transform = 'translateY(-40px)';
        } else if (direction === 'left') {
          el.style.transform = 'translateX(40px)';
        } else if (direction === 'right') {
          el.style.transform = 'translateX(-40px)';
        }
        
        // Create observer
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translate(0, 0)';
              }, 100);
              
              // Unobserve after animation
              observer.unobserve(el);
            }
          });
        }, { threshold: 0.1 });
        
        observer.observe(el);
      }
    }
  });
  
  nuxtApp.vueApp.directive('motion-fade-visible-once', {
    mounted(el, binding) {
      if (process.client) {
        const delay = binding.value?.delay || 0;
        
        // Set initial styles
        el.style.opacity = '0';
        el.style.transition = `opacity 0.8s ease ${delay}ms`;
        
        // Create observer
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                el.style.opacity = '1';
              }, 100);
              
              // Unobserve after animation
              observer.unobserve(el);
            }
          });
        }, { threshold: 0.1 });
        
        observer.observe(el);
      }
    }
  });
});