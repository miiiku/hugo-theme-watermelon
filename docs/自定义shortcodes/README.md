---
title: "自定义Shortcodes"
date: 2023-06-23T09:52:08+08:00
---

关于`shortcodes`的说明见[https://gohugo.io/content-management/shortcodes/](https://gohugo.io/content-management/shortcodes/)。

其中hugo官方也定义了一些常用的`shortcodes`，也就是代码块，比如`youtube`，`vimeo`等，让我们可以在md文件中插入一些其他内容。

不过我个人觉得还是少用会比较好，因为这种跟hugo深度绑定制定的代码块就意味着如果以后要迁移到其他平台，就需要格外的开销来处理这些代码块，会造成一定的麻烦。

本主题定义了以下三个代码块: `aplayer`，`dplayer`，`datalist`。


## aplayer

在页面中插入音频文件，需要在`Front Matter`中设置`aplayer: true`来加载对应的资源文件。

使用方法如下：

```md
<!-- 实际写的时候 '['替换为 '{' ']'替换为'}' -->
[[< aplayer
    url="https://qiniu.sukoshi.xyz/public/music/鹿乃 - アイロニ.mp3"
    name="アイロニ"
    artist="鹿乃"
    cover="https://qiniu.sukoshi.xyz/public/music/鹿乃 - アイロニ.jpg"
    lrc="https://qiniu.sukoshi.xyz/public/music/鹿乃 - アイロニ.lrc"
    lrcType="3"
>]]
```


## dplayer

在页面中插入视频文件，需要在`Front Matter`中设置`dplayer: true`来加载对应的资源文件。

使用方法如下：

```md
<!-- 实际写的时候 '['替换为 '{' ']'替换为'}' -->
[[< dplayer
    url="https://qiniu.sukoshi.xyz/video/%E7%BE%8E.mp4"
    pic="https://qiniu.sukoshi.xyz/video/%E7%BE%8E.mp4?vframe/jpg/offset/10"
>]]
```



## datalist

在页面中插入一个表格，表格的数据来源于`/data`下的文件，比如我们想要一个`友链`页面。

那么我们需要在`/data`下创建数据，如`link.yaml`，格式如下：

```yaml
- { "name" : "", "link" : "", "description" : "", "avatar" : "" }
- { "name" : "", "link" : "", "description" : "", "avatar" : "" }
```

然后在md文件中插入如下代码则可以展示一个表格

```md
<!-- 实际写的时候 '['替换为 '{' ']'替换为'}' 其中data里的值要跟data目录下的文件名对应 -->
[[< datalist data="link" >]]
```

这个表格只能展示固定的这四个字段，如果不满足需求可以创建一个新的`shortcodes`来扩展。
