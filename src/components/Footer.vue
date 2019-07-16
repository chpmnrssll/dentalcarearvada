<template>
  <footer class="page-footer font-small teal py-4">
    <b-container fluid>
      <b-row class="logo mx-auto mb-2">
        <b-col cols="2">
          <g-image alt="logo" src="~/assets/images/dental-logo-graphic.png" />
        </b-col>
        <b-col>
          <span class="ml-3 logo-text-dental">Dental</span>
          <span class="logo-text-care">Care</span>
          <b-row>
            <b-col class="ml-3 logo-text-arvada">Arvada</b-col>
          </b-row>
        </b-col>
      </b-row>
      <div class="text-center">
        <strong>{{ footerData.text }}</strong>
        <hr />
        <g-link to="/admin" target="_blank" v-if="footerData.netlifyCMSLink">Netlify CMS</g-link>
      </div>
    </b-container>
  </footer>
</template>

<script>
import footerData from '../data/footer.yml';

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
  background-color: #1d3349;
  color: var(--light);
  // margin-top: 6rem;
  height: 33.333vh;
  width: 100%;
}
a {
  color: #20c997;
}
hr {
  border-color: var(--light);
}
.container-fluid {
  width: 33%;
}
.logo {
  width: 40%;
}
.logo-text-dental {
  font-weight: 800;
}
.logo-text-care {
  font-weight: 200;
}
.logo-text-arvada {
  font-size: 0.75rem;
  font-weight: 200;
  margin-top: -0.25rem;
  letter-spacing: 0.25rem;
  text-align: center;
}
</style>
