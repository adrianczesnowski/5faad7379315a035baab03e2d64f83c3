import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    testMatch: ['./tests/**/*.test.tsx'],
    include: ["./**/*.test.ts", "./**/*.test.tsx"],
    globals: true
  },
});
