import { getCookie, setCookie } from "./cookies"

const address = "https://redde.pythonanywhere.com/"


const getRequestUrl=(address,params)=>{
    let url = address

    for(const i in params){
        if(!url.includes("?")){
            url += `?${i}=${params[i]}`
        }else{
            url += `&${i}=${params[i]}` 
        }
    }

    return url;
}

function preparePayload(
    data,
    files,
    sendAsJson = false
  ) {

    if(sendAsJson){
        return JSON.stringify(data)
    }

    const form = new FormData();
    // Append string data
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if (value !== undefined && value !== null) {
          form.append(key, value);
        }
      }
    }
  
    // Append file data
    if (files) {
      for (const [key, file] of Object.entries(files)) {
        if (file instanceof File) {
          form.append(key, file);
        }
      }
    }
  
    return form;
  }  

  
export const manageServerCall=async(
        method,
        path,
        urlparams,
        data,
        useToken=false,
        serverCookies={},
        files={},
        sendAsJson=false
    )=>{

    return new Promise((resolve,rej)=>{
        let url = `${address}${path}`

        const payload = preparePayload(data,files,sendAsJson)

        const headers = {}
        const requestBody = method === "post" || method === "put" ? payload : null


        if(sendAsJson){
            headers['Content-Type'] = "application/json"
        }

        //console.log( serverCookies['access'] !== undefined , " here with cookies ", serverCookies);
        

        if(useToken){
            const accessToken = getCookie("token")
            //console.log("access token ",accessToken);
            
            if(accessToken !== ""){
                headers["Authorization"] = `Token  ${accessToken}`

                //console.log(headers);
                
            }else{
                //access token has expired
               console.log("prompt user to login");
               alert("Your Session has expired, please login to proceed")
            }
        }

        const requestObject = {
            method:method,
            body: requestBody,
            headers:headers
        }

        //console.log(requestBody," body");
        
        if(urlparams){
            if(Object.keys(urlparams).length > 0){
                url = getRequestUrl(url,urlparams)
            }
        }

        if(method === "post" || method === "put"){
            requestObject["body"] = payload
            // requestObject['headers']["Content-Type"] = "multipart/form-data"//"application/json"
        }

        fetch(url,requestObject)
        .then((data)=>{
            if (!data.ok) {
                // Throw error if status is not 2xx (e.g., 400, 500)
                return data.json().then(err => {
                    rej(err)
                });
            }

            const contentType = data.headers.get("Content-Type");

            // Handle PDF or other binary responses
            
            if (contentType) {
                if (
                contentType.includes("application/pdf") ||
                contentType.includes("application/zip") ||
                contentType.includes("application/octet-stream")
                ) {
                    return data.blob(); // <- Handle all binary files
                }
            }
    
            return data.json()
        })
        .then(res=>{
            if (res instanceof Blob) {
                // Just resolve the Blob (e.g. PDF file)
                resolve(res);
                return;
            }
            
            // if login or register
            // save cookies
            if(path === "user/login/" || path === "user/register/" || path === "user/login/" || path === "user/oauth-register/"){
                if(res !== undefined && Object.keys(res).includes("token")){
                    //login or registration successful
                    //console.log("saving cookies");
                    setCookie("token",res["token"],10) //expires in 10 days

                }
            }
            resolve(res)
        })
        .catch(
            (err) => {
                rej(err)
            }
        )
    })
}
