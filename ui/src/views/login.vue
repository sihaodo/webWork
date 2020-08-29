<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
        <el-input v-model="form.passcode"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button @click="login">login</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {postRequest} from '../api/manage'
export default {
  data(){
    return {
      form:{
        username:'',
        passcode:''
      }
    }
  },
  methods:{
    login(){
      postRequest('/login',this.form).then((res) => {
        debugger
        console.log(res)
      })

    }
  }

}
</script>

<style>

</style>
