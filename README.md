<!--
 * @Description: 
 * @Author: liu lianpeng
 * @Date: 2021-08-03
-->
# webpack-copyright-plugin
webpack-copyright-plugin

# install
```js
npm i webpack-copyright-plugin

```
# example vue2
```js
const CopyrightWebpackPlugin = require('webpack-copyright-plugin')
module.exports = {
  configureWebpack: {    
    plugins: [
      new CopyrightWebpackPlugin({
        copyright:"test",
        projectName:"testProjectName"
      })
    ]
  },
}
```