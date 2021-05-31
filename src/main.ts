import 'virtual:windi.css'
import './styles/main.scss'
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'layouts-generated'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },

)
