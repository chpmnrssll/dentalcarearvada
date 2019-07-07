<template>
  <DefaultLayout>
    <div class="d-flex">
      <img class="" src="../assets/images/404.svg" alt="404" />
      <h1>404</h1>
    </div>
  </DefaultLayout>
</template>

<style scoped lang="scss">
img {
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
