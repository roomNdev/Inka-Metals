import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    include: {
      'fa6-brands': ['*']
    }
  }), markdoc({ ignoreIndentation: true })]
});