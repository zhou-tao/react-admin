import { resolve } from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import { parse } from 'vite-plugin-env-parser'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode }) => {
  const envDir = resolve(__dirname, 'env')
  const env = parse(loadEnv(mode, envDir))
  const {
    VITE_PORT,
    VITE_BASE_API,
    VITE_USE_PROXY,
    VITE_PUBLIC_PATH,
    VITE_DROP_CONSOLE
  } = env
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@c': resolve(__dirname, 'src/components'),
        '@h': resolve(__dirname, 'src/hooks'),
        '#': resolve(__dirname, 'types')
      }
    },
    envDir,
    server: {
      port: VITE_PORT,
      host: true,
      open: true
    },
    plugins: [react()]
  }
})
