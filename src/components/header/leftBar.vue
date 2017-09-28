<template>
  <Menu active-name="1" theme="dark" width="auto" >
      <div class="layout-logo-left" :class="{'layout-title': spanLeft < 4}">CNCT-API管理系统</div>
      <MenuItem name="1" style="padding-left:13px">
          <Icon type="ios-navigate" :size="iconSize"></Icon>
          <span class="layout-text">项目管理</span>
      </MenuItem>
      <MenuItem name="2" style="padding-left:13px">
          <Icon type="ios-keypad" :size="iconSize"></Icon>
          <span class="layout-text">接口管理</span>
      </MenuItem>
      <MenuItem name="3" style="padding-left:13px">
          <Icon type="ios-analytics" :size="iconSize"></Icon>
          <span class="layout-text">其他管理</span>
      </MenuItem>
  </Menu>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    props: ['spanLeft','spanRight'],
    computed: {
        iconSize () {
            return this.spanLeft === 4 ? 14 : 30;
        }
    }
  }
</script>

<style scoped>
  .layout-logo-left{
      width: 90%;
      line-height: 35px;
      background: #5b6270;
      border-radius: 3px;
      margin: 15px auto;
      color: #fff;
      text-align: center;
      font-size: 20px;
  }
  .layout-title{
      display: none;
  }
  .layout-hide-text .layout-text{
      display: none;
  }
</style>
