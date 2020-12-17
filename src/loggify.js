"use strict"; 
const axios = require('axios');
const url = 'http://104.248.103.156:1339/loggify'

class Loggify {
  constructor(workspaceId,workspaceCode,workspaceName,hashCode) {
      this.workspaceCode = workspaceCode;
      this.workspaceName = workspaceName;
      this.workspaceId = workspaceId;
      this.hashCode = hashCode;
  }

  async log(title,message,estado = "error",grupo = '') {
    const params = {workspaceId:this.workspaceId,workspaceCode:this.workspaceCode,workspaceName:this.workspaceName,hashCode:this.hashCode,title,message,estado,grupo}
    const response = await axios.post(url,params);
    return response.data
  }


}


module.exports = Loggify;