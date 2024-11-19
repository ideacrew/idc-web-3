import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import { loadEnv } from 'vite'
import netlify from '@astrojs/netlify'

export default defineConfig({
	output: 'hybrid',
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
	],
	adapter: netlify(),
})
