import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '18' }]],
        // target: 版本配置,可确保编译器生成的代码与你的 React 版本兼容。
        // target 指定你正在使用的 React 版本（17、18 或 19）。
      },
    }),
  ],
  optimizeDeps: {
    include: [
      'react-compiler-runtime',
      '@chakra-ui/react',
      '@emotion/react',
      '@emotion/styled',
      'framer-motion',
    ],
  },
});

console.log('Vite config loaded!');
