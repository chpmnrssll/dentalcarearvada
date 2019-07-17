<template>
  <DefaultLayout>
    <section class="pageContent">
      <h1 class="mb-4">Thank you!</h1>
      <g-image class="mail-image" src="~/assets/images/mail-sent.svg" alt="mail-image" />
      <h3 class="mt-5 text-center">Your message was successfully sent!</h3>
    </section>
  </DefaultLayout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Thanks',
      meta: [{ itemprop: 'name', content: 'Thanks' }, { property: 'og:title', content: 'Thanks' }],
    };
  },
};
</script>

<style lang="scss">
.mail-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
}
</style>
