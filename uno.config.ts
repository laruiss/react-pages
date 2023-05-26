// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetAttributify, 
  presetIcons,
} from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1,
      warn: true,
    }),
  ],
  transformers: [
    transformerAttributifyJsx()
  ],
})