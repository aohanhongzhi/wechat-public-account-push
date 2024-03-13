/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {gh_2827e3b00e51

  // 使用微信测试号：公众号APP_ID
  APP_ID: "wx0fdc7f220f6b0eb8",

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: "823e91159ab29eb73b1e62eecd933ed5",

  PROVINCE: '浙江',
  CITY: '温州',

  USERS: ["oOkjD6h04y9KQm6RqKfrpKry6b4I
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '04-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝宝', year: '1997', date: '02-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '你的宝宝', year: '2000', date: '11-29',
        },
        {
          type: '节日', name: '相识纪念日', year: '2024', date: '01-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2024-02-23' },
      
      ],
    },


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oOkjD6l3Yblp5YpCg36dl5QK1j_Q',
    }
  ],

}

module.exports = USER_CONFIG

