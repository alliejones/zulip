module.exports = {
    entry: './static/js/src/main.js',
    devtool: 'eval',
    output: {
        path: './static/js',
        filename: 'bundle.js'
    },
    devServer: {
        host: '0.0.0.0',
        port: 9999
    }
};
