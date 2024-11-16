import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure .tsx is included
  },
  base: "/",
  preview: {
    port: 5174,
    strictPort: true,
  },
  server: {
    port: 5174,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5174",
  },
  optimizeDeps: {
    dedupe: ['react', 'react-dom'],
  },
});
