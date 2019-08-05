<template>
  <DefaultLayout>
    <section class="pageContent">
      <HeroSection>
        <template v-slot:body>
          <b-container class="m-lg-auto p-1 p-md-3 px-lg-3">
            <b-row>
              <b-col md="12" lg="6">
                <g-image
                  src="~/assets/images/DrW-cropped.jpg"
                  alt="Gregory B. Waters, DDS, PC"
                  class="w-100"
                />
              </b-col>
              <b-col class="d-flex flex-column justify-content-center">
                <b-container class="px-0">
                  <h2 class="text-dark mb-4">{{ practiceData.header }}</h2>
                  <p class="mb-4">{{ practiceData.text }}</p>
                  <h3 class="text-dark mb-4">{{ practiceData.footer }}</h3>
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </template>
      </HeroSection>

      <HeroSection class="complete-care">
        <template v-slot:body>
          <b-container class="m-lg-auto p-1 pt-3 pt-md-0 p-md-3 px-lg-3">
            <h2 class="text-center">Complete Care On Your Schedule</h2>
            <h3 class="text-center">Bringing life to your smile</h3>

            <b-container fluid>
              <b-row class="py-5">
                <b-col xs="12" sm="6" lg="3" class="text-center py-5">
                  <g-link to="/directions">
                    <g-image src="~/assets/images/icon04.png" alt="Dentist" />
                    <h3 class="py-2 text-dark">Highly trained dental team</h3>
                    <p class="text-center text-dark">
                      Litora nostrum ab iaculis sagittis, dolores! Sociis vestibulum mus aperiam!
                      Assumenda!
                    </p>
                  </g-link>
                </b-col>
                <b-col xs="12" sm="6" lg="3" class="text-center py-5">
                  <g-link to="/forms">
                    <g-image src="~/assets/images/icon03.png" alt="Treatment" />
                    <h3 class="py-2 text-dark">Advance treatment</h3>
                    <p class="text-center text-dark">
                      Litora nostrum ab iaculis sagittis, dolores! Sociis vestibulum mus aperiam!
                      Assumenda!
                    </p>
                  </g-link>
                </b-col>
                <b-col xs="12" sm="6" lg="3" class="text-center py-5">
                  <g-link to="/contact-form">
                    <g-image src="~/assets/images/icon02.png" alt="Guaranteed results" />
                    <h3 class="py-2 text-dark">Guaranteed results</h3>
                    <p class="text-center text-dark">
                      Litora nostrum ab iaculis sagittis, dolores! Sociis vestibulum mus aperiam!
                      Assumenda!
                    </p>
                  </g-link>
                </b-col>
                <b-col xs="12" sm="6" lg="3" class="text-center py-5">
                  <g-link to="/contact-form">
                    <g-image src="~/assets/images/icon01.png" alt="Modern tech & equipment" />
                    <h3 class="py-2 text-dark">Modern tech &amp; equipment</h3>
                    <p class="text-center text-dark">
                      Litora nostrum ab iaculis sagittis, dolores! Sociis vestibulum mus aperiam!
                      Assumenda!
                    </p>
                  </g-link>
                </b-col>
              </b-row>
            </b-container>

            <b-container fluid class="p-0">
              <b-row>
                <b-col md="12" lg="6" class="p-0">
                  <b-row>
                    <b-col cols="6">
                      <g-image src="~/assets/images/_E4D_mill.jpg" class="image-grid p-2" />
                    </b-col>
                    <b-col cols="6">
                      <g-image src="~/assets/images/image09.jpg" class="image-grid p-2" />
                    </b-col>
                    <b-col cols="6">
                      <g-image src="~/assets/images/image08.jpg" class="image-grid p-2" />
                    </b-col>
                    <b-col cols="6">
                      <g-image src="~/assets/images/_E4D_Console.jpg" class="image-grid p-2" />
                    </b-col>
                  </b-row>
                </b-col>
                <b-col class="d-flex flex-column justify-content-center p-4">
                  <h2><small>Dentistry For Today’s Lifestyle</small></h2>
                  <h3><small>We have all your dental needs covered</small></h3>
                  <b-row class="mt-4">
                    <b-col cols="6">Dental Exams &amp; Cleanings</b-col>
                    <b-col cols="6">Dental X-Rays</b-col>
                    <b-col cols="6">Cosmetic Dentistry</b-col>
                    <b-col cols="6">Periodontal Disease</b-col>
                    <b-col cols="6">Root Canals</b-col>
                    <b-col cols="6">Extractions</b-col>
                    <b-col cols="6">Tooth Whitening</b-col>
                    <b-col cols="6">Braces &amp; Implants</b-col>
                  </b-row>
                </b-col>
              </b-row>
            </b-container>
          </b-container>
        </template>
      </HeroSection>
    </section>
  </DefaultLayout>
</template>

<page-query>
query practiceData {
  practiceData: allpracticeData {
    edges {
      node {
        header
        text
        footer
      }
    }
  }
}
</page-query>

<script>
import HeroSection from '../components/HeroSection.vue';

export default {
  metaInfo() {
    return {
      title: 'Our Practice',
      meta: [
        { itemprop: 'name', content: 'Our Practice' },
        { property: 'og:title', content: 'Our Practice' },
      ],
    };
  },
  components: {
    HeroSection,
  },
  computed: {
    practiceData() {
      return this.$page.practiceData.edges[0].node;
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  color: #666666;
  font-size: 100%;
}
.pageContent {
  margin-top: 6rem;
}
.complete-care {
  background-color: #f3f9f9;
  border-top: 1px solid #e4edec;
  padding-top: 16rem;
  // min-height: 1440px;
}
.image-grid {
  height: 100%;
  width: 100%;
  // overflow: hidden;
}
</style>
