// @ts-check
const { devices, expect } = require('@playwright/test');
const { TIMEOUT } = require('node:dns');

const Config = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {   
    TIMEOUT: 5000
  },
  use: {
    browserName: 'chromium',
    headless: false, // Ensures headed mode
  },
};

module.exports = Config; // Export the Config object