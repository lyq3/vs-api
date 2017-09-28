<template>
  <Menu active-name="1" theme="dark" width="auto" >
      <div class="layout-logo-left" :class="{'layout-title': spanLeft < 4}">CNCT-API管理系统</div>
      <!-- <MenuItem name="1" style="padding-left:13px">
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
      </MenuItem> -->
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                    <div class="layout-logo-left"></div>
                    <Submenu name="1" v-show = "spanLeft == 4" >
                        <template slot="title">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            项目管理
                        </template>
                        <MenuItem name="1-1">添加项目</MenuItem>
                        <MenuItem name="1-2">删除项目</MenuItem>
                    </Submenu>
                    <MenuItem class = "icon-big" name="1-2" v-show = "spanLeft < 4"><Icon type="ios-navigate" :size="iconSize"></Icon></MenuItem>

                    <Submenu name="2" v-show = "spanLeft == 4">
                        <template slot="title">
                            <Icon type="ios-keypad" :size="iconSize"></Icon>
                            接口管理
                        </template>
                        <MenuItem name="2-1">税收管理平台</MenuItem>
                        <MenuItem name="2-2">税收优惠系统</MenuItem>
                        <MenuItem name="2-3">微信管理平台</MenuItem>
                    </Submenu>
                    <MenuItem class = "icon-big" name="1-2" v-show = "spanLeft < 4"><Icon type="ios-keypad" :size="iconSize"></Icon></MenuItem>

                    <Submenu name="3" v-show = "spanLeft == 4">
                        <template slot="title">
                            <Icon type="ios-analytics" :size="iconSize"></Icon>
                            其他管理
                        </template>
                        <MenuItem name="3-1">选项 1</MenuItem>
                        <MenuItem name="3-2">选项 2</MenuItem>
                    </Submenu>
                    <MenuItem class = "icon-big" name="1-2" v-show = "spanLeft < 4"><Icon type="ios-analytics" :size="iconSize"></Icon></MenuItem>
                </Menu>
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
  .icon-hidden {
      display: none;
  }
  .icon-big{
    padding: 15px 0;
    text-align: center;
  }
</style>
