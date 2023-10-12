import sass from 'rollup-plugin-sass';
import less from 'rollup-plugin-less';

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		format: 'iife'
	},
	plugins: [
		sass({
			output: 'dist/bundle.css',
			options: {
				outputStyle: 'compressed'
			}
		}),
		less({
			output: 'dist/bundle.less.css',
			options: {
				compress: true
			}
		})
	]
};