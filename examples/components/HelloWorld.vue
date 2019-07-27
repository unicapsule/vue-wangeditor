<template>
  <div class="hello">
    <div class="left">
      <wang-editor :menus="menus" locale="lang-zh" @change="onChange" />
    </div>
    <div class="right">
      <textarea class="result" v-model="content"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      content: '',
      menus: [
        'underline',
        'fontSize',
        'fontColor',
        'backColor',
        'removeformat',
        'spliter',

        'justify',
        'indent',
        'lineHeight',
        'orderedList',
        'list',
        'quote',
        'youtube',
        'fullsize',
      ],
    }
  },
  methods: {
    onChange(html) {
      this.content = html
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.left {
  width: 600px;
  float: left;
}
.right {
  margin-left: 700px;
}
.result {
  width: 300px;
  height: 330px;
}
</style>
