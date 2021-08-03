/**
 * @Description:  测试vue2打包
 * @Author: lovemybb
 * @Date: 2021-08-03
 */
const fs = require('fs')
if(fs.existsSync('./example/dist/copyright.txt')&&fs.readFileSync('./example/dist/copyright.txt').length !== 0){
  console.log('successed')
}else{
  console.error('copyright.txt not exists')
  console.error('failed')
}