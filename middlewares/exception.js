const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error)
    const isHttpException = error instanceof isHttpException
    const isDev = global.config.enviroment === 'dev'

    // 开发环境抛出未捕捉到的错误
    if (isDev && !isHttpException) {
      throw error
    }

    // 如果是自定义的错误内容 ， 抛出到客户端
    if (isHttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.status = error.code
    } else {
      ctx.body = {
        msg: 'We make a mistake.',
        error_code: 999,
        request: `${ctx.method} ${ctx.path}`
      }
      ctx.code = 500
    }
  }
}

module.exports = catchError
