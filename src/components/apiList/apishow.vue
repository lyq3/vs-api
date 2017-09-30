<template>
  <Collapse v-model="value1" >
    <Panel name="1">
        <span class = 'panel-title'>接口说明</span>
        <p slot="content" >
           <Table border :columns="apiDetail" :data="apiData"></Table>
        </p>
    </Panel>
       <Panel name="2">
           <span class = 'panel-title'>请求头</span>
           <p slot="content">
             <Table border :columns="apiDetail" :data="apiData"></Table>
           </p>
       </Panel>
       <Panel name="3">
           <span class = 'panel-title'>请求参数</span>
           <p slot="content">
             <Table border :columns="apiDetail" :data="apiData"></Table>
           </p>
       </Panel>
       <Panel name="4">
           <span class = 'panel-title'>响应Model</span>
           <p slot="content">
             <Table border :columns="apiDetail" :data="apiData"></Table>
           </p>
       </Panel>
   </Collapse>

</template>

<script>
  export default {
    data(){
      return {
        value1: ['1','2','3'],
        apiDetail :
          [
                    {
                        title: '标题',
                        key: 'title',
                        width: 150,
                        align: 'center',
                        // render: (h, params) => {
                        //     return
                        //     h('div', [
                        //         h('Icon', {
                        //             props: {
                        //                 type: 'person'
                        //             }
                        //         }),
                        //         h('strong', params.row.name)
                        //     ]);
                        // }
                    },
                    {
                        title: '内容',
                        key: 'content'
                    }
                ],
              apiData : [
                    {
                        title: '接口URL',
                        content: '/sendMessage/sendVerifyMessage'
                    },
                    {
                        title: '说明',
                        content: '发送验证码'
                    },
                    {
                        title: '请求方式',
                        content: 'POST'
                    },
                    {
                        title: 'consumes',
                        content: 'application/json'
                    },
                    {
                        title: 'produces',
                        content: '*/*'
                    },
                ]
      }
    },
    methods : {

    }
  }
</script>

<style scoped>
  .panel-title {
    color: green;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 18px;
  }
  .ivu-collapse-content-box {
    padding: 0;
    margin: 0;
  }
  .ivu-collapse-content {
    padding: 0;
    margin: 0;
  }
</style>
