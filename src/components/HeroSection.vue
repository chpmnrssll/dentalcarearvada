<template>
  <section>
    <b-container class="d-flex flex-column justify-content-center mb-0 p-0" fluid>
      <div :class="overlay ? 'img-under' : ''">
        <slot name="background" />
      </div>
      <SequentialEntrance animation="entranceFromTop" :delay="50" :className="fixedClass">
        <slot name="body" />
      </SequentialEntrance>
    </b-container>
  </section>
</template>

<script>
import SequentialEntrance from './SequentialEntrance.vue';

export default {
  components: {
    SequentialEntrance,
  },
  props: {
    className: { type: String, default: '' },
    fixed: { type: Boolean, default: false },
    overlay: { type: Boolean, default: false },
    sectionHeight: { type: String, default: '' },
  },
  computed: {
    fixedClass() {
      const addClass = 'position-absolute p-0 HeroSection-body';
      return this.fixed ? `${this.className} ${addClass}` : `${this.className} HeroSection-body`;
    },
  },
  mounted() {
    // wait 1 frame for DOM to render before calling getComputedStyle
    window.requestAnimationFrame(() => {
      const sectionHeight = parseFloat(this.sectionHeight, 10);

      // set this sections' height to match .HeroSection-body
      const body = this.$el.querySelector('.HeroSection-body div');
      const bodyHeight = parseInt(window.getComputedStyle(body).height, 10);
      if (sectionHeight && sectionHeight > bodyHeight) {
        this.$el.style.height = this.sectionHeight;
        body.parentElement.parentElement.style.height = this.sectionHeight;
      } else {
        this.$el.style.height = `${bodyHeight}px`;
        body.parentElement.parentElement.style.height = `${bodyHeight}px`;
      }

      if (this.fixed) {
        // hide the original g-image
        const bgImg = this.$el.querySelector('.g-image');
        bgImg.classList.add('d-none');

        // build a new blank img with src as a css background-image
        const fixedImg = document.createElement('img');
        fixedImg.style.width = '100%';
        fixedImg.style.height = `${bodyHeight}px`;
        fixedImg.style.backgroundAttachment = 'fixed';
        fixedImg.style.backgroundImage = `url(${bgImg.src})`;
        fixedImg.style.backgroundPosition = 'center';
        fixedImg.style.backgroundSize = 'cover';
        fixedImg.style.transform = 'scale(1.01)';
        fixedImg.alt = bgImg.alt;
        bgImg.parentElement.append(fixedImg);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  width: 100%;
}
.g-image {
  left: 0;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
}
.img-under {
  z-index: -1;
}
.container-fluid {
  background-color: transparent;
  background-image: linear-gradient(225deg, var(--primaryBlue) 0%, var(--primaryGreen) 65%);
  left: 0;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.gradient-overlay {
  background-image: linear-gradient(225deg, var(--primaryBlueA) 0%, var(--primaryGreenA) 65%);
}
</style>
