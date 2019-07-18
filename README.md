# Vue-WangEditor
## Install
```
yarn add https://github.com/GallenHu/vue-wangeditor.git
```

add dependent script
```html
<script src="https://gitcdn.xyz/repo/GallenHu/wangEditor/dev-standalone/release/separated/dependent.js"></script>
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

## ref
https://juejin.im/post/5bbab9de5188255c8c0cb0e3
