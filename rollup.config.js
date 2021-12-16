import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'lib',
    format: 'cjs',
    exports: 'auto',
    sourcemap: true
  },
  plugins: [
    commonjs(),
    postcss({
      minimize: true,
      modules: false,
      use: {
        sass: null,
        stylus: null,
        less: { javascriptEnabled: true }
      },
      extract: true
    }),
    babel({
      configFile: './babel.config.js',
      babelHelpers: 'runtime',
      extensions: ['ts', 'tsx', '.js', '.jsx']
    }),
    typescript({ tsconfig: './tsconfig.json' })
  ]
};
