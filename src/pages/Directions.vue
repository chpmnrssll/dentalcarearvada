<template>
  <DefaultLayout>
    <section class="pageContent">
      <b-container fluid class="d-flex justify-content-center align-items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6130.4668965023375!2d-105.096374!3d39.801755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8626d5ea6145%3A0xbcee241b5d70ebdc!2s8850+Ralston+Rd+%23104%2C+Arvada%2C+CO+80002!5e0!3m2!1sen!2sus!4v1562826705814!5m2!1sen!2sus"
          frameborder="0"
          style="border:0"
          allowfullscreen
        />
      </b-container>
    </section>
  </DefaultLayout>
</template>

<script>
import directionsData from '../../userPages/directions.yml';

export default {
  metaInfo: {
    title: 'Directions & Map',
  },
  data() {
    return {
      directionsData,
    };
  },
};
</script>

<style scoped lang="scss">
.container-fluid {
  // background-color: var(--primary);
  height: 100vh;
  max-width: 1210px;
  form {
    width: 100%;
  }
}
iframe {
  height: 75%;
  width: 100%;
}
</style>
