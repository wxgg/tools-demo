const { pathToRegexp, match, parse, compile } = require("path-to-regexp");
const regexp = pathToRegexp("/getBannerList/(.*)");

console.log(regexp.exec("/getBannerList/ddd/dddsdf"))