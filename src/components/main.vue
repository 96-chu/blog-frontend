<template>
  <main class="main-wrapper">
    <el-button @click="$router.push({name: 'CreateNewBlog'})">创建新博文</el-button>
  </main>
</template>

<style lang="scss">
  .main-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    background: #fff;
  }
</style>
