<template>
  <DefaultLayout>
    <g-image
      immediate
      class="userPageImage mb-4"
      :src="$page.userPage.image"
      :alt="$page.userPage.title"
    />
    <div class="userPageContent">
      <h1 v-html="$page.userPage.title" class="mb-4" />
      <div class="meta">
        <div class="box author">
          <span class="label">Author</span>
          <span class="author-name" v-text="$page.userPage.author" />
        </div>
        <div class="box date">
          <span class="label">Date</span>
          <div v-text="new Date($page.userPage.date).toLocaleDateString()" />
        </div>
        <div class="box time">
          <span class="label">Time</span>
          <span>{{ $page.userPage.timeToRead }} min read</span>
        </div>
      </div>
      <UserPageContent class="mt-5" :content="$page.userPage.content" />
    </div>
  </DefaultLayout>
</template>

<page-query>
query UserPage($path: String!) {
  userPage(path: $path) {
    title
    author
    date
    timeToRead
    content
    image
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
.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;

  .label {
    font-weight: bold;
  }
}

.userPageImage {
  max-height: 400px;
  width: 100%;
}
</style>
