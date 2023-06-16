---
title: "i18n多语言配置"
date: 2021-06-22T17:51:58+08:00
categories: ['doc']
tags: ['i18n']
cover: 
---

Hugo多语言配置相关官方文档：[Multilingual Mode](https://gohugo.io/content-management/multilingual/)

`kagome`默认只有较少的单词实现了多语言配置 ~~(准不准我也不敢保证)~~ 

且只配置了`简体中文`,`繁体中文`,`日语`和`英语`

详情请查看`kagome/i18n/`目录下相关文件

你也可以在里面添加更多的关键词来丰富你的多语言配置

在Hugo中默认当前语言为`en`，修改当前语言为简体中文编辑`config.toml`:

```toml
defaultContentLanguage = "zh-cn"
```
