import type * as Config from 'ts-jest'

const config: Config.JestConfigWithTsJest = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
}

export default config
