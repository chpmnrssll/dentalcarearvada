<template>
  <DefaultLayout>
    <b-container fluid class="d-flex justify-content-center align-items-center">
      <b-form
        name="contact"
        method="post"
        @submit.prevent="handleSubmit"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <h1 class="text-center">Contact</h1>
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
          />
        </b-form-group>

        <b-button type="submit" variant="primary">Send Request</b-button>
      </b-form>
    </b-container>
  </DefaultLayout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact',
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

<style scoped lang="scss">
.container-fluid {
  height: 100vh;
  max-width: 800px;
}
main {
  background-color: #f3f9f9;
}
form {
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(157, 169, 169, 0.18);
  margin: 6rem 0;
  padding: 6rem;
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
  max-width: 100%;
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
