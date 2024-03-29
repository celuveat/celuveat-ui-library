import svgr from '@svgr/rollup';
import url from '@rollup/plugin-url';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json' assert { type: 'json' };

const extensions = ['.ts', '.tsx', '.js', '.jsx'];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      url(),
      svgr({ icon: true }),
      peerDepsExternal(),
      babel({
        babelHelpers: 'runtime',
        exclude: 'node_modules/**',
        extensions,
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.ts'],
      }),
      postcss({ extensions: ['.css'], inject: true, extract: false }),
    ],
    external: ['react', 'react-dom'],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/, 'react', 'react-dom'],
  },
];
