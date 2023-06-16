---
title: "如何丰富Banner信息"
date: 2021-06-23T09:52:08+08:00
categories: ['doc']
tags: 
cover: 
---

在文章页里，在banner中会展示`Front Matter`中的如下字段:

- **title** 标题

- **date** 发布时间

- **categories** 分类 没有则不展示

- **tags** 标签 没有则不展示

- **cover** 封面(背景图) 没有则不展示

在单页面里(如Link,About等)或**其他着陆页**在banner中会展示`Front Matter`中的如下字段:

- **title** 标题

- **description** 页面描述 没有则不展示

- **cover** 封面(背景图) 没有则不展示

文章页与单页面在hugo它们的`Kind`都是`page`!

其他着陆页有：`section`，`taxonomy`，`term`等，这里参考Hugo官方文档中的表格信息:

| Kind     	| Description                              	| Example                                                       	|
|----------	|------------------------------------------	|---------------------------------------------------------------	|
| home     	| The landing page for the home page       	| /index.html                                                   	|
| page     	| The landing page for a given page        	| `my-post`page (`/posts/my-post/index.html`)                   	|
| section  	| The landing page of a given section      	| `posts`section (`/posts/index.html`)                          	|
| taxonomy 	| The landing page for a taxonomy          	| `tags`taxonomy (`/tags/index.html`)                           	|
| term     	| The landing page for one taxonomy’s term 	| term`awesome` in `tags` taxonomy (`/tags/awesome/index.html`) 	|

Hugo官方文档: [default-taxonomies](https://gohugo.io/content-management/taxonomies/#default-taxonomies)

---

丰富`section`，`taxonomy`，`term`展示信息

#### section

如我们有个`posts`这样一个`section`，在`content/posts/`新建一个`_index.md`添加如下信息即可:

```md
+++
title = "POSTS"
cover = "https://qiniu.sukoshi.xyz/src/images/68686407_p0.jpg"
description = "记录生活点点点点点点点滴"
+++
```


#### taxonomy

如我们有个`tags`这样一个`taxonomy`，在`content/tags/`新建一个`_index.md`添加如下信息即可:

```md
+++
title = "聚合标签🏷️"
cover = "https://qiniu.sukoshi.xyz/src/images/68135789_p0.jpg"
description = "标签有点多哦～～～"
+++
```

#### term

如我们有个`摄影`这样的一个`term`，它属于`tags`这个`taxonomy`下，则我们在`content/tags/摄影/`下新建一个`_index.md`添加如下信息即可:

```md
+++
title = "记录美好生活"
cover = "https://qiniu.sukoshi.xyz/src/images/68135789_p0.jpg"
description = "玩器材的永远不懂摄影 -- 冠希哥"
+++
```