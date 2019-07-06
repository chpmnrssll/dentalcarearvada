<template>
  <div id="nc-root" />
</template>

<script>
function initCMS() {
  window.CMS.init({
    config: {
      backend: {
        name: 'git-gateway',
        repo: 'https://github.com/chpmnrssll/dentalcarearvada',
        squash_merges: true,
      },
      load_config_file: false,
      media_folder: '/static/assets/uploadedImages',
      public_folder: '/assets/uploadedImages',
      // site_url: window.location.hostname,
      collections: [
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
}

function keepTrying() {
  try {
    initCMS();
  } catch (e) {
    console.error('DAMN');
    setTimeout(keepTrying, 250);
  }
}

export default {
  name: 'Admin',
  // meta: [{ requiresAuth: true }],
  mounted() {
    keepTrying();
  },
};
</script>

<style lang="scss" scoped>
#nc-root {
  margin-top: 6rem;
}
</style>
