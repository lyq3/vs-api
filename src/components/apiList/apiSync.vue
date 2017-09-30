<template >
  <div>
    <Alert type="success" show-icon style="margin:10px 0">接口开发进度</Alert>
    <Progress :percent="25"></Progress>
  <Progress :percent="45" status="active"></Progress>
  <Progress :percent="65" status="wrong"></Progress>
  <Progress :percent="100"></Progress>
  <Progress :percent="25" hide-info></Progress>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
