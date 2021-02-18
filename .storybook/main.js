/*
 * File: main.js
 * Project: webapp-rrs
 * Created Date: Monday, January 11th 2021, 11:30:27 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday January 11th 2021 11:30:27 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

const path = require('path');

module.exports = {
	stories: ['../src/components/**/*.stories.js'],
	addons: ['@storybook/addon-essentials'],
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		config.module.rules.push({
			test: /\.scss$/,
			exclude: /node_modules/,
			use: [
				'babel-loader',
				{
					loader: require('styled-jsx/webpack').loader,
				},
				'sass-loader',
			],
			include: path.resolve(__dirname, '../src'),
		});

		// Return the altered config
		return config;
	},
};
