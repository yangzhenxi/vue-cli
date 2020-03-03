const Mock = require('mockjs') // 获取mock对象

const domain = 'http://mockjs.com/api' // 定义默认域名，随便写

Mock.mock(`${domain}/get`,
  {
    message: '成功',
    code: 0,
    Object: {
      token: 'a72d14633e244aad8e0cf2260b06c62e'
    }
  }
)
