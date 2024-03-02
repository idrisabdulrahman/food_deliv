import path from 'path'
import { Configuration } from 'webpack'

const config: Configuration = {
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
}

export default config
