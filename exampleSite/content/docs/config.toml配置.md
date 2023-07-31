---
title: "config.toml配置"
date: 2021-06-09T11:32:04+08:00
---

config配置文件中配置可参考Hugo官方文档: [Configure Hugo](https://gohugo.io/getting-started/configuration/)

这里主要补充`kagome`中所需要的一些配置项:

`kagome`所需的配置项都在`config.toml`中的`[params]`中。


## 导航栏

导航栏的定义放在`menu`中，目前支持`menu.main`。


Menu的相关属性可以查看Hugo官方文档:[menus](https://gohugo.io/variables/menus/)


## 基本配置项:

在`config.toml`下的`[params]`中，可以添加如下自定义字段：

| key          	| type   	| describe                       	| example           	|
|--------------	|--------	|--------------------------------	|-------------------	|
| keywords     	| array  	| 站点关键词                     	| ["hugo", "theme"]    |
| description  	| string 	| 站点描述                       	| 一个新的站点          |
| mainSections 	| array  	| 主要内容sections               	| 默认值["posts"]       |
| beian        	| string 	| 备案信息                       	| xxxxxx            	 |
| showAllPagesInArchive | boolean | 在归档页面`/archives`中是否展示所有section（分类）下的文章，如果为`false`则只展示`mainSections`下的所有文章 | true |

**其中如果没有配置`mainSections`，那么则会默认获取`posts`下的文章，所以如果没有配置`mainSections`请确保在`content/posts`下有内容**

## analytics

由于HUGO内置已经接入了谷歌分析，所以目前在Kagome中只接入了百度分析

analytics相关的配置项在`[params]`下的`[params.analytics]`中:

```toml
[params.analytics]
  baidu = ""
```

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
