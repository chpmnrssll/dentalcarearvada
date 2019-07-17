<template>
  <DefaultLayout>
    <section class="pageContent">
      <HeroSection section-height="650px">
        <template v-slot:body>
          <b-container class="m-4 p-0 m-lg-auto px-lg-3">
            <b-row>
              <b-col cols="3">
                <g-image src="~/assets/images/DrW.jpg" alt="Gregory B. Waters, DDS, PC" />
              </b-col>
              <b-col>
                <h1 class="text-dark mb-4">{{ practiceData.header }}</h1>
                <p class="mb-4">{{ practiceData.text }}</p>
                <h2 class="text-dark mb-4">{{ practiceData.footer }}</h2>
              </b-col>
            </b-row>
          </b-container>
        </template>
      </HeroSection>
    </section>
  </DefaultLayout>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import practiceData from '../data/practice.yml';

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
  data() {
    return {
      practiceData,
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  color: #666666;
  font-size: 100%;
  line-height: 1.5;
}
h1 {
  font-size: 2.333rem;
  font-weight: 600;
  line-height: 1.6em;
  max-width: 100%;
  text-transform: capitalize;
}
.g-image {
  width: 100%;
}
.pageContent {
  margin-top: 6rem;
}
</style>
