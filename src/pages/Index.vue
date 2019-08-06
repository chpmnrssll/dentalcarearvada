<template>
  <DefaultLayout>
    <section class="pageContent">
      <HeroSection>
        <template v-slot:background>
          <g-image :src="homeData.section1.image" :alt="homeData.section1.image.src" immediate />
        </template>
        <template v-slot:body>
          <b-container class="m-4 p-0 m-lg-auto px-lg-3">
            <b-row>
              <b-col cols="7" class="mt-md-4">
                <h1 class="text-dark mb-4">{{ homeData.section1.header }}</h1>
                <h3 class="text-dark mb-4">{{ homeData.section1.subHeader }}</h3>
                <b-button @click="" variant="secondary" class="mt-4 py-3 px-5">
                  {{ homeData.section1.buttonText }}
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
              <g-link to="/directions" class="text-decoration-none">
                <g-image
                  :src="homeData.section1.banner.directions.image"
                  :alt="homeData.section1.banner.directions.title"
                  class="svg-icon"
                />
                <h3
                  class="m-0 pt-4 text-light"
                  v-html="homeData.section1.banner.directions.title"
                />
                <p
                  class="text-center text-light"
                  v-html="homeData.section1.banner.directions.text"
                />
              </g-link>
            </b-col>
            <b-col xs="12" md="4" class="text-center pt-sm-0 pt-5">
              <g-link to="/forms" class="text-decoration-none">
                <g-image
                  :src="homeData.section1.banner.forms.image"
                  :alt="homeData.section1.banner.forms.title"
                  class="svg-icon"
                />
                <h3 class="m-0 pt-4 text-light" v-html="homeData.section1.banner.forms.title" />
                <p class="text-center text-light" v-html="homeData.section1.banner.forms.text" />
              </g-link>
            </b-col>
            <b-col xs="12" md="4" class="text-center pt-sm-0 pt-5">
              <g-link to="/contact-form" class="text-decoration-none">
                <g-image
                  :src="homeData.section1.banner.contact.image"
                  :alt="homeData.section1.banner.contact.title"
                  class="svg-icon"
                />
                <h3 class="m-0 pt-4 text-light" v-html="homeData.section1.banner.contact.title" />
                <p class="text-center text-light" v-html="homeData.section1.banner.contact.text" />
              </g-link>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <HeroSection class="intro">
        <template v-slot:body>
          <b-container class="m-lg-auto p-1 p-md-3 px-lg-3">
            <b-row>
              <b-col md="12" lg="4">
                <g-image :src="homeData.section2.image" alt="" class="w-100" />
              </b-col>
              <b-col lg="7" class="d-flex flex-column justify-content-center">
                <b-container class="px-0">
                  <h3 class="mb-4" v-html="homeData.section2.header" />
                  <p class="mb-4" v-html="homeData.section2.body" />
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
              <b-col lg="6" offset-lg="1" class="d-flex flex-column justify-content-center p-4">
                <h3 class="mb-4" v-html="homeData.section3.header" />
                <p class="mb-4" v-html="homeData.section3.body" />
              </b-col>
              <b-col md="12" lg="4" class="d-flex p-0">
                <b-container>
                  <g-image :src="homeData.section3.image" alt="" class="p-2 w-100" />
                </b-container>
              </b-col>
            </b-row>
          </b-container>
        </template>
      </HeroSection>
    </section>
  </DefaultLayout>
</template>

<page-query>
query HomeData {
  homeData: allhomeData {
    edges {
      node {
        section1 {
          title
          image
          header
          subHeader
          buttonText
          banner {
            contact {
              href
              image
              text
              title
            }
            directions {
              href
              image
              text
              title
            }
            forms {
              href
              image
              text
              title
            }
          }
        }
        section2 {
          header
          image
          body
        }
        section3 {
          header
          image
          body
        }
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
      title: 'Home',
      meta: [{ itemprop: 'name', content: 'Home' }, { property: 'og:title', content: 'Home' }],
    };
  },
  components: {
    HeroSection,
  },
  computed: {
    homeData() {
      return this.$page.homeData.edges[0].node;
    },
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
.intro {
  padding-top: 6rem;
}
.svg-icon {
  color: #f8f9fa;
  width: 48px;
  height: 48px;
}
</style>
