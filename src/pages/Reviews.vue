<template>
  <DefaultLayout>
    <section class="pageContent">
      <b-container fluid class="d-flex justify-content-center align-items-center">
        <b-row>
          <b-col cols="4" offset="2" v-for="edge in $page.reviews.edges" :key="edge.node.path">
            <g-link :to="edge.node.path">
              <g-image :src="edge.node.icon" />
              <h2 class="mb-4">{{ edge.node.author }}, {{ edge.node.location }}</h2>
              <h3>{{ edge.node.title }}</h3>
              <!-- <ReviewContent class="mt-5" :content="edge.node.content" /> -->
            </g-link>
          </b-col>
        </b-row>
      </b-container>
      <pre />
    </section>
  </DefaultLayout>
</template>

<page-query>
query Review {
  reviews: allReview(sortBy: "date") {
    edges {
      node {
        author
        date
        icon
        location
        title
        content
        path
      }
    }
  }
}
</page-query>

<script>
import ReviewContent from '../components/ReviewContent.vue';

export default {
  metaInfo: {
    title: 'Reviews',
  },
  components: {
    ReviewContent,
  },
};
</script>

<style scoped lang="scss">
.container-fluid {
  margin-top: 6rem;
  max-width: 1210px;
}
</style>
