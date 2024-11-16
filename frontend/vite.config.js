import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Ensure .tsx is included
  },
  server: {
    host: '127.0.0.1', // Bind to 127.0.0.1 instead of localhost
  },
  optimizeDeps: {
    dedupe: ['react', 'react-dom'],
  },
});
