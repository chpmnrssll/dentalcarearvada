<template>
  <DefaultLayout>
    <section class="userPageContent">
      <b-container fluid class="d-flex justify-content-center align-items-center">
        <UserPageContent class="mt-5" :content="$page.userPage.content" />
      </b-container>
    </section>
  </DefaultLayout>
</template>

<page-query>
query UserPage($path: String!) {
  userPage(path: $path) {
    title
    content
  }
}
</page-query>

<script>
import UserPageContent from '../components/UserPageContent.vue';

export default {
  components: {
    UserPageContent,
  },
  metaInfo() {
    return {
      title: this.$page.userPage.title,
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
