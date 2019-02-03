<template>
  <div>
    <textarea>123456</textarea>
    <p>1234</p>
    <!--<div v-html="compiledMarkdown"></div>-->
  </div>
</template>

<script>
// import _ from 'lodash';
// import marked from 'marked';

export default {
  name: 'CreateNew',
  data () {
    return {
      input: '# 123'
    }
  }
  // computed: {
  //   compiledMarkdown: function () {
  //     return marked(this.input, {sanitize: true})
  //   }
  // },
  // methods: {
  //   update() {
  //     _.debounce(function (e) {
  //       this.input = e.target.value
  //     }, 300)
  //   }
  // }
}
</script>

<style scoped>

</style>
