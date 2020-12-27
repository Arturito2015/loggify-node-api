"use strict"; 
const axios = require('axios');
const url = 'http://104.248.103.156:1339/loggify'

class Loggify {

  static initialize(workspaceCode,hashCode){
    this.workspaceCode = workspaceCode;
    this.hashCode = hashCode;
  }

  static async log(title,message,estado = "error",grupo = '') {
    const params = {workspaceCode:this.workspaceCode,hashCode:this.hashCode,title,message,estado,grupo}
    const response = await axios.post(url,params);
    return response.data
  }

}


module.exports = Loggify;