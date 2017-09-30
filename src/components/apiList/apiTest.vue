<template>
  <div>
    <Button type="success" style="border-radius:0;float:left">POST</Button>
    <input  placeholder="  http://wx.lyq3.com" class="http-input"></input>
    <Button type="info" style="border-radius:0;">发送请求</Button>

    <!--请求卡片-->
    <Card class="cardform" padding = "0">
            <div class = "card-title">请求头部</div>
          <table class = "card-table" >
            <tr class = "onetr">
              <td style="width:10%">勾选</td>
              <td style="width:40%">标签</td>
              <td style="width:40%">内容</td>
              <td style="width:10%">操作</td>
            </tr>
            <tr>
              <td> <Checkbox v-model="single">&nbsp;</Checkbox></td>
              <td>
                <Input value = "Accept-Encoding" placeholder="请输入..." class = "card-input"></Input>
              </td>
              <td><Input value = "application/json" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Button type="error">删除</Button></td>
            </tr>
            <tr>
              <td> <Checkbox v-model="single">&nbsp;</Checkbox></td>
              <td><Input value = "Accept" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Input value = "application/json" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Button type="error">删除</Button></td>
            </tr>
          </table>
    </Card>
    <Card class="cardform" padding = "0">
            <div class = "card-title">请求参数</div>
          <table class = "card-table" >
            <tr class = "onetr">
              <td style="width:10%">勾选</td>
              <td style="width:40%">参数名</td>
              <td style="width:40%">参数值</td>
              <td style="width:10%">操作</td>
            </tr>
            <tr>
              <td> <Checkbox v-model="single">&nbsp;</Checkbox></td>
              <td>
                <Input value = "Accept-Encoding" placeholder="请输入..." class = "card-input"></Input>
              </td>
              <td><Input value = "application/json" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Button type="error">删除</Button></td>
            </tr>
            <tr>
              <td> <Checkbox v-model="single">&nbsp;</Checkbox></td>
              <td><Input value = "Accept" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Input value = "application/json" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Button type="error">删除</Button></td>
            </tr>
            <tr>
              <td> <Checkbox v-model="single">&nbsp;</Checkbox></td>
              <td><Input value = "Accept" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Input value = "application/json" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Button type="error">删除</Button></td>
            </tr>
            <tr>
              <td> <Checkbox v-model="single">&nbsp;</Checkbox></td>
              <td><Input value = "Accept" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Input value = "application/json" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Button type="error">删除</Button></td>
            </tr>
            <tr>
              <td> <Checkbox v-model="single">&nbsp;</Checkbox></td>
              <td><Input value = "Accept" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Input value = "application/json" placeholder="请输入..." class = "card-input"></Input></td>
              <td><Button type="error">删除</Button></td>
            </tr>
          </table>
    </Card>
    <Card class="cardform" padding = "0">
            <div class = "card-title">返回结果</div>
          <table  class = "card-table">
            <tr >
              <Button type="info" style="margin:10px 0px 10px 20px">格式化JSON</Button>
              <Button type="success" style="margin:10px 0px 10px 20px">复制结果</Button>
              <Button type="warning" style="margin:10px 0px 10px 20px">新开页面</Button>
              <Button type="error" style="margin:10px 0px 10px 20px">下载结果</Button>
            </tr>
            <tr>
               <Input v-model = "model1" style = "width : 90%;margin:20px"  type="textarea" :autosize="{minRows: 12,maxRows: 15}" placeholder="请输入..."></Input>
            </tr>
          </table>
    </Card>

</div>
</template>

<script>
export default {
  /**
jQuery JSONView 和
json-viewer.js选一个
*/
      data () {
          return {
              single :true,
              model1 : '{'+
                      '"code": 100,'+
                    '  "msg": "登陆成功",'+
                    '  "total": null,'+
                    '  "data": null,'+
                    '  "rows": [ ],'+
                    '  "otherRes": {'+
                    '  "data": {'+
                  '    "id": 2,'+
                    '  "dept_id": 1,'+
                    '  "userName": "lyq",'+
                    '  "password": "123456",'+
                    '  "swry_id": "15100000000",'+
                    '  "leader_id": 1,'+
                    '  "valid_status": "Y",'+
                    '  "phone": "13438379796",'+
                    '  "name": "罗云强",'+
                    '  "leader_name": "敬云鹏",'+
                    '  "dept_name": null,'+
                  '    "szm": null,'+
                    '  "roleList": [ ]'+
                  '    }'+
                    '  }'+
                    '  }'
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
    margin: 0;
    width:80%;
    height:32px
  }
  .cardform {
    margin:10px;
    margin-left: 0px;
    padding: 0;
  }
  .card-title {
    color: #43A047;
    font-size: 15px;
    padding: 5px;
    border-bottom: 1px solid #E9EAEC;
  }
  .card-table tr{
    height: 40px;
    border-top: 1px solid #E9EAEC;
  }
  .onetr{
    background-color: #F8F8F9;
    border: 0;
  }
  .onetr td:first-child {
    width: 60px;
  }
  .card-table {
    width: 100%;
    border-style:none;
    border-collapse:collapse;
  }
  .card-table td {
    margin: 0;
    text-align: center;
  }
  .card-table tr td:first-child {
    text-align: center;
  }
  .card-input {
    margin: 2px 10px;
    width: 80%
  }
</style>
