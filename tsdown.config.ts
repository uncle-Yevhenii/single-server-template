import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  target: 'node22',
  platform: 'node',
  outDir: 'dist',
  sourcemap: true,
  fixedExtension: false,
  ignoreWatch: ['**/*.test.ts', '**/*.spec.ts', 'dist/**'],
  minify: !process.env['production'],
});
