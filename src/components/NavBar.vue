<template>
  <b-navbar
    class="px-0"
    :class="{ 'hide-navbar': !showNavbar && !showCollapse }"
    fixed="top"
    toggleable="lg"
  >
    <b-container fluid>
      <b-navbar-brand class="m-4 mx-lg-0 p-0">
        <Logo />
      </b-navbar-brand>

      <b-navbar-toggle class="m-4 p-0" target="nav_collapse">
        <button
          class="hamburger hamburger--collapse"
          type="button"
          role="navigation"
          aria-label="Hamburger Menu"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner" />
          </span>
        </button>
      </b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse" v-model="showCollapse" class="nav-collapse">
        <b-navbar-nav class="ml-auto px-4">
          <b-nav-item>
            <g-link class="" to="/">Home</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="" to="/gallery">Our Practice</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="" to="/reviews">Reviews</g-link>
          </b-nav-item>
          <b-nav-item v-for="(userPage, index) in userPages" :key="index">
            <g-link class="" :to="userPage.path">{{ userPage.title }}</g-link>
          </b-nav-item>
          <!-- <b-nav-item>
            <g-link class="" to="/forms">Forms</g-link>
          </b-nav-item> -->
          <b-nav-item>
            <g-link class="" to="/directions">Directions &amp; Map</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="" to="/contact-form">Contact</g-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<static-query>
query UserPages {
  userPages: allUserPage(filter: { showNavLink: { eq: true } }) {
    edges {
      node {
        path
        showNavLink
        title
      }
    }
  }
}
</static-query>

<script>
/* eslint no-param-reassign: "error" */
import { mapActions, mapGetters } from 'vuex';
import Logo from './Logo.vue';

const OFFSET = 0;

export default {
  components: {
    Logo,
  },
  data() {
    return {
      showNavbar: true,
      showCollapse: false,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  computed: {
    ...mapGetters('user', {
      isLoggedIn: 'isLoggedIn',
    }),
    userPages() {
      return this.$static.userPages.edges.map(edge => edge.node);
    },
  },
  watch: {
    showCollapse(val) {
      this.blurBackground(val);
    },
  },
  mounted() {
    // remove duplicate #nav_collapse in production env
    const navCollapses = this.$el.querySelectorAll('#nav_collapse');
    if (navCollapses.length > 1) {
      navCollapses[navCollapses.length - 1].remove();
    }

    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    ...mapActions('user', {
      updateUser: 'updateUser',
    }),
    onScroll() {
      if (
        this.showCollapse ||
        window.pageYOffset < 0 ||
        Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET
      ) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    blurBackground(val) {
      document
        .getElementById('app')
        .querySelectorAll('section')
        .forEach(el => {
          el.style.filter = val ? 'blur(12px)' : '';
        });
    },
    triggerNetlifyIdentityAction(action) {
      if (action === 'login' || action === 'signup') {
        // this.$root.$options.netlifyIdentity.open(action);
        window.netlifyIdentity.open(action);
      } else if (action === 'logout') {
        // this.$root.$options.netlifyIdentity.logout();
        window.netlifyIdentity.logout();
        this.updateUser(null);
        // this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  max-width: 1240px;
}

.hamburger {
  .hamburger-inner,
  .hamburger-inner:after,
  .hamburger-inner:before {
    background-color: var(--dark);
  }
}

.hide-navbar {
  transform: translate3d(0, -100%, 0);
}

nav {
  background-image: linear-gradient(180deg, #ffffffff 0%, #ffffff00 100%);
  transform: translate3d(0, 0, 0);
  transition: 0.1s transform linear;

  .active--exact {
    text-shadow: 1px 1px 4px #207fdc44;
  }
}

.nav-collapse {
  height: 100vh;
  transition: height 0.25s ease-out;

  @media (min-width: 640px) {
    height: auto;
    width: 100%;
  }
}

.nav-link {
  a {
    color: var(--dark);
    font-size: 100%;
    text-decoration: none;
    -webkit-text-stroke: 1px #00000022;

    &:hover,
    &.active--exact {
      color: var(--primary);
    }

    @media (max-width: 960px) {
      color: #207fdc88;
      text-shadow: 1px 2px 4px #00000088;
      font-size: 2rem;
    }
  }
}
</style>
