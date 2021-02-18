/*
 * File: jest.config.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 5th 2021, 11:28:00 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday January 5th 2021 11:28:00 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

/**
 * Mock timezone set to GMT in Test environment
 */
process.env.TZ = "GMT";

/**
 * https://jestjs.io/docs/en/configuration.html
 */
module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/components/**/?(*.)+(snapshot|spec|test).js?(x)",
    "**/modules/**/?(*.)+(snapshot|spec|test).js?(x)",
    "**/reduxStore/**/?(*.)+(spec|test).js?(x)",
    "**/services/**/?(*.)+(spec|test).js?(x)",
    "**/utils/**/?(*.)+(spec|test).js?(x)",
  ],

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "**/components/**/!(*.stories)*.js",
    "**/modules/**/*.js",
    "**/reduxStore/**/*.js",
    "**/services/**/*.js",
    "**/utils/**/*.js",
  ],

  // A map from regular expressions to module names that allow to stub out resources, like images or styles with a single module.
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/src/__mocks__/jest/fileMock.js",
    "\\.(css|scss)$": "<rootDir>/src/__mocks__/jest/styleMock.js",
  },

  automock: false,
};
