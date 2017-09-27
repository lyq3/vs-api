<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}" >
        <Row type="flex" style="position:fixed;top:0px;left:0px;right:0px;bottom:0px">
            <Col :span="spanLeft" class="layout-menu-left" >
                <Menu active-name="1" theme="dark" width="auto" >
                    <div class="layout-logo-left" :class="{'layout-title': spanLeft < 5}">CNCT-API管理系统</div>
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
            </Col>
            <Col :span="spanRight">
                <div class="layout-header">
                    <Button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </Button>
                    <v-navbar></v-navbar>
                </div>
                <div  style="overflow:auto;position:fixed;width:100%;height:100%" >
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <BreadcrumbItem href="#">首页</BreadcrumbItem>
                        <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
                        <BreadcrumbItem>某应用</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div class="layout-content" >
                    <div class="layout-content-main" >
                      <router-view></router-view>

                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
              </div>
            </Col>
        </Row>
    </div>
</template>
<script>
  import navbar from './components/header/navbar.vue'
    export default {
        data () {
            return {
                spanLeft: 5,
                spanRight: 19
            }
        },
        components:{
          'v-navbar':navbar
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 14 : 30;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        }
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
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
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .layout-title{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
