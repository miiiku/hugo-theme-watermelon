# hugo-theme-watermelon

### 一个Hugo驱动的个人博客主题

### Document

- [config.toml相关配置](https://github.com/miiiku/hugo-theme-watermelon/blob/main/docs/config配置)

- [Front Matter 相关参数说明](https://github.com/miiiku/hugo-theme-watermelon/blob/main/docs/FrontMatter相关参数说明)

- [自定义 Shortcodes](https://github.com/miiiku/hugo-theme-watermelon/blob/main/docs/自定义shortcodes)

- [如何丰富页面信息](https://github.com/miiiku/hugo-theme-watermelon/blob/main/docs/如何丰富页面信息)

### Install

#### 下载`watermelon`

从GitHub下载主题并将其添加到网站目录: themes

进入你的网站目录并执行以下代码:

```
git clone https://github.com/miiiku/hugo-theme-watermelon.git ./themes/watermelon
```

或者你也可以将此存储库作为[Git - 子模块](https://git-scm.com/book/de/v2/Git-Tools-Submodule)，这样将更容易获取这个主题的更新

```
git submodule add https://github.com/miiiku/hugo-theme-watermelon.git ./themes/watermelon
```

如果你不是`git`用户也可以从[https://github.com/miiiku/hugo-theme-watermelon/archive/refs/heads/main.zip](https://github.com/miiiku/hugo-theme-watermelon/archive/refs/heads/main.zip)下载压缩包解压到你的网站目录下的`theme`文件夹下并重命名`hugo-theme-watermelon-main`为`watermelon`。

#### 应用当前主题为`watermelon`

```base
echo theme = \"watermelon\" >> config.toml
```

或者手动编辑`config.toml`文件找到**theme**并设置值为`watermelon`