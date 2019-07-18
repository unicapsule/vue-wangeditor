<template>
  <div ref="editor"></div>
</template>

<script>
import E from 'wangeditor'

export default {
  name: 'wang-editor',
  mounted() {
    const editor = new E(this.$refs.editor)

    editor.create()
  },
}
</script>
