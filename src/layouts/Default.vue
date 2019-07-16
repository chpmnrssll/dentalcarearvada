<template>
  <main>
    <NavBar />
    <slot />
    <Footer />
  </main>
</template>

<static-query>
query MetaData {
  metaData {
    siteName
    siteDescription
    siteUrl
  }
}
</static-query>

<script>
import '../assets/styles/default.scss';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

export default {
  // https://vue-meta.nuxtjs.org/faq/component-props.html
  // define metaInfo as function to access this.$static.metaData query
  metaInfo() {
    return {
      // title: this.$static.metaData.siteName,
      titleTemplate: titleChunk => {
        return titleChunk
          ? `${titleChunk} - ${this.$static.metaData.siteName}`
          : this.$static.metaData.siteName;
      },
      meta: [
        { property: 'og:url', content: this.$static.metaData.siteUrl },
        { property: 'og:type', content: 'business.business' },
        { name: 'theme-color', content: '#fff' },
        { itemprop: 'name', content: this.$static.metaData.siteName },
        { property: 'og:title', content: this.$static.metaData.siteName },
        { name: 'description', content: this.$static.metaData.siteDescription },
        { itemprop: 'description', content: this.$static.metaData.siteDescription },
        { property: 'og:description', content: this.$static.metaData.siteDescription },
      ],
    };
  },
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.pageContent,
.userPageContent {
  flex: 1 0 auto;
}
.page-footer {
  flex-shrink: 0;
}
</style>
