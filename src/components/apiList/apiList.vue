<template>
<div>
  <Row>
  <Col span="4">
    <Menu active-name="1-2" width="auto" :open-names="['1']" >
      <div class="api-btn-left">
        <Button type="info" size="small" icon="android-add">添加接口</Button>
        <Button type="success" size="small" icon="android-create">修改接口</Button>
      </div>
      <div class = "repositon">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                系统登录接口
                <Badge count="10"></Badge>
            </template>
            <MenuItem name="1-1">选项 1</MenuItem>
            <MenuItem name="1-2">选项 2</MenuItem>
            <MenuItem name="1-3">选项 3</MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                用户查询接口
                <Badge count="4"></Badge>
            </template>
            <MenuItem name="2-1">选项 1</MenuItem>
            <MenuItem name="2-2">选项 2</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                任务派发接口
                <Badge count="8"></Badge>
            </template>
            <MenuItem name="3-1">选项 1</MenuItem>
            <MenuItem name="3-2">选项 2</MenuItem>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                密码修改接口
                <Badge count="7"></Badge>
            </template>
            <MenuItem name="3-1">选项 1</MenuItem>
            <MenuItem name="3-2">选项 2</MenuItem>
        </Submenu>
        <Submenu name="5">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                数据统计接口
                <Badge count="13"></Badge>
            </template>
            <MenuItem name="3-1">选项 1</MenuItem>
            <MenuItem name="3-2">选项 2</MenuItem>
        </Submenu>
      </div>
    </Menu>
    </Col>
    <Col :span="autospan">
      <!--这里是主体内容-->
      <Tabs class="repositon">
        <TabPane label="接口信息" icon="information-circled">
          <v-apiShow></v-apiShow>
        </TabPane>
        <TabPane label="接口调试" icon="speedometer">

          <v-apiTest ></v-apiTest>
        </TabPane>
        <TabPane label="接口同步" icon="loop">
          <v-apiSync></v-apiSync>
        </TabPane>
    </Tabs>


    </Col>
  </Row>
  </div>
</template>
<script>
  import Bus from '@/common/bus.js'
  import ApiShow from './apiShow'
  import ApiTest from './apiTest'
  import ApiSync from './apiSync'
  export default {
    data(){
      return {
        autospan: 16
      }
    }
      ,
      components: {
        'v-apiShow' : ApiShow,
        'v-apiTest' : ApiTest,
        'v-apiSync':ApiSync
      },
        methods: {

        },
        created : function(){
          var _this = this
          Bus.$on('autospan',function(autospan){
              _this.autospan = autospan
              console.log(_this.autospan);
          });
        }
    }
</script>
<style scoped>
  .api-btn-left {
    margin: 10px 0px 0px 20px;
  }
  .api-btn-left button {
    margin-right: 15px;
  }
  .repositon{
    position:fixed;
    overflow:auto;
    height:83%;
    padding: 0;
    margin: 0;
    width: inherit;
  }

  ::-webkit-scrollbar{
    display:none;
  }
  ::-webkit-scrollbar{width:1px;}

</style>
