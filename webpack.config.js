const path = require('path');

module.exports = {
    entry: './flaskr/static/index.js', // Path to your JS file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development', // Change to 'production' for optimized builds
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // If you use modern JavaScript features
                },
            },
        ],
    },
};
