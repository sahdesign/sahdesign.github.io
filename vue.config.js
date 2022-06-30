const path = require('path');
const bootstrapSassAbstractsImports = require('vue-cli-plugin-bootstrap-vue/sassAbstractsImports.js');
module.exports = {
	chainWebpack: config => {
		config.resolve.alias.set(
		  'vue$',
		  // If using the runtime only build
		//   path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
		  // Or if using full build of Vue (runtime + compiler)
		  path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
		)
		config.module
		  .rule('vue')
		  .use('vue-loader')
		  .loader('vue-loader')
		  .tap(options => {
			options.transformAssetUrls = {
			  img: 'src',
			  image: 'xlink:href',
			  'b-avatar': 'src',
			  'b-img': 'src',
			  'b-img-lazy': ['src', 'blank-src'],
			  'b-card': 'img-src',
			  'b-card-img': 'src',
			  'b-card-img-lazy': ['src', 'blank-src'],
			  'b-carousel-slide': 'img-src',
			  'b-embed': 'src'
			}
			return options
		})
		config.module
			.rule('images') // -> Default configuration
			.test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
			.use('url-loader')
			.loader('url-loader')
			.options({
			limit: 4096,
			fallback: {
				loader: 'file-loader',
				options: { name: 'img/[name].[ext]' },
			},
		})
		.end()
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: bootstrapSassAbstractsImports.join('\n')
			},
			scss: {
				additionalData: [...bootstrapSassAbstractsImports, ''].join(';\n')
			}
		}
	}
}