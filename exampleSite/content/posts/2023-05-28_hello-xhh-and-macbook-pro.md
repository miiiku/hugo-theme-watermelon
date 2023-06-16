---
title: "hello xhh and macbook pro"
date: 2023-06-15T13:29:55+08:00
categories: ['QAQ']
tags: ['theme', 'hugo']
draft: false
cover: 
---

# はじめに

普段React・Next.jsを用いた開発に際して、UIコンポーネントを作成する際にReact.FCやJSX.Element、ReactNodeなどの"**要素やコンポーネントに関する型**"を使用する場面が多々あるかなと思います。

昨今のReactコンポーネント開発において、実際には要素やコンポーネントの型を「何を使うか」をあまり意識しないでもちゃんと開発できてしまいます。とはいえ、それぞれの型には微妙に異なる特徴や特性がありますので、今回はよく見かける以下の四つの型について、それぞれの違いや特性を紹介していきたいと思います。

- JSX.Element
- ReactElement
- ReactNode
- React.FC

# ReactElement

`ReactElement`はReactのコンポーネント(のインスタンス)を表現する最も基本的な型です。
具体的な型の定義は以下のようになっており、keyやpropsなどのプロパティを持ちます。

```ts
interface ReactElement<
	P = any, T extends string
	| JSXElementConstructor<any> = string
	| JSXElementConstructor<any>
> {
	type: T;
	props: P;
	key: Key | null;
}
```

# Introduction {#introduction}

:::info You are reading the documentation for Vue 3!

- Vue 2 support will end on Dec 31, 2023. Learn more about [Vue 2 Extended LTS](https://v2.vuejs.org/lts/).
- Vue 2 documentation has been moved to [v2.vuejs.org](https://v2.vuejs.org/).
- Upgrading from Vue 2? Check out the [Migration Guide](https://v3-migration.vuejs.org/).

:::


<div class="options-api">

```js
import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
```

</div>