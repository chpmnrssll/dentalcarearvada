<template>
  <DefaultLayout>
    <HeroSection section-height="650px">
      <template v-slot:background>
        <g-image src="~/assets/images/denatl.jpg" alt="" immediate />
      </template>
      <template v-slot:body>
        <b-container class="m-4 p-0 m-lg-auto px-lg-3">
          <b-row>
            <b-col cols="9">
              <h1 class="text-dark mb-4">{{ homeData.heading }}</h1>
              <p class="text-dark mb-4">{{ homeData.subHeading }}</p>
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
          <b-col class="text-center" v-for="bannerLink in bannerLinks" :key="bannerLink.heading">
            <!-- <img
              class="svg-icon"
              :src="homeData.bannerLink.icon"
              :alt="homeData.bannerLink.heading"
            /> -->
            <h2 class="py-2 text-light">{{ bannerLink.heading }}</h2>
            <p class="text-light">{{ bannerLink.subHeading }}</p>
          </b-col>

          <!-- <b-col class="text-center">
            <SVGMap class="svg-icon" alt="Location" />
            <h2 class="py-2 text-light">Find Location</h2>
            <p class="text-light">Search location on Google Map</p>
          </b-col>
          <b-col class="text-center">
            <SVGUser class="svg-icon" alt="Patients" />
            <h2 class="py-2 text-light">New Patient</h2>
            <p class="text-light">Fill up all details in form to get started</p>
          </b-col>
          <b-col class="text-center">
            <SVGMail class="svg-icon" alt="Queries" />
            <h2 class="py-2 text-light">Queries</h2>
            <p class="text-light">Send us your questions through mail</p>
          </b-col> -->
        </b-row>
      </b-container>
    </section>
  </DefaultLayout>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
/* eslint import/no-unresolved: off */
// import SVGMap from '~/assets/images/map.svg';
// import SVGUser from '~/assets/images/user.svg';
// import SVGMail from '~/assets/images/mail.svg';

import homeData from '../../userPages/home.yml';

export default {
  components: {
    HeroSection,
    // SVGMap,
    // SVGUser,
    // SVGMail,
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
  metaInfo: {
    title: 'Dental Care Arvada',
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
  max-width: 1240px;
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
