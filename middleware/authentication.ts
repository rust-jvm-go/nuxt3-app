export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Hello from middleware authentication!");
  // console.log(to);
  // console.log(from);
  const isLoggedIn = false;
  // if (isLoggedIn) {
    // Redirect to the page we want to go
    // return navigateTo(to.fullPath);
  // }
  // Redirect to the login page
  // return navigateTo("/events");
});
