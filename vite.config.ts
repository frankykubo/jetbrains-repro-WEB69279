import { dirname, resolve } from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import { defineConfig } from 'vite';
import vuetify from 'vite-plugin-vuetify';
import svgLoader from 'vite-svg-loader';

export default defineConfig(() => {
  const plugins = [
    vue({
      script: {
        defineModel: true,
      },
      include: [
        'src/**/*.vue',
      ],
      template: {
        compilerOptions: {
          hmr: true,
          isCustomElement: (tag) => tag === 'range-selector',
        },
      },
    }),
    svgLoader(),
    VueI18nPlugin({
      include: [resolve(dirname(fileURLToPath(import.meta.url)), './src/lang/sk'), resolve(dirname(fileURLToPath(import.meta.url)), './src/lang/en')],
      jitCompilation: true,
    }),
    vuetify(),
  ];
  return {
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
