# Vue-WangEditor
## Install
```
yarn add https://github.com/GallenHu/vue-wangeditor.git
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
    <wang-editor @change="onChange" :menus="menus" />
  </div>
</template>
```

## Props
详细说明参考 [配置文件](https://github.com/unicapsule/editor/blob/dev-standalone/src/js/config.example.js)

| props | 说明 |类型
| :----  | :----  | :---- |
| menus | 配置菜单 | Array |
| locale | 语言 | String |
| geoService | 地理位置接口 API KEY | Object |
| debug | Debug  模式| Boolean |


## Events
| events | 说明 |
| :----  | :----  |
| change | 内容变化时触发 |

## Dev
```sh
yarn serve

# build for lib!
yarn lib
```

## ref
https://juejin.im/post/5bbab9de5188255c8c0cb0e3
