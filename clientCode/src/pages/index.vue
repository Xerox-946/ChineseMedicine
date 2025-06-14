
<template>
  <div class="content-box">
    <h1>{{$t('这是首页')}}</h1>
    <!-- 具体页面内容 -->
  </div>
</template>

<script setup>
definePageMeta({
  keepalive: true,  // 必须为需要缓存的页面启用
  tabName: 'index',  // 相同类型的详情页使用相同name
  title: '首页'
});
</script>