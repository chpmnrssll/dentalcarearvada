<template>
  <DefaultLayout>
    <section class="pageContent">
      <HeroSection section-height="650px">
        <template v-slot:background>
          <g-image src="~/assets/images/dental.jpg" alt="" immediate />
        </template>
        <template v-slot:body>
          <b-container class="m-4 p-0 m-lg-auto px-lg-3">
            <b-row>
              <b-col cols="7" class="mt-md-4">
                <h1 class="text-dark mb-4">{{ homeData.header }}</h1>
                <h3 class="text-dark mb-4">{{ homeData.subHeader }}</h3>
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
            <b-col xs="12" md="4" class="text-center">
              <g-link to="/directions">
                <SVGMap class="svg-icon" alt="Location" />
                <h3 class="m-0 pt-4 text-light">Find Location</h3>
                <p class="text-center text-light">Search locations on Google Map</p>
              </g-link>
            </b-col>
            <b-col xs="12" md="4" class="text-center pt-sm-0 pt-5">
              <g-link to="/forms">
                <SVGUser class="svg-icon" alt="Patients" />
                <h3 class="m-0 pt-4 text-light">New Patient</h3>
                <p class="text-center text-light">Fill in details to get started</p>
              </g-link>
            </b-col>
            <b-col xs="12" md="4" class="text-center pt-sm-0 pt-5">
              <g-link to="/contact-form">
                <SVGMail class="svg-icon" alt="Queries" />
                <h3 class="m-0 pt-4 text-light">Queries</h3>
                <p class="text-center text-light">Send us your questions</p>
              </g-link>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <HeroSection section-height="650px">
        <template v-slot:body>
          <b-container class="m-lg-auto p-1 p-md-3 px-lg-3">
            <b-row>
              <b-col md="12" lg="4" offset="1">
                <g-image
                  src="~/assets/images/DrW-cropped.jpg"
                  alt="Gregory B. Waters, DDS, PC"
                  class="w-100"
                />
              </b-col>
              <b-col lg="6" class="d-flex flex-column justify-content-center">
                <b-container class="px-0">
                  <h2 class="my-4">Committed To Dental Excellence</h2>
                  <h3 class="mb-4">We create beautiful and brighter smiles</h3>
                  <p class="mb-4">
                    Dr. Waters is a 1999 Graduate of University of Colorado Dental School and has
                    served patient's Dentistry needs for over ten years. He completed two years of
                    General Practice Residency in 2000 at Denver Health Medical Center. Dr. Waters
                    is an Arvada native, and with his wife and three children enjoy all Colorado has
                    to offer.
                  </p>
                  <h4 class="my-4">Gregory B. Waters, DDS, PC</h4>
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </template>
      </HeroSection>

      <HeroSection class="clinically-proven">
        <template v-slot:body>
          <b-container class="m-lg-auto p-1 pb-3 my-3 pt-md-0 p-md-3 px-lg-3">
            <b-row>
              <b-col lg="6" offset="1" class="d-flex flex-column justify-content-center p-4">
                <h2><small>Clinically Proven State-of-the-Art Dental Technology</small></h2>
                <p>
                  Dr. Waters uses modern, clinically proven methods to offer his patients the best
                  quality care available. His practice is equipped with state of the art E4D
                  technology, which can mill a custom crown on-site. Often with a single visit, Dr.
                  Waters can offer procedures which previously required weeks. Same Day Crown: You
                  may prefer the convenience and health benefits of eliminating multiple trips when
                  a crowning procedure is necessary.
                </p>
              </b-col>
              <b-col md="12" lg="4" class="d-flex p-0">
                <b-container>
                  <g-image src="~/assets/images/_E4D_Console.jpg" class="p-2 w-100" />
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </template>
      </HeroSection>
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
  metaInfo() {
    return {
      title: 'Home',
      meta: [{ itemprop: 'name', content: 'Home' }, { property: 'og:title', content: 'Home' }],
    };
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
h1 {
  @media (max-width: 960px) {
    font-size: 2rem;
  }
  @media (max-width: 640px) {
    font-size: 1.5rem;
  }
}
p {
  margin-bottom: 1.6em;
}

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
.clinically-proven {
  background-color: #f3f9f9;
  border-top: 1px solid #e4edec;
  padding-top: 6rem;
  // min-height: 1440px;
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
