const siteData = {
  siteName: 'Dental Care Arvada',
  siteUrl: 'https://dentalcarearvada.netlify.com/',
  siteDescription:
    'Dentist Greg Waters quality dental care in Arvada, CO 80004. Waterlase, E4D, invisalign, General dentistry.',
};
module.exports = {
  ...siteData,
  metaData: {
    ...siteData,
  },
  transformers: {
    netlify: {},
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'reviews/**/*.md',
        typeName: 'Review',
        route: '/reviews/:slug',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'userPages/**/*.md',
        typeName: 'UserPage',
        route: ':slug',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/home.yml',
        typeName: 'homeData',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/practice.yml',
        typeName: 'practiceData',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'src/data/footer.yml',
        typeName: 'footerData',
      },
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin',
        modulePath: 'src/admin/index.js',
      },
    },
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['UserPage'],
      },
    },
    {
      use: 'gridsome-transformer-netlify',
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-72659574-10',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
      },
    },
    {
      use: 'gridsome-plugin-purgecss',
      options: {
        content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.scss', './src/**/*.md'],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      },
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900,
      },
    },
  ],
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        /* eslint no-param-reassign: "error" */
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'img-src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src',
        };

        return options;
      });

    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
  css: {
    loaderOptions: {
      scss: {},
    },
  },
};
