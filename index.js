const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

module.exports = class GridsomePluginBundleAnalyzer {
	constructor(api, options = {}) {
		const production = process.env.NODE_ENV === 'production';

		api.chainWebpack((webpackConfig) => {
			if (production || !options.onlyProduction) {
				webpackConfig
					.plugin('plugin-bundle-analyzer')
					.use(BundleAnalyzerPlugin)
					.init((Plugin) => new Plugin(options.analyzerOptions));
			}
		});
	}

	static defaultOptions() {
		return {
			onlyProduction: true,
			analyzerOptions: {
				analyzerPort: 'auto',
				analyzerMode: 'static'
			}
		};
	}
};
