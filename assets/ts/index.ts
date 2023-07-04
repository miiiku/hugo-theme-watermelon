type Theme = "light" | "dark" | "auto";

const themeDark = window.matchMedia("(prefers-color-scheme: dark)");

(function () {
  /** code block content copy */
  window.addEventListener("click", evt => {
    const target = evt.target as HTMLElement;
    if (target && target.matches("div.code-block > button.copy")) {
      const p = target.parentElement;
      const t = p?.querySelector("div.highlight");
      if (t) {
        // 没做兼容处理，懒
        navigator.clipboard.writeText(t.textContent || "").then(() => {
          target.classList.add("copied");
          setTimeout(() => {
            target.classList.remove("copied");
          }, 2000);
        });
      }
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    /** [default-image] onload event */
    bindPictureError();

    bindTocScroll(".znc", "#TableOfContents", 2, 4);

    /** theme change click */
    const themeLightBtn = document.querySelector('#theme-light');
    const themeDarkBtn  = document.querySelector('#theme-dark');
    const themeAuto     = document.querySelector('#theme-auto');
    themeLightBtn       && themeLightBtn.addEventListener('click', () => switchTheme('light'));
    themeDarkBtn        && themeDarkBtn.addEventListener('click', () => switchTheme('dark'));
    themeAuto           && themeAuto.addEventListener('click', () => switchTheme('auto'));

    /** aplayer init */
    aplayerInit()
    /** dplayer init */
    dplayerInit()
  });

  themeDark.addEventListener("change", evt => {
    switchTheme();
  });

  switchTheme();
})();

function bindTocScroll (container: string, toc: string, startLevel = 2, endLevel = 4) {
  if (!container) {
    return console.warn("请传入正确的'container'");
  }

  if (!toc) {
    return console.warn("请传入正确的'toc'");
  }

  let headings = "";

  for (let i = startLevel; i<= endLevel; i++) {
    headings += `h${i}`;
    if (i < endLevel) {
      headings += ",";
    }
  }

  const headingElementList = querySelectorArrs<HTMLElement>(`${container} ${headings}`);

  const linkElementList = querySelectorArrs<HTMLLinkElement>(`${toc} a[href^='#']`);


  if (!headingElementList || !headingElementList.length) {
    return console.info("没有获取到任何锚点");
  }

  if (!linkElementList || !linkElementList.length) {
    return console.info("没有获取到任何锚点");
  }

  const updateActive = (index: number) => {
    linkElementList.forEach((el, i) => {
      const p = el.parentElement;
      if (!p) return;
      if (i === index) {
        p.classList.add("active");
      } else {
        p.classList.remove("active");
      }
    });
  }

  const headingObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(({ target, isIntersecting, boundingClientRect }) => {
      if (boundingClientRect.top > 20) {
        return console.log("不做处理");
      }
      const index = Number((target as HTMLElement).dataset?.toc) || 0;
      if (!isIntersecting) {
        updateActive(index);
      }
      if (isIntersecting && index > 0) {
        updateActive(index-1);
      }
    })
  }, { rootMargin: "-10px 0px 0px 0px", threshold: [1] });

  updateActive(0);

  headingElementList.forEach((el, index) => {
    el.dataset.toc = String(index);
    headingObserver.observe(el);
  });
}

function bindPictureError () {
  const imgs = querySelectorArrs<HTMLImageElement>("img[default-image]");
  if (imgs.length) {
    imgs.forEach((img: HTMLImageElement) => {
      img.onerror = function () {
        this.src = "/error-picture.svg";
      }
    });
  }
}

function switchTheme (theme?:Theme) {
  const checkedTheme = (window.localStorage.getItem("theme") || "auto") as Theme;
  const rootDom:Element = document.documentElement;
  
  theme = theme || checkedTheme;

  if (theme === "dark") {
    rootDom.classList.add("dark");
  }
  if (theme === "light") {
    rootDom.classList.remove("dark");
  }
  if (theme === "auto") {
    if (themeDark.matches) {
      return switchTheme("dark");
    } else {
      return switchTheme("light");
    }
  }
  window.localStorage.setItem('theme', theme);
}

function toCamel(str:string) {
  const arrs = str.split("-");
  if (arrs.length === 1) return arrs[0];
  return arrs.reduce((accumulator:string, currentValue:string) => {
    return accumulator + currentValue.toLowerCase().replace(/( |^)[a-z]/g, v => v.toUpperCase());
  });
}

/**
 * 处理aplayer || dplayer 参数
 * @param el aplayer || dplayer dom
 * @returns 配置项参数
 */
function formatAttr(el:Element): object {
  const config = {};
  const numberList = ["lrcType"];
  const boolHash = { "true": true, "false": false };
  const attrs = el.getAttributeNames().filter(key => key.startsWith("config-"));

  attrs.forEach(attr => {
    const key = toCamel(attr.replace("config-", ""));
    const value = el.getAttribute(attr) || "";
    const toBool = boolHash[value];
    
    if (toBool !== undefined) {               /** 处理bool值 */
      config[key] = toBool;
    } else if (numberList.includes(key)) {   /** 处理number值 */
      config[key] = parseInt(value);
    } else {                                 /** string */
      config[key] = value;
    }
  })
  return config;
}

function querySelectorArrs<T>(selector:string):Array<T> {
  return Array.from(document.querySelectorAll(selector)) as Array<T>;
}

function aplayerInit () {
  const aplayers = querySelectorArrs<HTMLDivElement>(".aplayer-box");
  if (aplayers.length && window.APlayer) {
    aplayers.forEach(el => {
      const params = { container: el, audio: { ...el.dataset } }
      const config = formatAttr(el)
      new window.APlayer(Object.assign({}, config, params))
    })
  }
}

function dplayerInit () {
  const dplayers = querySelectorArrs<HTMLDivElement>(".dplayer-box");
  if (dplayers.length && window.DPlayer) {
    dplayers.forEach(el => {
      const params = { container: el, video: { ...el.dataset } }
      const config = formatAttr(el)
      new window.DPlayer(Object.assign({}, config, params))
    })
  }
}