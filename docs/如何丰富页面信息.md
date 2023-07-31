---
title: "如何丰富页面信息"
date: 2021-06-23T09:52:08+08:00
---

在文章页里，一般会展示`Front Matter`如下字段:

- **title**         标题

- **date**          发布时间

- **categories**    分类 没有则不展示

- **tags**          标签 没有则不展示

- **cover**         封面(背景图) 没有则不展示

但是如果我们要在其他**其他着陆页**中也添加文章页这些信息的话，就需要新建`_index.md`添加说明:

其他着陆页有：`section`，`taxonomy`，`term`等，这里参考Hugo官方文档中的表格信息:

| Kind     	| Description                              	| Example                                                       	|
|----------	|------------------------------------------	|---------------------------------------------------------------	|
| home     	| The landing page for the home page       	| /index.html                                                   	|
| page     	| The landing page for a given page        	| `my-post`page (`/posts/my-post/index.html`)                   	|
| section  	| The landing page of a given section      	| `posts`section (`/posts/index.html`)                          	|
| taxonomy 	| The landing page for a taxonomy          	| `tags`taxonomy (`/tags/index.html`)                           	|
| term     	| The landing page for one taxonomy’s term 	| term`awesome` in `tags` taxonomy (`/tags/awesome/index.html`) 	|

Hugo官方文档: [default-taxonomies](https://gohugo.io/content-management/taxonomies/#default-taxonomies)

至于具体怎么说明，我自己英语水平有限，只发表一下自己的理解，不保证一定正确，如果有不对的地方欢迎指正！

着陆页我理解的就是一些页面类型，如下：

### Kind为home：表示的就是我们博客的首页

---

### Kind为page: 我们content下的所有md文件对应的html页面都是page

---

### Kind为section

在hugo中，可以在`content`目录下创建不同的文件夹来区分文章的类型，例如一个站点可能有技术文章和生活文章这两大类，一般情况我们可以通过`Front Matter`中的`categories`来区分，但是在hugo中我们可以在`content`中创建两个文件夹来单独管理，例如`/code/`和`/blog/`，`/code/`下的文章都是技术类文章，`/blog/`下的都是生活类文章。而我们这里的`section`在这里指的就是`code`和`blog`，当我们访问页面路径`/code`或者`/blog`这个页面时，我们所看到的页面Kind就是`section`。应该展示当前类型下的所有文章列表。

如果我们要丰富这类页面展示的内容，则可以在对应文件夹下创建一个`_index.md`，并设置`Front Matter`，方法跟我们设置文章的`Front Matter`一样。

如我们想给`/blog/`这个section下丰富一点内容，那么就在`/content/blog/`新建一个`_index.md`，设置如下类容：

```md
+++
title = "生活文章"
cover = "https://qiniu.sukoshi.xyz/src/images/68686407_p0.jpg@webp"
description = "记录个人生活"
+++
```

---

### Kind为taxonomy：

分类，在hugo中默认使用`tags`和`categories`来对文章进行分类，见[https://gohugo.io/content-management/taxonomies/#default-taxonomies](https://gohugo.io/content-management/taxonomies/#default-taxonomies)。

比如有一篇文章的`Front Matter`为以下内容：

```md
categories: [笔记]
tags: [js, html, css]
```

那么我们在访问`/categories`就会展示`笔记`这个类目，访问`/tags`会展示`js`,`html`,'css'这些类目。

如果我们要丰富这类页面展示的内容，方法跟`Kind为section`的一样，在`/content/categories/`新建一个`_index.md`，设置如下类容：

```md
+++
title = "聚合分类"
cover = "https://qiniu.sukoshi.xyz/src/images/68686407_p0.jpg@webp"
description = "站点下的所有文章分类"
+++
```

---

### Kind为term：

`term`和`taxonomy`是对应关系，`term`是`taxonomy`中的某一个。

举个例子：

`/categories`为`taxonomy`，展示的是站点下的所有分类。

`/categories/笔记`为`term`，展示的是站点下`笔记`分类下的所有文章。

这样就很好理解了。

如果要丰富这个页面，也是一样的，在`/content/categories/笔记/`新建一个`_index.md`，设置如下类容：


```md
+++
title = "技术笔记"
cover = "https://qiniu.sukoshi.xyz/src/images/68686407_p0.jpg@webp"
description = "学习笔记"
+++
```