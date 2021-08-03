/**
 * @Description:  测试vue2打包
 * @Author: lovemybb
 * @Date: 2021-08-03
 */
 var runGitCommand = require('../lib/helpers/run-git-command')

runGitCommand('../example', 'add ./', function(err){
  runGitCommand('../example', 'commit -am "init test plugin"', function(err){

  })
})