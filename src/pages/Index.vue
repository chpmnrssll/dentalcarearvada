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
              <b-col md="12" lg="4">
                <!-- <g-image
                  src="~/assets/images/DrW-cropped.jpg"
                  alt="Gregory B. Waters, DDS, PC"
                  class="w-100"
                /> -->
                <g-image
                  src="~/assets/images/5280_TopDentistsLogo_2015.svg"
                  alt="5280 Top Dentists 2015"
                  class="w-100"
                />
              </b-col>
              <b-col lg="7" class="d-flex flex-column justify-content-center">
                <b-container class="px-0">
                  <h3 class="mb-4">Three times voted "Denver's Top Dentists" in 5280 Magazine!</h3>
                  <p class="mb-4">
                    Welcome new and existing patients of Dr. Greg Waters, DDS to our online
                    resource. We try to make visiting our practice a uniquely warm and welcoming
                    experience. You'll find we listen to your treatment goals and make your visits
                    as comfortable as possible. Our goal is to offer the very best quality care in
                    an environment that values each patient. We'll help you achieve a beautiful and
                    healthy smile.
                  </p>
                  <p class="mb-4">
                    You can access our website to request an appointment, and find answers to your
                    dental questions including procedure animations and informational resources.
                  </p>
                  <p class="mb-4">
                    Information about our office, including directions, forms you can fill out prior
                    to your visit, insurance carrier and forms of payment accepted are available
                    online. Please don't hesitate to <g-link to="/contact">contact</g-link> us as
                    well and enjoy your online visit.
                  </p>
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
                  <g-image src="~/assets/images/E4D-machine.png" class="p-2 w-100" />
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
