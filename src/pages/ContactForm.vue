<template>
  <DefaultLayout>
    <section class="d-flex flex-column justify-content-center">
      <b-container fluid class="d-flex justify-content-center align-items-center header-container">
        <h1 class="text-center">How to contact us</h1>
      </b-container>

      <b-container
        fluid
        class="d-flex justify-content-center align-items-center banner-container my-5"
      >
        <b-row class="w-100">
          <b-col>
            <address class="text-center">
              <g-image class="d-block mx-auto mb-2" src="~/assets/images/map.png" />
              <div>8850 Ralston Rd #104</div>
              <div>Arvada, CO 80002</div>
            </address>
          </b-col>
          <b-col>
            <address class="text-center">
              <g-image class="d-block mx-auto mb-2" src="~/assets/images/phone.png" />
              <a href="tel:+13034203323" class="text-dark">(303) 420-3323</a>
            </address>
          </b-col>
          <b-col>
            <address class="text-center">
              <g-image class="d-block mx-auto mb-2" src="~/assets/images/email.png" />
              <a href="mailto:some@email.com" class="text-dark">some@email.com</a>
            </address>
          </b-col>
        </b-row>
      </b-container>

      <b-container fluid class="d-flex justify-content-center align-items-center form-container">
        <b-form
          name="contact"
          method="post"
          @submit.prevent="handleSubmit"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <h2 class="text-center mb-4">Send us a message</h2>
          <input type="hidden" name="name" value="contact" />
          <p hidden>
            <label> Don’t fill this out: <input name="bot-field" /> </label>
          </p>
          <b-form-group id="input-group-2">
            <b-form-input
              id="name"
              name="name"
              v-model="form.name"
              required
              placeholder="Your Name"
            />
          </b-form-group>

          <b-form-group id="input-group-1">
            <b-form-input
              id="email"
              v-model="form.email"
              name="email"
              type="email"
              required
              placeholder="Your Email"
            />
          </b-form-group>

          <b-form-group id="input-group-4">
            <b-form-input
              id="phone"
              v-model="form.phone"
              name="phone"
              required
              placeholder="Your Phone Number"
            />
          </b-form-group>

          <b-form-group id="input-group-3">
            <b-form-textarea
              id="message"
              name="message"
              v-model="form.message"
              required
              placeholder="Your Message"
              rows="6"
            />
          </b-form-group>

          <b-button type="submit" variant="primary">Send</b-button>
        </b-form>
      </b-container>
    </section>
  </DefaultLayout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: 'Contact',
      meta: [
        { itemprop: 'name', content: 'Contact' },
        { property: 'og:title', content: 'Contact' },
      ],
    };
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.form,
        }),
      })
        .then(() => this.$router.push('/success'))
        .catch(error => alert(error));
    },
  },
};
</script>

<style lang="scss" scoped>
.banner-container,
.form-container {
  max-width: 800px;
}
.header-container {
  margin-top: 8rem;
}
.banner-container {
}
.form-container {
  padding-bottom: 6rem;
}
main,
section {
  background-color: #f3f9f9;
}
form {
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(157, 169, 169, 0.18);
  margin: 0;
  padding: 4rem 6rem;
  width: 100%;
}
input,
textarea {
  background-color: #fafafa;
  border-color: #eaeaea;
  color: #666;
  padding: 1rem;
}
h1 {
  font-size: 2.333rem;
  text-transform: capitalize;
}
h2 {
  font-size: 1.666rem;
  text-transform: capitalize;
}
button {
  background-color: #303030;
  border-color: #d3d3d3;
  color: #d3d3d3;
  padding: 1rem 2rem;

  &:hover {
    background-color: #d3d3d3;
    border-color: #d3d3d3;
    color: #303030;
  }
}
</style>
