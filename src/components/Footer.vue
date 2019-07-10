<template>
  <footer class="page-footer font-small teal py-4">
    <div class="text-center">
      <strong>{{ footerData.text }}</strong>
      <br />
      <g-link to="/admin" target="_blank" v-if="footerData.netlifyCMSLink">Netlify CMS</g-link>
    </div>
  </footer>
</template>

<script>
import footerData from '../../userPages/footer.yml';

export default {
  data() {
    return {
      footerData,
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  margin-top: 6rem;
  background-color: #f5f5f5;

  a {
    color: #20c997;
  }
}
</style>
