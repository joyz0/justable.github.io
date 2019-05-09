---
title:  "Microservice"
date:   2019-04-23 20:01:00
categories: [blog]
tags: [backend]
---

### 微服务的诞生
曾今，一个后台项目P有A和B两个服务，且A需要调用B，则直接在A中执行B.method()。  
现今，后台大多是分布式架构，此时需要把B从P中分离成单独的服务供外部调用，那么就不能在A中执行B.method()了，它们现在不再是同一个项目。微服务就此诞生，它要解决的问题就是让A能够像调用本地服务一样调用B的服务。  
分离后A调用B，必然要通过网络请求，现在市面上有两种方案，RPC(Remote Produce Call)和HTTP，RPC是一个为后台模块调用服务的技术概念名词，它底层网络请求可以采用socket的长连接(事实如此)，也可采用HTTP。  
Dubbo采用的是RPC方案，Spring Cloud采用的是HTTP方案。

[1]: http://youzhixueyuan.com/comparison-of-dubbo-and-springcloud-architecture-design.html