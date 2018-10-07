"use strict";
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

const defaultConfig = {
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: [webpackNodeExternals()]
};

const nodeConfig = {
    entry: { node: './src/index.ts' },
    target: 'node',
    ...defaultConfig
};

module.exports = [nodeConfig];