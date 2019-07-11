<template>
  <DefaultLayout>
    <div class="userPageContent">
      <h1 v-html="$page.userPage.title" class="mb-4" />
      <UserPageContent class="mt-5" :content="$page.userPage.content" />
    </div>
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

<style lang="scss" scoped></style>
