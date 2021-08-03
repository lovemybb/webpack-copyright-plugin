/**
 * @Description: 入口
 * @Author: lovemybb
 * @Date: 2021-08-03
 */
 var getGitInfo = new (require('./lib/git-info'))()


class CopyrightWebpackPlugin{

  /**
   * 
   * @param {
   *  copyright 版权所属方
   *  projectName 项目名称
   *  showBuildTime 是否显示打包时间，默认显示true
   *  showBuildBranch 是否显示打包分支，默认显示true
   *  content  附件信息
   * } options 
   */
  constructor(options={}) {
    this.options = Object.assign({
      copyright:'',
      projectName:'',
      showBuildTime:true,
      showBuildBranch:true,
      content:''
    },options) ;
    this.copyrightContent = ''
    // 获取git 信息
    const date = new Date()
    const commitId = getGitInfo.commithash()
    const branch = getGitInfo.branch('name-rev ' + commitId)
    // 生成copyRight 信息
    let contentArr = []
    contentArr.push(`Copyright @${this.options.copyright}`)
    contentArr.push(`项目名：${this.options.projectName}`)
    if(this.options.showBuildTime)
      contentArr.push(`打包时间：${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    if(this.options.showBuildBranch){
      contentArr.push(`分支:${JSON.stringify(branch)}`)
      contentArr.push(`commitId:${JSON.stringify(commitId)}`)
    }
    contentArr.push(`${this.options.content}`)
    this.copyrightContent =String(contentArr.join('\n'))
  }

  apply(compiler) {
    const that = this
    compiler.hooks.emit.tapAsync(
      'CopyrightWebpackPlugin',
      (compilation, cb) => {
        // 写入文件
        compilation.assets['copyright.txt'] = {
          source: function () {
            return that.copyrightContent;
          },
          size: function () {
            return that.copyrightContent.length;
          },
        };
        cb();
      }
    );
  }
}

module.exports = CopyrightWebpackPlugin