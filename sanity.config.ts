// ./sanity.config.ts|js
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

export default defineConfig({
	title: 'Netlify Astro Sanity',
	projectId: import.meta.env.PUBLIC_SANITY_STUDIO_PROJECT_ID,
	dataset: import.meta.env.PUBLIC_SANITY_STUDIO_DATASET,
	plugins: [structureTool()],
	schema: {
		types: [
			{
				type: 'document',
				name: 'post',
				title: 'Post',
				fields: [
					{
						name: 'title',
						title: 'Title',
						type: 'string',
					},
					{
						name: 'slug',
						title: 'Slug',
						type: 'slug',
						options: {
							source: 'title',
							maxLength: 96,
						},
					},
				],
			},
			{
				type: 'document',
				name: 'homePage',
				title: 'Home Page',
				fields: [
					{
						name: 'heroTitle',
						title: 'Hero Title',
						type: 'string',
						description: 'The main heading text on the home page',
					},
					{
						name: 'backgroundImage',
						title: 'Background Image',
						type: 'image',
						description: 'The background image for the hero section',
						options: {
							hotspot: true,
						},
					},
					{
						name: 'primaryButton',
						title: 'Primary Button',
						type: 'object',
						fields: [
							{
								name: 'text',
								title: 'Button Text',
								type: 'string',
							},
							{
								name: 'link',
								title: 'Button Link',
								type: 'string',
							},
						],
					},
					{
						name: 'secondaryButton',
						title: 'Secondary Button',
						type: 'object',
						fields: [
							{
								name: 'text',
								title: 'Button Text',
								type: 'string',
							},
							{
								name: 'link',
								title: 'Button Link',
								type: 'string',
							},
						],
					},
				],
			},
		],
	},
})
