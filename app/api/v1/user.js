const Router = require('koa-router')
// const { LinRouter } = require('lin-mizar')
const userApi = new Router({
  prefix: '/user' // router前缀
})

// const { LoginValidator } = require('../../validators/user')

userApi.get('/', (ctx, next) => {
  ctx.body = 'Hello World .'
})

userApi.post('/login/:id', async (ctx, next) => {
  ctx.body = { msg: 'hello ~' }
})

module.exports = userApi
