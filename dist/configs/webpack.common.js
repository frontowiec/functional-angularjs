/**
 * Created by Marcin Sirocki
 * email: marcinsirocki@gmail.com
 */
module.exports = {
    entry: {
        app: './src/main.ts',
        vendor: ['angular']
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                loader: 'tslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loaders: [
                    'html-loader'
                ]
            },
            {
                test: /\.(css|scss)$/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    DIR: {
        TMP: '.tmp',
        SRC: 'src',
        BUILD: 'build'
    }
};
//# sourceMappingURL=webpack.common.js.map