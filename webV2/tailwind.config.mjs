/** @type {import('tailwindcss').Config} */
const safelist = [
	// ...['group-hover/child:flex', 'group-hover/child:opacity-100', 'group/child'],
	// ...['group-hover/parent:flex', 'group-hover/parent:opacity-100', 'group/parent'],
	{
		pattern: /grid-cols-./,
		variants: ['sm', 'md', 'lg', 'xl', '2xl', 'xs'],
	  },
	// ...[...[1,2,3,4,5,6,7,8].map(n => `grid-cols-${n}`)],
	// ...[...[1,2,3,4,5,6,7,8].map(n => `lg:grid-cols-${n}`)],
	// ...[...[1,2,3,4,5,6,7,8].map(n => `xs:grid-cols-${n}`)],
	'mb-64',
  ]


export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'sm': '480px',
				// => @media (min-width: 992px) { ... }
			  },
		},
	},
	safelist,
	plugins: [],
}
