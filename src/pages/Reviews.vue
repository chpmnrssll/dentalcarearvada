<template>
  <DefaultLayout>
    <section class="pageContent">
      <b-container fluid>
        <b-row>
          <b-col
            class="d-block mx-auto"
            xs="12"
            sm="6"
            md="6"
            lg="4"
            xl="4"
            v-for="edge in $page.reviews.edges"
            :key="edge.node.path"
          >
            <g-image :src="edge.node.icon" class="d-block mx-auto" />
            <b-container class="my-4" fluid>
              <ReviewContent :content="edge.node.content" />
              <h2 class="text-center">&mdash; {{ edge.node.author }}, {{ edge.node.location }}</h2>
            </b-container>
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
  components: {
    ReviewContent,
  },
  metaInfo: {
    title: 'Reviews',
  },
};
</script>

<style scoped lang="scss">
.container-fluid {
  margin-top: 6rem;
  max-width: 1210px;
}
.g-image {
  width: 75%;
}
h2 {
  font-size: 1rem;
}
</style>
