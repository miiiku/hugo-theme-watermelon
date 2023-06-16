---
title: "config.toml配置"
date: 2021-06-09T11:32:04+08:00
categories: ['doc']
tags: ['config']
description: "config.toml在kagome中的配置项"
toc: true
---

config配置文件中配置可参考Hugo官方文档: [Configure Hugo](https://gohugo.io/getting-started/configuration/)

这里主要补充`kagome`中所需要的一些配置项:

`kagome`所需的配置项都在`config.toml`中的`[params]`中。


## 导航栏

导航栏的定义放在`menu`中，目前支持`menu.main`和`menu.social`两种。

`menu.main`是页面顶部的主要导航栏，而`menu.social`则是页面底部的常用社交地址。

Menu的相关属性可以查看Hugo官方文档:[menus](https://gohugo.io/variables/menus/)

在`menu.social`中，目前只添加了`[github, twitter, instagram, weibo, zhihu]`这几个社交地址的Icon，采用的是svg，如果你要添加更多的社交地址，主要在`<theme>/layouts/partials/footer.html`自定义更多的社交图标。

添加一个`GITHUB`社交地址:

```toml
[menu]
  [[menu.social]]
    # 唯一标识符
    identifier = "github"
    # 名称
    name = "github"
    # url地址
    url = "https://github.com/miiiku"
    # 权重 越小越靠前
    weight = 1
```

## 基本配置项:

| key          	| type   	| describe                       	| example           	|
|--------------	|--------	|--------------------------------	|-------------------	|
| keywords     	| array  	| 站点关键词                     	| ["hugo", "theme"] 	|
| description  	| string 	| 站点描述                       	| 一个新的站点      	|
| mainSections 	| array  	| 主要内容sections               	| ["posts"]         	|
| beian        	| string 	| 备案信息                       	| xxxxxx            	|
| toc_show_len 	| number 	| 指定内容长度以后出现目录widget 	| 200               	|

**其中如果没有配置`mainSections`，那么则会默认获取`posts`下的文章，所以如果没有配置`mainSections`请确保在`content/posts`下有内容**

## analytics

由于HUGO内置已经接入了谷歌分析，所以目前在Kagome中只接入了百度分析

analytics相关的配置项在`[params]`下的`[params.analytics]`中:

```toml
[params.analytics]
  baidu = ""
```

## widget

widget小部件相关配置项在`[params]`下的`[params.widget]`中:

其中`author`小部件数据来源与`config.toml`下的`author`，它需要`name`，`description`，`avatar`这三个字段，如:

```toml
[author]
  name = "Sukoshi"
  email = "guanquanhong@163.com"
  description = "梅花鹿的角叫鹿角"
  avatar = "https://s.gravatar.com/avatar/7b5a0b07a98895278cfa862b1f32ae8f?s=200&r=g&d=retro"
```

其中`articles`小部件内容是根据当前文章`Front Matter`中的`categories`来查找最新的文章。

如果当前文章没有`categories`或者没有相关文章，则会去查找`tags`的相关文章。

如果也没有相关数据最终会去找当前文章`sections`下的最新文章。

| key              	| type   	| default 	| describe             	|
|------------------	|--------	|---------	|----------------------	|
| articles_count   	| number 	| 6       	| 相关文章widget条目数 	|
| categories_count 	| number 	| 6       	| 分类widget条目数     	|
| tags_count       	| number 	| 12      	| 标签widget条目数     	|


## aplayer 音乐播放器

aplayer相关配置项在`[params]`下的`[params.aplayer]`中:

具体的配置项描述可以查阅aplayer官方文档 [aplayer文档地址](https://aplayer.js.org/#/)

目前支持的相关参数如下

| key      	| default   	| describe                                                     	|
|----------	|-----------	|--------------------------------------------------------------	|
| theme    	| '#b7daff' 	| 主题色                                                       	|
| autoplay 	| false     	| 音频自动播放                                                 	|
| loop     	| 'all'     	| 音频循环播放, 可选值: 'all', 'one', 'none'                   	|
| mutex    	| true      	| 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 	|


## dplayer 音乐播放器

dplayer相关配置项在`[params]`下的`[params.dplayer]`中:

具体的配置项描述可以查阅dplayer官方文档 [dplayer文档地址](https://dplayer.js.org/#/)

目前支持的相关参数如下

| key      	| default   	| describe                                                     	|
|----------	|-----------	|--------------------------------------------------------------	|
| theme    	| '#b7daff' 	| 主题色                                                       	|
| autoplay 	| false     	| 视频自动播放                                                 	|
| loop     	| false     	| 视频循环播放                                                 	|
| mutex    	| true      	| 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器 	|