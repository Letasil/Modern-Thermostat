import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

const dev = process.env.ROLLUP_WATCH;

export default {
  input: 'src/modern-thermostat.ts',
  output: {
    file: 'dist/modern-thermostat.js',
    format: 'es',
    sourcemap: false,
    inlineDynamicImports: true,
  },
  plugins: [
    resolve({
      browser: true,
      dedupe: ['lit'],
    }),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: false,
      declarationMap: false,
      sourceMap: false,
    }),
    !dev && terser({
      format: {
        comments: false,
      },
      mangle: {
        safari10: true,
      },
    }),
  ].filter(Boolean),
  external: [],
};