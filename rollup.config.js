import resolve from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  resolve(),
  babel({
    exclude: 'node_modules/**',
    babelHelpers: 'bundled'
  }),
  terser()
]

export default [
	// browser-friendly UMD build
	{
		input: 'src/Indicator.js',
		external: ['react'],
		output: {
			name: 'Indicator',
			file: pkg.browser,
      format: 'umd',
      globals: {
        'react': 'React'
      }
		},
		plugins
	},
	{
		input: 'src/Indicator.js',
		external: ['react'],
		output: [
			{ file: pkg.main, format: 'cjs', exports: 'auto' },
			{ file: pkg.module, format: 'es' }
    ],
    plugins
	}
];