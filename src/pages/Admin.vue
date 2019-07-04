<template>
  <DefaultLayout>
    <div id="nc-root">Netlify CMS</div>
  </DefaultLayout>
</template>

<script>
export default {
  name: 'Admin',
  // meta: [{ requiresAuth: true }],
  mounted() {
    window.CMS.init();
    // console.log(this.$root.$options.CMS);
    // this.$root.$options.CMS.init();
    // CMS.init();
  },
};
</script>

<style lang="scss" scoped></style>
