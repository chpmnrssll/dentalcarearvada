<template>
  <DefaultLayout>
    <section class="pageContent">
      <HeroSection section-height="650px">
        <template v-slot:background>
          <g-image src="~/assets/images/denatl.jpg" alt="" immediate />
        </template>
        <template v-slot:body>
          <b-container class="m-4 p-0 m-lg-auto px-lg-3">
            <b-row>
              <b-col cols="9">
                <h1 class="text-dark mb-4">{{ homeData.header }}</h1>
                <p class="text-dark mb-4">{{ homeData.subHeader }}</p>
                <b-button @click="" variant="secondary" class="mt-4 py-3 px-5">
                  {{ homeData.buttonText }}
                </b-button>
              </b-col>
            </b-row>
          </b-container>
        </template>
      </HeroSection>

      <section class="banner">
        <b-container fluid>
          <b-row class="p-5">
            <b-col class="text-center">
              <g-link to="/directions">
                <SVGMap class="svg-icon" alt="Location" />
                <h2 class="py-2 text-light">Find Location</h2>
                <p class="text-light">Search locations on Google Map</p>
              </g-link>
            </b-col>
            <b-col class="text-center">
              <g-link to="/forms">
                <SVGUser class="svg-icon" alt="Patients" />
                <h2 class="py-2 text-light">New Patient</h2>
                <p class="text-light">Fill in details to get started</p>
              </g-link>
            </b-col>
            <b-col class="text-center">
              <g-link to="/contact-form">
                <SVGMail class="svg-icon" alt="Queries" />
                <h2 class="py-2 text-light">Queries</h2>
                <p class="text-light">Send us your questions</p>
              </g-link>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </section>
  </DefaultLayout>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue';
/* eslint import/no-unresolved: off */
import SVGMap from '~/assets/images/map.svg';
import SVGUser from '~/assets/images/user.svg';
import SVGMail from '~/assets/images/mail.svg';

import homeData from '~/data/home.yml';

export default {
  metaInfo: {
    title: 'Home',
  },
  components: {
    HeroSection,
    SVGMap,
    SVGUser,
    SVGMail,
  },
  data() {
    return {
      homeData,
    };
  },
  computed: {
    bannerLinks() {
      return homeData.bannerLinks;
    },
  },
  mounted() {
    document.querySelectorAll('.svg-icon').forEach(el => {
      el.setAttribute('viewBox', '0 0 24 24');
    });
  },
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  top: -4rem;

  @media (max-width: 1024px) {
    top: 0;
  }

  p {
    font-size: 100%;
  }
}

.container-fluid {
  background-color: var(--primary);
  max-width: 1210px;
}

.svg-icon {
  color: #f8f9fa;
  width: 48px;
  height: 48px;
  path {
    stroke: currentColor;
  }
}
</style>
