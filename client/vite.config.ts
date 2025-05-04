// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr     from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    // 1️⃣ React plugin first
    react(),
    // 2️⃣ Then SVGR plugin
    svgr({
      svgrOptions: {
        icon: true,
        exportType: 'named',         // so we can import { ReactComponent }
        namedExport: 'ReactComponent',
      },
      include: '**/*.svg?react',     // ensure we pick up `?react` imports
    }),
  ],
});
