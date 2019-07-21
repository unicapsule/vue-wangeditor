<template>
  <div ref="editor"></div>
</template>

<script>
import E from 'wangeditorplus'

export default {
  name: 'wang-editor',
  props: {
    menus: Array,
    locale: String,
    geoService: Object,
    debug: Boolean,
  },
  mounted() {
    const editor = new E(this.$refs.editor)
    editor.customConfig.debug = this.debug || false
    if (this.menus && this.menus.length) {
      editor.customConfig.menus = this.menus
    }
    if (this.locale) editor.customConfig.locale = this.locale
    if (this.geoService) editor.customConfig.geoService = this.geoService
    editor.create()
  },
}
</script>
