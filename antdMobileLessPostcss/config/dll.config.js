
const webpack = require('webpack');
const path=require('path');

const vendors = [
    'react',
    'react-dom',
    // ...其它库
];
 
module.exports = {
    output: {
        path:path.resolve(__dirname, '../dist'),
        filename: '[hash].[name].js',
        library: '[name]',
    },
    entry: {
        "lib": vendors,
    },
    plugins: [
        new webpack.DllPlugin({
            path:path.resolve(__dirname,'../dist/manifest.json'),
            name: '[name]',
            context: __dirname,
        }),
    ]
  }
