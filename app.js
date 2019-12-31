const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser') // 用于获取 post 传参
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')

// 用于获取 post 请求提交的数据
// app.use(catchError)
app.use(bodyParser())
InitManager.initCore(app)

const PORT = 3000
app.listen(PORT, () => console.log('服务启动成功 >> 监听端口: 3000 。'))
