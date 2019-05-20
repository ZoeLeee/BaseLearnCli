const http = require('http');
const webpack = require('webpack');
const serverConfig = require('../../config/webpack.server');
const path = require('path');
const MemoryFileSystem = require("memory-fs");
const ReactDOM=require('react-dom/server');
const proxy=require('http-proxy-middleware');

const fs = new MemoryFileSystem(); // Optionally pass a javascript object
const url = "http://localhost:7777/index.html";

const getTemplate = () => {
  return new Promise((resolve, rej) => {
    http.get(url, function (res) {
      res.on('data', chunk => {
        resolve(chunk.toString())
      })
      res.on('err', (err) => {
        rej(err);
      })
    })
  })
}


const Module = module.constructor;
let serverBundle;
//获取bundle
let compiler = webpack(serverConfig);
compiler.outputFileSystem = fs;
compiler.watch({}, (err, stats) => {
  if (err) throw err;
  stats = stats.toJson();
  stats.errors.forEach(err => console.error(err));
  stats.warnings.forEach(warn => console.error(warn));
  const bundlePath = path.join(
    serverConfig.output.path, serverConfig.output.filename
  );
  // const bundle =eval(fs.readFileSync(bundlePath, "utf-8")).default;
  // serverBundle =bundle;
  const bundle = fs.readFileSync(bundlePath, "utf-8");
  const m = new Module();
  m._compile(bundle, "server-entry.js");
  serverBundle = m.default;
})
exports.serverUtils = (app) => {
  //输出
  app.use('/public/',proxy({
    target:'http://localhsot:7777'
  }))
  app.get('*', function (req, res) {
    //获取template
    getTemplate().then(data => {
      const content=ReactDOM.renderToString(serverBundle);
      res.send(data.replace('<!--app-->',content));
    })
  })
}