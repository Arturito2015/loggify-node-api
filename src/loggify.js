"use strict"; 
const axios = require('axios');
const config_post_loggify = (data,params = {}) =>  {
  return {
    url:'/loggify',
    baseUrl:'http://104.248.103.156:1339',
    transformRequest: [function (data, headers) {
      // Do whatever you want to transform the data
      console.log(data,headers)
      return data;
    }],
    transformRequest: [function (data, headers) {
      // Do whatever you want to transform the data
      console.log(data)
      return data;
    }],
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    params,
    data,
    timeout: 5000,
    withCredentials: false, // default
    
  }  
}

class Loggify {
  constructor(workspaceId,workspaceCode,workspaceName,hashCode) {
      this.workspaceCode = workspaceCode;
      this.workspaceName = workspaceName;
      this.workspaceId = workspaceId;
      this.hashCode = hashCode;
  }

  loggify(title,message,estado = "error") {
    return axios.request(config_post_loggify({title,message,estado}));
  }
}


module.exports = Loggify;