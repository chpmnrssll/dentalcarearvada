<template>
  <DefaultLayout>
    <h3 class="mb-4">{{ galleryData.title }}</h3>
    <section>
      <p>{{ galleryData.heading }}</p>
    </section>
    <section>
      <figure class="text-center" v-for="image in galleryData.images">
        <g-image :src="image.src" :alt="image.alt" />
        <figcaption>{{ image.alt }}</figcaption>
      </figure>
    </section>
    <section class="section">
      <p>{{ galleryData.subHeading }}</p>
    </section>
  </DefaultLayout>
</template>

<script>
import galleryData from '../../userPages/gallery.yml';

export default {
  metaInfo: {
    title: 'Contact',
  },
  data() {
    return {
      galleryData,
    };
  },
};
</script>

<style scoped lang="scss">
.contact-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
}
.container-fluid {
  // background-color: var(--primary);
  height: 100vh;
  max-width: 680px;
  form {
    width: 100%;
  }
}
</style>
