import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  root: '.',
  resolve: {
    alias: {
      '@': '/src', // `@`를 사용하여 소스 디렉터리를 참조
    },
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, '.', 'index.html'),
    },
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true, // 빌드 시 outDir을 비우고 시작
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
});
