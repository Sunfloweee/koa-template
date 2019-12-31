const requireDirectory = require('require-directory')
const Router = require('koa-router')
class InitManager {
  static initCore(app) {
    InitManager.app = app
    InitManager.initLoadRouters()
    InitManager.loadConfig()
  }

  static initLoadRouters() {
    /**
     * @param1 固定参数 module
     * @param2 要加载的模块文件路径
     * @param3 每加载一个参数执行的函数
     */
    const apiDirectory = process.cwd() + '/app/api'
    requireDirectory(module, apiDirectory, { visit: whenModuleLoad })
    function whenModuleLoad(obj) {
      if (obj instanceof Router) {
        InitManager.app.use(obj.routes())
      }
    }
  }

  /**
   * 加载配置
   * @param {string} param 
   * @param {string} path 
   */
  static loadConfig(param = 'config', path = '') {
    const configPath = path || process.cwd() + '/config/config.js'
    const config = require(configPath)
    global[param] = config 
  }
}

module.exports = InitManager
