'use strict';

let getReq = (method,url,callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open(method,url);
    xhr.onreadystatechange = (e) => {
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                callback(null,xhr.response)
            } else {
                callback(xhr.status,null)
            }
        }
    }
    xhr.send()
}

getReq(`get`,`https://jsonplaceholder.cypress.io/todos`,(err,res) => {
    if(err) {
        console.log(err);
    } else {
        let result = JSON.parse(res)
        for(let i = 10; i < 15; i++) {
            console.log(result[i].id);
            console.log(result[i].title);
        }
    }
})