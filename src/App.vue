<template>
<div class="wrapper">
  <header>
    <nav class="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link to="/home">Home</router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="navigation__item">
          <router-link to="/add">Add</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <router-view/>
</div>

</template>
<script>
// import Home from './views/HomePage.vue';
// import Contact from './views/Contact.vue';
// import Add from './views/Add.vue';

export default {
  components: {
    // Home,
    // Contact,
    // Add,
  },
};
</script>
<style lang="scss">
</style>
