export default defineNuxtPlugin((nuxtApp) => {
  // console.log(nuxtApp);
  nuxtApp.vueApp.directive('focus', {
    mounted(el) {
      el.focus();
    },
    getSSRProps(binding, vnode) {
      // You can provide SSR-specific props here
      return{}
    }
  })
  return {
    provide: {
      hello: (message: string) => console.log(`Hello ${message}!`)
    }
  }
});
