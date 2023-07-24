---
title: "Details样式"
date: 2023-06-20T18:30:55+08:00
notoc: true
categories: 
tags: ["html", "details", "markdown"]
aplayer: true
layout: datalist
dataSource: "project"
---

在Markdown文件中直接使用`details`和`summary`html标签，并实现它们的样式。

<details>
  <summary>插入的一些文本内容</summary>
  <div class="details-content">
    <p>前提として、技術的負債というものはどんな状況であっても生まれ「プロジェクト・プロダクトにおける現在の技術的負債は何か」という視点の切り口の変化によってソフトウェアの開発における技術選定や設計、実装が技術的負債になる状況もあればならない状況もあります。</p>
    <p>ソフトウェア設計における技術選定や設計の決定は、常に何かしらのトレードオフを伴います。そのため、完全に負債がない状況を作り出すことは難しいと言えます。</p>
    <p>そのため Tailwind CSS のようなパッケージ化された技術によって CSS 設計の課題を解決しようとするときは、「どのような状況は避けたくて」「技術によって何の価値を得たいか」を明確にすることが重要でしょう。</p>
  </div>
</details>

里面插入了图片和列表的展示效果。

<details>
  <summary>列表和图片的展示</summary>
  <div class="details-content">
    <ul>
      <li>因为这里是直接在md文件写入的html代码。</li>
      <li>所以不能直接在details的html代码里又写markdown语法的内容。</li>
      <li>所以这里插入markdown样式的图片可以直接把markdown语法转换成html的代码直接贴进来，效果一样。</li>
    </ul>
  </div>
  <div class="details-content">
    <figure class="figure-image">
      <img class="figure-image--img" src="https://qiniu.sukoshi.xyz/video/DECO27%20-%20%E6%84%9B%E8%A8%80%E8%91%89%E2%85%A2%20feat.%20%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF.mp4?vframe/jpg/offset/10" title="中和街道" alt="测试图片" loading="lazy">
      <figcaption class="figure-image--title">中和街道</figcaption>
    </figure>
  </div>
</details>

里面插入视频的展示效果。

<details>
  <summary>插入bilibili视频</summary>
  <div class="details-content">
    <p>原理同插入Image一样。</p>
    <div class="iframe-video">
      <iframe src="//player.bilibili.com/player.html?aid=686155295&bvid=BV1iU4y1i7uK&cid=781748988&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
  </div>
</details>

里面插入aplayer的展示效果。

<details>
  <summary>插入aplayer</summary>
  <div class="details-content">
    <p>原理同插入Image一样。</p>
    <div class="aplayer-box aplayer aplayer-withlrc" data-url="https://qiniu.sukoshi.xyz/public/music/%e9%b9%bf%e4%b9%83%20-%20%e3%82%a2%e3%82%a4%e3%83%ad%e3%83%8b.mp3" data-name="アイロニ" data-artist="鹿乃" data-cover="https://qiniu.sukoshi.xyz/public/music/鹿乃 - アイロニ.jpg" data-lrc="https://qiniu.sukoshi.xyz/public/music/鹿乃 - アイロニ.lrc" config-lrc-type="3" config-theme="#b7daff" config-loop="none" config-autoplay="false" config-mutex="true"></div>
  </div>
</details>


其他：

比如要插入YouTube，原理同上面一样的，只需要把markdown转换对应的html复制到details的内容即可.

需要注意的是，插入`aplayer`和`dplayer`只需要最外层的`div`html，内容是通过对应的js来自动生成的，并且不要忘了在`Front Matter`中启用对于的配置项。

```md
---
aplayer: true
dplayer: true
---
```
