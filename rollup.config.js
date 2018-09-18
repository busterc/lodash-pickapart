import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
  // Browser-friendly UMD build
  {
    input: 'lib/index.js',
    output: {
      file: pkg.browser,
      format: 'iife',
      name: 'lodashPickapart'
    },

    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**']
      }),
      uglify()
    ]
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // the `targets` option which can specify `dest` and `format`)
  {
    input: 'lib/index.js',
    output: [{ file: pkg.main, format: 'cjs' }, { file: pkg.module, format: 'es' }],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        exclude: ['node_modules/**']
      })
    ]
  }
];
