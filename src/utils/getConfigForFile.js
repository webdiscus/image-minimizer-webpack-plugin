"use strict";

const normalizeConfig = require("./normalizeConfig");

function getConfigForFile(filePath, options, result) {
  // Implement autosearch config on root directory of project in future
  return normalizeConfig(options.imageminOptions, { options, result });
}

module.exports = getConfigForFile;
