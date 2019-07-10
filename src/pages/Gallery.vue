<template>
  <DefaultLayout>
    <h3 className="is-size-3">Our Practice</h3>
    <section className="section">
      <p>{{ galleryData.heading }}</p>
    </section>
    <section className="section">
      <figure className="has-text-centered">
        <g-image :src="galleryData.images[0].src" :alt="galleryData.images[0].alt" />
        <figcaption>{{ galleryData.images[0].alt }}</figcaption>
      </figure>
    </section>
    <section className="section">
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
