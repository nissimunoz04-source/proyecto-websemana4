import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],

    server: {
      proxy: {
        '/api/actividades': {
          target: 'https://app.nocodb.com',
          changeOrigin: true,

          rewrite: () =>
            '/api/v3/data/paiwl4oiycvrat2/mkgrfxql5fprchl/records',

          headers: {
            'xc-token': env.NOCODB_API_TOKEN || ''
          }
        }
      }
    }
  }
})