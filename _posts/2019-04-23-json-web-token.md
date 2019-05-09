---
title:  "Json Web Token"
date:   2019-04-23 20:19:00
categories: [blog]
tags: [JWT]
---

### JWT的诞生
一项技术的诞生必然是为了解决那个时代面临的某个问题。  
传统的用户认证流程是客户端放松用户账号密码，服务端接收并存储到session中(内存中)，并返回session_id并写入到cookie中，用户之后的一系列请求都会通过cookie把session_id传递给服务端。  
但是在分布式架构的后端应用中，就会出问题。用户的登陆信息只会被分配到集群中的某一台服务器中的session中，其他服务器无法获取。  
一种解决思路是把session持久化，集群中的每台服务器都去持久层获取；
另一种解决思路就是干脆在服务端不保存session了，而是保存在客户端，客户端每次请求都发回服务端。这必然导致安全问题，JWT就是来实现此思路的具体方案。

[1]: http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html