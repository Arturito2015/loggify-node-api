"use strict"; 
const axios = require('axios');
const config_post_loggify = (data,params = {}) =>  {
  return {
    url:'/loggify',
    baseUrl:'http://104.248.103.156:1339',
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

  log(title,message,estado = "error") {
    return axios.request(config_post_loggify({title,message,estado}));
  }
}


module.exports = Loggify;