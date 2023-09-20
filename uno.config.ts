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
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      scale: 1,
      warn: true,
    }),
  ],
  transformers: [
    transformerAttributifyJsx()
  ],
})