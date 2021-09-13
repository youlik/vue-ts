import Axios from "axios";
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

export class UserService{
    
    static async login(params:LoginParams):Promise<HttpResponse> {
        return Axios('')
    }
}