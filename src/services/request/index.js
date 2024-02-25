import { BASE_URL, TIMEOUT } from "./config";
import axios from "axios";

class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({ baseURL, timeout });

    // 配置请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('请求拦截',config)
        console.log(config);
        return config;
      },
      (err) => {
        return err;
      }
    );

    // 配置响应拦截器
    this.instance.interceptors.response.use(
      (res) => {
        console.log('响应拦截',res)
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({ ...config, method: "get" });
  }

  post(config) {
    return this.request({ ...config, method: "post" });
  }
}

const request = new Request(BASE_URL, TIMEOUT);

export default request;
