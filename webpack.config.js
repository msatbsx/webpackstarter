module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                 loader: "less-loader", options: {
                    sourceMap: true
                }
            }]
        },
        {
            test: /\.(png|jpg|svg)$/,
            use: [{
                loader: 'url-loader?limit=40000'
            }],
        }
        ]
    },
    resolve : {
        alias: {
          'style.less': __dirname + "/styles/less.less"
        }
    }
};