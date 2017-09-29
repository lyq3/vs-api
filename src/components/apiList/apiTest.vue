<template>
  <div>
    <Button type="success" style="border-radius:0;float:left;margin-left:10px">POST</Button>
    <input v-model="value11" placeholder="  http://wx.lyq3.com" class="http-input"></input>
    <Button type="info" style="border-radius:0;float:left">发送请求</Button>
</div>
</template>

<script>
export default {
      data () {
          return {
              value11: '',
              value12: '',
              value13: '',
              select1: 'http',
              select2: 'com',
              select3: 'day'
          }
      }
  }
</script>

<style scoped>
  .ivu-input-group-prepend{
    background-color: #19be6b;
    color: #fff;
  }
  .ivu-input-group-append{
    background-color: #19be6b;
    color: #fff
  }
  .http-input {
    border: solid 1px #DDDEE1;
    float:left;
    width:80%;
    height:32px
  }
</style>
