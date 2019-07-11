<template>
  <DefaultLayout>
    <section class="pageContent">
      <h3 class="mb-4">{{ directionsData.title }}</h3>
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
  max-width: 680px;
  form {
    width: 100%;
  }
}
</style>
