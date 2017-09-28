<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}" >
        <Row type="flex" style="position:fixed;top:0px;left:0px;right:0px;bottom:0px">
            <Col :span="spanLeft" class="layout-menu-left" >
                <!--左边导航栏-->
                <v-leftbar :spanLeft="spanLeft" :spanRight = "spanRight"></v-leftbar>
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
                        <BreadcrumbItem href="#">接口管理</BreadcrumbItem>
                        <BreadcrumbItem>税收管理平台</BreadcrumbItem>
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
  import leftbar from './components/header/leftbar.vue'
  import Bus from './common/bus.js'
    export default {
        data () {
            return {
                spanLeft: 4,
                spanRight: 20
            }
        },
        components:{
          'v-navbar':navbar,
          'v-leftbar': leftbar
        },

        methods: {
            toggleClick () {
                if (this.spanLeft === 4) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                    Bus.$emit('autospan',19);
                } else {
                    this.spanLeft = 4;
                    this.spanRight = 20;
                    Bus.$emit('autospan',16);
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
        margin: 0px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 0px;
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

    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
</style>
