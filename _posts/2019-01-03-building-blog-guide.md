---
title:  "个人博客搭建指南--Mac"
date:   2018-01-03 14:24:00
categories: [blog]
tags: [guide]
---
> 第一次搭建个人博客，记录一下。

### 引言
一直想搭建一个博客来着，最近闲来无事，就网上搜了一波搭建流程，基于github-pages最为简单，零成本，只需要注册一个github账号即可。

### 整体流程
1.创建一个项目，命名成[name].github.io，这个项目作为博客的总入口
2.在项目settings中设置github pages的相关设置，如图
![](/2019-01-03-building-blog-guide/1.png)
3.选择一个喜欢的主题，也就是去找一个博客网站的模版，这样不用自己从头写页面，只需要发发文章，改改细节样式就行了，
可以在以下网站中找到一款适合自己的主题
jekyllthemes.org
jekyllthemes.io
4.git clone [主题的github地址]
5.这些主题是基于jekyll的，jekyll又是基于ruby的，ruby使用gem install指令安装外部包，如果电脑无法识别gem指令，
先执行xcode-select --install，它会安装一些系统命令扩展
6.执行gem install --user-install bundler jekyll指令，--user-install是为了把外部包安装到用户home目录，
这是为了避免macOS的一些权限问题，macOS的很多目录文件需要超级管理员权限，但在用户自己的home目录下就不会有问题
7.把下面两行指令加到~/.bash_profile中
export GEM_HOME=$HOME/gems
export PATH=$HOME/gems/bin:$PATH
8.进入到刚刚clone下来的目录中，执行bundle install安装依赖，之后执行
bundle exec jekyll serve --watch指令启动本地服务器预览博客
9.把这个本地主题提交到刚刚新建的[name].github.io项目中，就可以通过https://[name].github.io在线预览了

### FAQ
1.gem install没有反应怎么办？
可以执行gem sources -h查看管理下载源的常用操作指令，一般默认会去http://rubygems.org下载，
我们把它替换成https://gems.ruby-china.com，也就是执行
gem sources --remove http://rubygems.org
gem sources --add https://gems.ruby-china.com
gem sources list查看是否替换成功。
2.github pages只能在刚刚新建的[name].github.io项目中吗？
不是的，每个github项目都可以设成github pages，但要有个总入口，也就是[name].github.io项目，
比如我打算把个人博客分成文章和demos两个部分，在https://[name].github.io中放文章，
在https://[name].github.io/demos中放demo，只需再新建一个名为demos的项目，然后再在settings中设置即可。
![](/2019-01-03-building-blog-guide/2.png)


