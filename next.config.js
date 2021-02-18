/*
 * File: next.config.js
 * Project: webapp-rrs
 * Created Date: Monday, December 28th 2020, 11:05:30 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Monday December 28th 2020 11:05:30 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: require("styled-jsx/webpack").loader,
          options: {
            type: "scoped",
          },
        },
        "sass-loader",
      ],
    });

    return config;
  },
};
