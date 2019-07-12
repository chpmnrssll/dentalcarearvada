<template>
  <DefaultLayout>
    <section class="reviewContent">
      <b-container fluid class="d-flex flex-column justify-content-center align-items-center">
        <ReviewContent class="mt-5" :content="$page.review.content" />
      </b-container>
    </section>
  </DefaultLayout>
</template>

<page-query>
query Review($path: String!) {
  review(path: $path) {
    title
    author
    date
    icon
    location
    content
  }
}
</page-query>

<script>
import ReviewContent from '../components/ReviewContent.vue';

export default {
  components: {
    ReviewContent,
  },
  metaInfo() {
    return {
      title: this.$page.review.title,
    };
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  margin-top: 6rem;
  max-width: 1210px;
}
</style>
