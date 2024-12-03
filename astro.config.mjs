import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import netlify from '@astrojs/netlify'
import yaml from '@rollup/plugin-yaml'

export default defineConfig({
	output: 'hybrid',
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
	],
	adapter: netlify(),
	vite: {
		plugins: [yaml()],
	},
})
