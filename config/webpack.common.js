const path = require('path');

const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextWebpackPlugin =  require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = path.resolve(__dirname, '..');
const root = path.join.bind(path, ROOT);
const dist = path.join.bind(path, ROOT)('dist');

const EVENT = process.env.npm_lifecycle_event || '';

const AOT = EVENT.includes('aot');

module.exports = function (options) {
    isProd = options.env === 'production';
    console.log(AOT);
    return {
        entry: {
            'polyfills': './src/polyfills.ts',
            'main': AOT ? './src/main.browser.aot.ts' :
                './src/main.browser.ts'
        },
        output: {
            filename: '[name].bundle.js',
            path: dist
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],
            modules: [root('src'), root('node_modules')]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'awesome-typescript-loader',
                            options: {
                                configFileName: 'tsconfig.webpack.json'
                            }
                        },
                        {
                            loader: 'angular2-template-loader'
                        }
                    ]
                },
                {
                    test: /\.scss$/,
                    use: ExtractTextWebpackPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.html$/,
                    use: 'raw-loader',
                    exclude: [root('src/index.html')]
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                    { from: 'src/assets', to: 'assets' }
            ]),
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                inject: 'body',
                chunksSortMode: 'dependency'
            }),
            new ExtractTextWebpackPlugin({
             filename: 'style.css'
            }),
            /**
             * Plugin: ContextReplacementPlugin
             * Description: Provides context to Angular's use of System.import
             *
             * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
             * See: https://github.com/angular/angular/issues/11580 << END of discussion Angular 4 solution
             */
            new ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)@angular/,
                root('src')
            )
        ],
        devServer: {
            contentBase: dist,
            compress: true,
            port: 9000
        }
    }
};