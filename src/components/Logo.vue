<template>
  <g-link to="/" class="d-flex flex-row" :class="light ? ' light' : ''">
    <g-image
      alt="Dental Care Arvada"
      class="logo--image mt-2 mr-1"
      src="~/assets/images/dental-logo-graphic.png"
      immediate
    />
    <b-container class="logo--text p-0">
      <span class="logo--text__dental">Dental</span>
      <span class="logo--text__care">Care</span>
      <div class="logo--text__arvada text-center">Arvada</div>
    </b-container>
  </g-link>
</template>

<script>
export default {
  props: {
    light: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: var(--dark);
  font-size: 1.25rem;
  max-width: 135px;

  &:hover {
    text-decoration: none;
    color: var(--primary);
  }
}

.light {
  color: var(--light);
}

.logo {
  &--image {
    height: 32px;
    width: 32px;
  }

  &--text {
    &__dental {
      font-size: 1.125rem;
      font-weight: 800;
    }
    &__care {
      font-size: 1.125rem;
      font-weight: 200;
    }
    &__arvada {
      font-size: 0.925rem;
      font-weight: 200;
      margin-top: -0.5rem;
      letter-spacing: 0.25rem;
    }
  }
}
</style>
