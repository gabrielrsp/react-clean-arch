const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'), //path onde será gerado o bundle
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.scss'],  // qualquer mudança em arquivos desses tipos, executará um reload
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      use: [
        {
        loader: 'style-loader'
        }, 
        {
          loader: 'css-loader',
          options: {
            modules: true
          }
        },
        {
          loader: 'sass-loader'
        },  
      ]
    }]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true, //gerar bundle e rodar o server
    },
    static : './public',
    historyApiFallback: true  // Por padrão o webpack so escuta a rota raiz do projeto e essa propriedade PERMITE colocar qualquer rota
  },
  externals: { // tudo que fica aqui não é incluído no bundle
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}