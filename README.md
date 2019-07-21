# Vue-WangEditor
## Install
```
yarn add https://github.com/GallenHu/vue-wangeditor.git
```

add dependent script
```html
<script src="https://cdn.jsdelivr.net/gh/unicapsule/editor@dev-standalone/release/separated/dependent.js"></script>
```

## Usage

main.js

```js
import WangEditor from 'vue-wangeditor'

Vue.use(WangEditor)
```

page.vue

```html
<template>
  <div class="editor">
    <wang-editor />
  </div>
</template>
```

## Props
详细说明参考 [配置文件](https://github.com/unicapsule/editor/blob/dev-standalone/src/js/config.example.js)
| props | 说明 |类型
| :----  | :----  | ---- |
| menus | 配置菜单 | Array
| locale | 语言 | String
| geoService | 地理位置接口 API KEY | Object
| debug | Debug  模式| Boolean


## ref
https://juejin.im/post/5bbab9de5188255c8c0cb0e3
