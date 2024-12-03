import type { Config } from 'tailwindcss'

const fontFamilies = [
  'Quicksand, Inter, Inter-Italic, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
]

export default <Partial<Config>>{
  content: ['docs/content/**/*.md', './styles/**/*.ts'],
  theme: {
    fontFamily: {
      sans: fontFamilies, // sans overrides tailwind default. No need to write class font-sans or other name
      quicksand: ['Quicksand'],
      inter: ['Inter'],
    },
  },
}
