import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  output:'server',
  adapter: node({
    mode:"standalone"
  }),
  integrations: [tailwind(), react(), compressor({gzip: true})],  
});