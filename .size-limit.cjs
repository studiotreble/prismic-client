const pkg = require("./package.json");

module.exports = [pkg.module, pkg.main].filter(Boolean).map(path => ({ path }));
