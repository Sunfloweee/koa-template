// Http 异常信息基类
class HttpException extends Error {
  constructor(msg = '服务器错误', errorCode = 10000, code = 400) {
    super()
    this.msg = msg
    this.error_code = errorCode
    this.code = code
  }
}

// 参数类型错误类
class ParameterException extends HttpException {
  constructor() {
    super(msg, errorCode)
    this.code = 400
    this.msg = msg || '参数错误'
    this.error_code = this.errorCode || 10000
  }
}

// 响应成功类
class Success extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 201
    this.msg = msg || 'ok'
    this.error_code = errorCode || 0
  }
}

// 未查询到资源异常响应类
class NotFound extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 404
    this.msg = msg || '资源未找到'
    this.error_code = errorCode || 10000
  }
}

// 验证失败类
class AuthFailed extends HttpException {
  constructor(msg, errorCode) {
    super()
    this.code = 401
    this.msg = msg || '授权失败'
    this.error_code = errorCode
  }
}

module.exports = {
  HttpException,
  ParameterException,
  NotFound,
  AuthFailed,
  Success
}
