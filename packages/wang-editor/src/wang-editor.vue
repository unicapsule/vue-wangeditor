<template>
  <div ref="editor"></div>
</template>

<script>
import E from 'wangeditorplus'

function getScript(url, cb) {
  var script = document.createElement('script')
  if (typeof cb === 'function') {
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState == 'loaded' || script.readyState == 'complete') {
          script.onreadystatechange = null
          cb()
        }
      }
    } else {
      script.onload = cb
    }
  }
  script.src = url
  document.body.appendChild(script)
}

export default {
  name: 'wang-editor',
  props: {
    menus: Array,
    locale: String,
    geoService: Object,
    debug: Boolean,
  },
  mounted() {
    if (!window.$di18n || !window.axios || !window.screenfull) {
      getScript(
        'https://cdn.jsdelivr.net/gh/unicapsule/editor@dev-standalone/release/separated/dependent.js',
        () => {
          this.initEditor()
        }
      )
    } else {
      this.initEditor()
    }
  },
  methods: {
    initEditor() {
      const editor = new E(this.$refs.editor)
      editor.customConfig.debug = this.debug || false
      if (this.menus && this.menus.length) {
        editor.customConfig.menus = this.menus
      }
      if (this.locale) editor.customConfig.locale = this.locale
      if (this.geoService) editor.customConfig.geoService = this.geoService
      editor.customConfig.onchange = () => {
        this.$emit('change', editor.txt.html())
      }
      editor.create()
    },
  },
}
</script>
