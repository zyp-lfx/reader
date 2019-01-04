import Vue from 'vue';
/*引入资源请求插件*/
import axios from 'axios';
import Qs from 'qs'
const BASE_URL='/base'
/*使用axios插件*/
// Vue.prototype.$api = axios;
const GET =(cmd,data)=>{
  var p = new Promise((resolve, reject) => {
    axios.get(BASE_URL+cmd,{
      params:data
    }).then(res=>{
      resolve(res)
    }).catch(error=>{
      reject(error)
    })
  })
  return p;
}
const POST =(cmd,data)=>{
  var p = new Promise((resolve, reject) => {
    axios.post(BASE_URL+cmd,Qs.stringify(data)).then(res=>{
      resolve(res)
    }).catch(error=>{
      reject(error)
    })
  })
  return p;
}
export default({
  GET:GET,
  POST:POST
});
