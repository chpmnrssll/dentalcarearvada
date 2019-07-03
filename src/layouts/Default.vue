<template>
  <main>
    <NavBar />
    <slot />
    <Footer />
  </main>
</template>

<script>
import '../assets/styles/default.scss';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss"></style>
