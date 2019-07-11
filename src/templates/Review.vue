<template>
  <DefaultLayout>
    <div class="reviewContent">
      <h1 v-html="$page.review.title" class="mb-4" />
      <ReviewContent class="mt-5" :content="$page.review.content" />
    </div>
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

<style lang="scss" scoped></style>
