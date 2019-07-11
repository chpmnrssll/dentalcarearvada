<template>
  <b-navbar
    class="px-0"
    :class="{ 'hide-navbar': !showNavbar && !showCollapse }"
    fixed="top"
    toggleable="lg"
  >
    <b-container fluid>
      <b-navbar-brand class="m-4 p-0 mx-lg-0">
        <g-link to="/">
          <g-image alt="logo" src="~/assets/images/dental-logo.png" immediate />
        </g-link>
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
          <b-nav-item v-for="(userPage, index) in userPages" :key="index">
            <g-link class="" :to="userPage.path">{{ userPage.title }}</g-link>
          </b-nav-item>
          <!--
          <b-nav-item>
            <g-link class="" to="/reviews">Reviews</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="" to="/forms">Forms</g-link>
          </b-nav-item>
        -->
          <b-nav-item>
            <g-link class="" to="/directions">Directions & Map</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="" to="/contact">Contact</g-link>
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

const OFFSET = 40;

export default {
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
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
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
.hide-navbar {
  transform: translate3d(0, -100%, 0);
}

nav {
  background-image: linear-gradient(180deg, #ffffffff 0%, #ffffff00 100%);
  transform: translate3d(0, 0, 0);
  transition: 0.1s transform linear;

  @media (max-width: 640px) {
    background-image: linear-gradient(180deg, #ffffffff 0%, #ffffff00 100%);
  }

  .hamburger {
    .hamburger-inner,
    .hamburger-inner:after,
    .hamburger-inner:before {
      background-color: var(--light);
    }
  }

  .nav-link {
    a {
      color: var(--dark);
      font-size: 100%;
      text-decoration: none;

      &:hover {
        color: var(--primary);
      }

      @media (max-width: 640px) {
        color: var(--light);
        text-shadow: 1px 2px 4px #00000088;
        font-size: 2rem;
      }
    }
  }

  .container-fluid {
    max-width: 1240px;
  }

  .nav-collapse {
    background-image: linear-gradient(180deg, #ffffff00 0%, #00000088 100%);
    height: 100vh;
    transition: height 0.25s ease-out;

    // disable gradient > 640px
    @media (min-width: 640px) {
      background-image: none;
      height: auto;
      width: 100%;
    }
  }

  .active--exact {
    font-weight: bold;
  }
}
</style>
