<p align="center">
  <a href="https://devui.design/" target="_blank" rel="noopener noreferrer">
    <img alt="DevUI Logo" src="https://vue-devui.github.io/assets/logo.svg" width="180" style="max-width:100%;">
  </a>
</p>

<h1 align="center">Vue DevUI</h1>

<p align="center">Vue3 component library based on <a href="https://devui.design/" target="_blank" rel="noopener noreferrer">DevUI Design</a></p>

English | [简体中文](README.zh-CN.md)

🌈 Features：

- 📦 55 high-quality components that are simple, easy to use, and flexible.
- 🔑 Support for TypeScript.
- ⛰️ Support for Nuxt3.
- ⚡ Support for on-demand import.
- 🌍 Support internationalization.
- 🎨 Support theme customization, and built-in seven beautiful themes such as `Galaxy`, `Sweet` and `Provence`.

## 🔧 Usage

First install vue-devui with npm, yarn or pnpm.

Install with npm

```sh
npm install vue-devui --save
```

Install with yarn

```sh
yarn add vue-devui
```

Install with pnpm

```sh
pnpm add vue-devui
```

Then import `DevUI` in the `main.ts` file:

```ts
import { createApp } from 'vue';
import App from './App.vue';

// Import Vue DevUI component and style
import DevUI from 'vue-devui';
import 'vue-devui/style.css';

createApp(App).use(DevUI).mount('#app');
```

Then you can use the vue devui component(such as `<d-button>`) in the `App.vue` file:

```vue
<template>
  <d-button>Button</d-button>
</template>
```

## 🖥️ Development

```sh
git clone git@github.com:DevCloudFE/vue-devui.git
cd vue-devui
pnpm install
pnpm dev
```

Open your browser and visit: [http://localhost:3000/](http://localhost:3000/).

Or you can run other command

```sh
pnpm scripts
```

## 🤝 Contributing

Welcome to join our Vue DevUI open source project!🎉

By participating in the Vue DevUI project, we can together:

- 🔥 Learn the latest cool `Vite` + `Vue3` + `TypeScript` + `JSX` technology.
- 🎁 Learn how to design and develop UI components.
- ⭐ Hone programming skills and learn excellent programming practice.
- 🎊 Meet a group of friends who love learning and open source.

If you don't know how to start, please read our [contributing guide](https://vue-devui.github.io/contributing/)

## ✨ Maintainers

Maintainers are community members who have made outstanding contributions and have been active in the DevUI community for a long time.

- [kagol](https://github.com/kagol)
- [xingyan95](https://github.com/xingyan95)
- [linxiang07](https://github.com/linxiang07)
- [Zcating](https://github.com/Zcating)
- [TinsFox](https://github.com/TinsFox)
- [JensonMiao](https://github.com/JensonMiao)
- [xiejay97](https://github.com/xiejay97)
- [daviForevel](https://github.com/daviForevel)
- [AlanLee97](https://github.com/AlanLee97)
- [SituC](https://github.com/SituC)
- [lj1990111](https://github.com/lj1990111)
- [newer2333](https://github.com/newer2333)
- [vaebe](https://github.com/vaebe)
- [ivestszheng](https://github.com/ivestszheng)
- [ElsaOOo](https://github.com/ElsaOOo)
- [asdlml6](https://github.com/asdlml6)
- [GaoNeng-wWw](https://github.com/GaoNeng-wWw)
- [chenxi24](https://github.com/chenxi24)
- [ErKeLost](https://github.com/ErKeLost)
- [brenner8023](https://github.com/brenner8023)

Outstanding contributions include, but are not limited to, the following:

- 10 or more PRs are merged
- Put forward more than 10 review opinions approved by PR authors
- Provide constructive optimization advice and promote the project to become better

## License

[MIT](https://github.com/DevCloudFE/vue-devui/blob/dev/LICENSE)
