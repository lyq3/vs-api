<template>
  <div style="float:right">
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            Mock数据
        </MenuItem>

        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="settings"></Icon>
            综合设置
        </MenuItem>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-people"></Icon>
                罗云强
            </template>
                <MenuItem name="2-1"><Icon type="ios-people"></Icon>个人信息</MenuItem>
                <MenuItem name="2-2"><Icon type="ios-people"></Icon>我的项目</MenuItem>
                <MenuItem name="2-3"><Icon type="ios-people"></Icon>退出登录</MenuItem>

        </Submenu>
    </Menu>

  </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
