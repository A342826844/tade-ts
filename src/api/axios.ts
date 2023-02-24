/**
 * 请求封装
 */

import baseUrl from "../constants/BaseUrl";
import axios from "axios";
import { Toast } from "native-base";

const service = axios.create({
  
  baseURL: baseUrl.apiUrl, 

  // withCredentials: true, // 当跨域请求时发送cookie
  timeout: 15000, // 请求超时
  headers: {
    "content-type": "application/json;charset=UTF-8",
  },
});

//添加请求拦截器   请求接口统一添加token
service.interceptors.request.use(
  (config) => {
    config.headers.token = " xxxx || 'xxxx' "; //请求添加token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {

    //如果接口返回token，替换本地旧token
    if (response.headers.token) {
      sessionStorage.setItem("token", response.headers.token);
    }
    //自定义设置后台返回code对应的响应方式
    if (response.data.code == 0) {
      return response;
    } else {
      Toast.show({ title: 'The server is wandering, please try again later' });
      //接口正常，返回数据
      return response;
    }
  },
  (error) => {
    
    if (error.message) {
      // this.$massage.error('服务器开小差了，请稍后再试!')
      //错误响应
      // Toast.fail("The server is wandering, please try again later");
      Toast.show({ title: 'The server is wandering, please try again later' });
    }
    return Promise.reject(error);
  }
);
//暴露出封装过的服务
export default service;
