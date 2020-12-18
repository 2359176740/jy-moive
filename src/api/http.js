import axios from "axios";

/*
    可以对axios进行封装
    以往学习使用axios的时候每次获取数据的结果都是从ret.data中获取
    可以在此处对axios进行改造,让返回的ret等同于ret.data
    拦截器:此处是对返回结果其实就是对相应进行处理,所以得使用相应拦截器

*/
axios.interceptors.response.use((ret) => {
  return ret;
});

export default axios