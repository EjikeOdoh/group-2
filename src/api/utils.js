import { manageServerCall } from "./api"

export const getUserInfo=()=>{
    return new Promise((resolve,reject)=>{
        manageServerCall("get","user/user-info/",{},{},true)
        .then(res=>{
            resolve(res)
        })
        .catch(err=>{
            reject(err)
        })
    })
}