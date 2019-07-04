<template>
  <div id="nc-root" />
</template>

<script>
export default {
  name: 'Admin',
  // meta: [{ requiresAuth: true }],
  mounted() {
    // window.CMS();
    window.CMS.init({
      config: {
        backend: {
          name: 'git-gateway',
          repo: 'chpmnrssll/dentalcarearvada',
          squash_merges: true,
        },
        load_config_file: false,
        media_folder: '/static/assets/uploadedImages',
        public_folder: '/assets/uploadedImages',
        // site_url: window.location.hostname,
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
              { label: 'Image', name: 'image', widget: 'image' },
              { label: 'Body', name: 'body', widget: 'markdown' },
            ],
          },
          {
            label: 'Pages',
            name: 'pages',
            folder: 'userPages',
            create: true,
            slug: '{{slug}}',
            fields: [
              { label: 'Title', name: 'title', widget: 'string' },
              { label: 'Excerpt', name: 'excerpt', widget: 'string' },
              { label: 'Publish Date', name: 'date', widget: 'datetime' },
              { label: 'Author', name: 'author', widget: 'string' },
              { label: 'Image', name: 'image', widget: 'image' },
              { label: 'Body', name: 'body', widget: 'markdown' },
            ],
          },
        ],
      },
    });
  },
};
</script>

<style lang="scss" scoped>
#nc-root {
  margin-top: 6rem;
}
</style>
