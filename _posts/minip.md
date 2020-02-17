## 名词

- AppId：是标识一个应用的，证明这个应用是平台授权的，和用户无关，开发不同应用需要生成不同 AppId，一个应用代码中需要维护 AppId 和 AppSecret，这样才被允许请求平台的接口，一个账号只能发布一个小程序
- AppSecret：这是和 AppId 对应的，AppId 就像应用的账号，AppSecret 就像应用的密码
- OpenID：为了标识用户在一个应用中的唯一性，用户在不同应用有不同的 OpenID
- UnionID：不同于 OpenID 在单个应用中的唯一性，UnionID 是标识用户在某开放平台下的唯一性，目的是使一个用户能关联该平台下的多个应用
- Access_Token：
- Refresh_Token：
- Signature：

## 小程序和 web 开发

web 开发的渲染线程和脚本线程是互斥的，也就是常说的单线程，而在小程序中，二者是分开的，分别运行在不同的线程中，没有 DOM API 和 BOM API。
![](/images/minip/1.png)
![](/images/minip/2.jpg)

## h5 获取微信头像

1. 获取 token（前端）
   https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=wwf824239781d1707c&corpsecret=VzCAXCkvcx0ISz8Q2FMErbgaWDmBb40B9zBq7XOa760
2. 点击获取 code（后端）
   https://open.weixin.qq.com/connect/oauth2/authorize?appid=wwf824239781d1707c&redirect_uri=https://zhuang.pinming.cn&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect
3. 根据 1、2 获取用户 ID（后端）
   https://qyapi.weixin.qq.com/cgi-bin/user/getuserinfo?access_token=ACCESS_TOKEN&code=CODE
4. 根据 ID 查找详细信息（后端）
   https://qyapi.weixin.qq.com/cgi-bin/user/get?access_token=ACCESS_TOKEN&userid=USERID

[钉钉开放平台](https://open-dev.dingtalk.com/#/index)
[钉钉开发文档](https://ding-doc.dingtalk.com/)
[微信开发文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html)
[腾讯客服](https://kf.qq.com/faq/170419ZbuQJN170419NvYJFV.html)
[企业微信管理后台](https://work.weixin.qq.com/wework_admin/frame)
