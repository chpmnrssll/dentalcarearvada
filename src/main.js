import BootstrapVue from 'bootstrap-vue';
import DefaultLayout from './layouts/Default.vue';
import checkIfMobile from './util/checkIfMobile';

export default function(Vue, { head }) {
  // Add calendly widget Javascript before the closing </body> tag
  head.script.push({
    src: '/assets/calendly/widget.js',
    body: true,
    async: true,
  });

  // Preload local fonts
  const preloadFonts = [
    'OpenSans-Bold.woff2',
    'OpenSans-ExtraBold.woff2',
    'OpenSans-Light.woff2',
    'OpenSans-Regular.woff2',
    'OpenSans-SemiBold.woff2',
  ];
  preloadFonts.forEach(font => {
    head.link.push({
      rel: 'preload',
      href: `/assets/fonts/${font}`,
      as: 'font',
      type: 'font/woff2',
      crossorigin: true,
    });
  });

  Vue.use(BootstrapVue);
  Vue.component('DefaultLayout', DefaultLayout);
  Vue.mixin(checkIfMobile);
}
