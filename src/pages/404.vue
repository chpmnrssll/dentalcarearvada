<template>
  <DefaultLayout>
    <section class="pageContent">
      <b-container class="d-flex justify-content-center align-items-center">
        <g-image class="" src="~/assets/images/404.svg" alt="404" />
      </b-container>
    </section>
  </DefaultLayout>
</template>

<style scoped lang="scss">
.g-image {
  width: 80%;
  margin: auto;

  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
}
</style>
