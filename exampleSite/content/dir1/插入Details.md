---
title: "插入Details"
date: 2023-06-20T18:30:55+08:00
categories: 
tags: ["html", "markdown"]
cover: "https://qiniu.sukoshi.xyz/attach/2021/06/04/%E6%95%88%E6%9E%9C%E5%9B%BE.jpg"
---

使用`details`和`summary`标签，并实现它们的样式。

CSS が負債になるタイミングはプロダクトの状況によります。まず、CSS が負債になる可能性のある状況を列挙し、それぞれを比較する中で何を重視すべきかを考えてみましょう。

<details>
  <summary>CSS の実装でよくあるツラい例</summary>
  <div class="details-content">
    <ul>
      <li>によってむやみに高い詳細度や重要度でスタイルが書かれているために、適用されると思っているスタイルが適用されない</li>
      <li>同じ要素に対してむやみに上書きしてスタイルが定義されている・適用範囲の広いスタイルに依存していて、スタイルを修正すると思っている要素だけでなく他の要素にも影響が出てしまう</li>
      <li>モジュール(コンポーネント)がマージンを持っていて他に転用したときに既存のスタイルを修正することなく使えない</li>
    </ul>
  </div>
  <div class="details-content">
    <figure class="figure-image">
      <img class="figure-image--img" src="https://qiniu.sukoshi.xyz/video/DECO27%20-%20%E6%84%9B%E8%A8%80%E8%91%89%E2%85%A2%20feat.%20%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF.mp4?vframe/jpg/offset/10" title="中和街道" alt="测试图片" loading="lazy">
      <figcaption class="figure-image--title">中和街道</figcaption>
    </figure>
  </div>
</details>

また、この記事では、CSS 設計を教義の意味の ①「BEM のような class を用いた CSS のコーディング規約の設計論」ではなく、広義の意味の ②「プロジェクトにおけるスタイル定義の開発生産性を維持するための技術選定とコーディング規約の設計」という意味合いで使います。

<details>
  <summary>そもそも技術的負債はいつ生まれるのか?</summary>
  <div class="details-content">
    <p>前提として、技術的負債というものはどんな状況であっても生まれ「プロジェクト・プロダクトにおける現在の技術的負債は何か」という視点の切り口の変化によってソフトウェアの開発における技術選定や設計、実装が技術的負債になる状況もあればならない状況もあります。</p>
    <p>ソフトウェア設計における技術選定や設計の決定は、常に何かしらのトレードオフを伴います。そのため、完全に負債がない状況を作り出すことは難しいと言えます。</p>
    <p>そのため Tailwind CSS のようなパッケージ化された技術によって CSS 設計の課題を解決しようとするときは、「どのような状況は避けたくて」「技術によって何の価値を得たいか」を明確にすることが重要でしょう。</p>
  </div>
</details>

CSS が負債になるタイミングはプロダクトの状況によります。まず、CSS が負債になる可能性のある状況を列挙し、それぞれを比較する中で何を重視すべきかを考えてみましょう。

```js
alert("hello");

console.log("hello");
```

<details>
  <summary>そもそも技術的負債はいつ生まれるのか?</summary>
  <div class="details-content">
    <p>123</p>
  </div>
</details>
