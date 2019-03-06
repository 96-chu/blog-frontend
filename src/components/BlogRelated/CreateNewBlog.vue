<template>
  <main class="main-wrapper">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>新建文章</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="blog-edit-content">
      <textarea v-model="input" @change="update"></textarea>
      <div v-html="compiledMarkdown"></div>
    </div>
  </main>
</template>

<script>
import _ from 'lodash'
import marked from 'marked'

export default {
  name: 'CreateNew',
  data () {
    return {
      input: '# 123'
    }
  },
  created () {
    console.log('111')
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, {sanitize: true})
    }
  },
  methods: {
    update () {
      _.debounce(function (e) {
        this.input = e.target.value
      }, 300)
    }
  }
}
</script>

<style scoped>

</style>
