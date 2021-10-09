import request from "./http";
// 接口响应通过格式
export interface HttpResponse {
    status: number
    statusText: string
    data: {
      code: number
      desc: string
      [key: string]: any
    }
  }
interface LoginParams{
    username:string,
    password:string
}


export const login=(params:LoginParams)=>{
     return request({
        url:"/user/login",
        method:'post',
        params
      })
}

export const getBlogList=(params:any)=>{
  return request({
    url:"/list/getBlogList",
    method:'get',
    params
  })
}

export const addMessage = (params:any)=>{
  return request({
    url:"/list/addMessage",
    method:'post',
    data:params
  })
}


export const getMessageList = (params:any)=>{
  console.log(params)
  return request({
    url:"/list/getMessage",
    method:'get',
    params:params
  })
}