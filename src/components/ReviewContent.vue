<template>
  <b-container class="review-content" v-html="content" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.review-content {
  p {
    line-height: 1.5;
    font-size: 100%;
    font-style: italic;
    margin-bottom: 0;
  }
  h1 {
    font-size: 1.25rem;
    max-width: 100%;
    text-align: center;
  }
}
</style>
