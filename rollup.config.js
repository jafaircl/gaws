import typescript from 'rollup-plugin-typescript2'
import uglify from 'rollup-plugin-uglify'
import cleanup from 'rollup-plugin-cleanup'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';
import html from 'rollup-plugin-html'
import scss from 'rollup-plugin-scss'

const entry = process.env.entry

export default {
  entry: `packages/${entry}.ts`,
  dest: `packages/${entry}.js`,
  format: entry === 'gaws/test' ? 'es' : 'iife',
  moduleName: 'gaws',
  // external: [ 'react' ],
  plugins: [
    html({
      include: '**/*.html',
      htmlMinifierOptions: {
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
				conservativeCollapse: true,
				minifyJS: true
			}
    }),
    scss({output: false}),
    resolve({ 
      module: true,
      jsnext: true,
      extensions: ['.js','.jsx','.ts','.tsx','.html']
    }),
    commonjs(),
    typescript({
      // typescript: require('typescript'),
      // jsx: 'react'
    }),
    cleanup({
      comments: 'none',
      extensions: ['.js','.ts','.tsx']
    }),
    (process.env.NODE_ENV === 'production' && uglify())
  ]
}