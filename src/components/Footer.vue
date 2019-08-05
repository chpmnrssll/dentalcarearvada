<template>
  <section>
    <footer class="page-footer font-small teal py-4">
      <b-container fluid>
        <Logo light class="mx-auto pb-4" />
        <div class="text-center">
          <strong>{{ footerData.text }}</strong>
          <hr class="my-4" />
          <g-link
            to="/admin"
            target="_blank"
            v-if="footerData.netlifyCMSLink"
            class="netlifyCMSLink"
          >
            Netlify CMS
          </g-link>
        </div>
      </b-container>
    </footer>
  </section>
</template>

<static-query>
query footerData {
  footerData: allfooterData {
    edges {
      node {
        text
        netlifyCMSLink
      }
    }
  }
}
</static-query>

<script>
import Logo from './Logo.vue';

export default {
  components: {
    Logo,
  },
  computed: {
    footerData() {
      return this.$static.footerData.edges[0].node;
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  min-width: 33%;
}

.netlifyCMSLink {
  color: #20c997;
}

footer {
  background-color: #1d3349;
  color: var(--light);
  // margin-top: 6rem;
  min-height: 33.333vh;
  width: 100%;
}

hr {
  border-color: var(--light);
}
</style>
