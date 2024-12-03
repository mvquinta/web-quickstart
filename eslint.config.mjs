import antfu from '@antfu/eslint-config'
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    // ...@antfu/eslint-config options
    stylistic: {
      indent: 2, // 4, or 'tab'
      // quotes: 'single',
      // semi: true,
    },
  }),
  // ...add other rules
)
