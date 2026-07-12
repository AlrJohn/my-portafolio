import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
  const buildEnv = {
    ...loadEnv(mode, process.cwd(), ''),
    ...process.env,
  }
  const release = buildEnv.VERCEL_GIT_COMMIT_SHA || buildEnv.GITHUB_SHA || 'local'
  const sentryBuildEnabled = mode === 'production'
    && buildEnv.SENTRY_AUTH_TOKEN
    && buildEnv.SENTRY_ORG
    && buildEnv.SENTRY_PROJECT

  let sentryPlugin = null
  if (sentryBuildEnabled) {
    try {
      const mod = await import('@sentry/vite-plugin')
      sentryPlugin = mod.sentryVitePlugin({
        authToken: buildEnv.SENTRY_AUTH_TOKEN,
        org: buildEnv.SENTRY_ORG,
        project: buildEnv.SENTRY_PROJECT,
        release: {
          name: release,
        },
        sourcemaps: {
          filesToDeleteAfterUpload: ['./dist/**/*.map'],
        },
      })
    } catch {
      sentryPlugin = null
    }
  }

  return {
    resolve: {
      alias: {
        '@sentry/react': fileURLToPath(new URL('./src/shims/sentry-react.js', import.meta.url)),
      },
    },
    define: {
      __APP_RELEASE__: JSON.stringify(release),
    },
    build: {
      sourcemap: sentryBuildEnabled ? 'hidden' : false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('/node_modules/@sentry/')) return 'sentry'
            return undefined
          },
        },
      },
    },
    plugins: [
      react(),
      sentryPlugin,
    ].filter(Boolean),
    test: {
      environment: 'jsdom',
      setupFiles: './src/test/setup.js',
      css: true,
    },
  }
})
