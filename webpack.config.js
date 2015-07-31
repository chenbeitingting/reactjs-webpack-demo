/*webpack-dev-server --content-base ./src --hot*/
var path = require('path');
module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/app.jsx']
    },
    output: {
        // pack dir
        path: "build",
        // pack file
        filename: "bundle.js"
        // lazy pack file [id] 1,2,3.....
/*        chunkFilename: "[id].bundle.js"*/
        //config lazy load relative path
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loader: "jsx-loader" },
            { test: /\.css$/, loader: "style!css" },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
    }
}