const express = require("express");
const ReactSSR = require('react-dom/server');
const app = express();
const path = require('path');
const fs = require('fs');

const isDev = process.env.NODE_ENV === "development";

if (!isDev) {
    const serverEntry = require('../dist/server-entry').default;
    const template = fs.readFileSync(path.resolve(__dirname, "../dist/index.html"), "utf8");
    app.use('/public', express.static(path.resolve(__dirname, '../dist')));
    app.get('*', function (req, res) {
        const str = template.replace("<!--app-->", ReactSSR.renderToString(serverEntry));
        res.send(str);
    })
}else{
    const tool=require('./utils/utils').serverUtils;
    tool(app);
}



app.listen(3333, () => {
    console.log("server is listening 3333");
})