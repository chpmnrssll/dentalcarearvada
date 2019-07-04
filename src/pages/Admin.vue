<template>
  <DefaultLayout>
    <div id="nc-root">Netlify CMS</div>
  </DefaultLayout>
</template>

<script>
export default {
  name: 'Admin',
  // meta: [{ requiresAuth: true }],
  mounted() {
    window.CMS.init({
      config: {
        backend: {
          name: 'git-gateway',
          repo: 'chpmnrssll/dentalcarearvada',
          squash_merges: true,
        },
        load_config_file: false,
        media_folder: '/uploads',
        public_folder: '/uploads',
        collections: [
          {
            label: 'Posts',
            name: 'posts',
            folder: 'blog',
            create: true,
            slug: '{{slug}}',
            fields: [
              { label: 'Title', name: 'title', widget: 'string' },
              { label: 'Excerpt', name: 'excerpt', widget: 'string' },
              { label: 'Publish Date', name: 'date', widget: 'datetime' },
              { label: 'Author', name: 'author', widget: 'string' },
              { label: 'Image', name: 'iamge', widget: 'image' },
              { label: 'Body', name: 'body', widget: 'markdown' },
            ],
          },
        ],
      },
    });
    // console.log(this.$root.$options.CMS);
    // this.$root.$options.CMS.init();
    // CMS.init();
  },
};
</script>

<style lang="scss" scoped></style>
