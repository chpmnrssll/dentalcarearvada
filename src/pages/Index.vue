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
                <g-image
                  :src="homeData.banner.directions.image"
                  :alt="homeData.banner.directions.title"
                  class="svg-icon"
                />
                <h3 class="m-0 pt-4 text-light" v-html="homeData.banner.directions.title" />
                <p class="text-center text-light" v-html="homeData.banner.directions.text" />
              </g-link>
            </b-col>
            <b-col xs="12" md="4" class="text-center pt-sm-0 pt-5">
              <g-link to="/forms">
                <g-image
                  :src="homeData.banner.forms.image"
                  :alt="homeData.banner.forms.title"
                  class="svg-icon"
                />
                <h3 class="m-0 pt-4 text-light" v-html="homeData.banner.forms.title" />
                <p class="text-center text-light" v-html="homeData.banner.forms.text" />
              </g-link>
            </b-col>
            <b-col xs="12" md="4" class="text-center pt-sm-0 pt-5">
              <g-link to="/contact-form">
                <g-image
                  :src="homeData.banner.contact.image"
                  :alt="homeData.banner.contact.title"
                  class="svg-icon"
                />
                <h3 class="m-0 pt-4 text-light" v-html="homeData.banner.contact.title" />
                <p class="text-center text-light" v-html="homeData.banner.contact.text" />
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
                <g-image
                  src="~/assets/images/5280_TopDentistsLogo_2015.svg"
                  alt="5280 Top Dentists 2015"
                  class="w-100"
                />
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
              <b-col lg="6" offset="1" class="d-flex flex-column justify-content-center p-4">
                <h3 class="mb-4" v-html="homeData.section3.header" />
                <p class="mb-4" v-html="homeData.section3.body" />
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

<page-query>
query HomeData {
  homeData: allhomeData {
    edges {
      node {
        title
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
        section2 {
          body
          header
        }
        section3 {
          body
          header
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
  data() {
    return {};
  },
  computed: {
    homeData() {
      // console.log(typeof this.$page.homeData.edges[0].node.banner.directions.image);
      const data = this.$page.homeData.edges[0].node;
      // data.banner.contact.image = data.banner.contact.image.replace('/src', '..');
      // data.banner.directions.image = data.banner.directions.image.replace('/src', '..');
      // data.banner.forms.image = data.banner.forms.image.replace('/src', '..');
      return data;
    },
  },
  // mounted() {
  //   document.querySelectorAll('.svg-icon').forEach(el => {
  //     el.setAttribute('viewBox', '0 0 24 24');
  //   });
  // },
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
}
</style>
