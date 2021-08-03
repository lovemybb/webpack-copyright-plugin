const CopyrightWebpackPlugin = require('../index')
module.exports = {
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    
    plugins: [
      new CopyrightWebpackPlugin({
        copyright:"test",
        projectName:"testProjectName"
      })
    ]
  },
}