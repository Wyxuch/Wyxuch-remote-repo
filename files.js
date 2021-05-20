const glob = require("glob")
const path = require("path")


const test = glob.sync("build/static/?(js|css)/*.?(js|css)").map(f => path.resolve(__dirname, f)).concat(glob.sync("build/*.?(js|css|pdf|jpg|png|gif|svg|ico)").map(f => path.resolve(__dirname, f)))

console.log(test)