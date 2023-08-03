---
title: "Front Matter 相关参数说明"
date: 2021-06-18T09:29:58+08:00
---

## Front Matter

`Front Matter`一般放在文章的最顶部，Hugo支持三种书写格式，

1. `TOML`使用`+++`来包裹内容

2. `YAML`使用`---`来包裹内容

3. `JSON`使用`{`和`}`来包裹内容

可配置的内容见Hugo官方文档: [front-matter](https://gohugo.io/content-management/front-matter/)。

## Archetypes

在使用`hugo new`来创建文章时，会查找`archetypes`下的内容并填充到文章内容，查找`archetypes`原型内容的顺序如下:

1. archetypes/posts.md

2. archetypes/default.md

3. themes/my-theme/archetypes/posts.md

4. themes/my-theme/archetypes/default.md

建议修改原型中的内容为自己需要的内容，这样不用每次创建文章都需要手动去`Front Matter`中添加或删除一下字段属性。

更多的相关操作请查阅Hugo官方文档: [archetypes](https://gohugo.io/content-management/archetypes/)。


## 自定义字段

在使用本主题时，`Front Matter`添加了如下些字段属性:


### aplery

boolean类型，表示是否启用aplayer播放器，只有设置为`true`以后，文章中插入的aplayer代码才会正常生效。

### dplayer

boolean类型，表示是否启用dplayer播放器，只有设置为`true`以后，文章中插入的dplayer代码才会正常生效。

### cover

string类型，文章的封面图地址，默认没有不显示