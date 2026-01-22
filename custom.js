// see: https://github.com/gollum/gollum/issues/1656#issuecomment-785096494
$(document).ready(function () {
  if (window.ace && window.ace_editor) {
    window.ace.config.setModuleUrl("ace/theme/twilight", "http://ajaxorg.github.io/ace-builds/src-noconflict/theme-twilight.js")
    window.ace_editor.setTheme("ace/theme/twilight")
    window.ace_editor.setOption("showPrintMargin", false)
  }
})
