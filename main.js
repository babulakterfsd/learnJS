'use strict';

let v = true;

let promise1 = new Promise((resolve,reject) => {
   if(v) {
       let obj = {
           name: `awal`
       }
       resolve(obj)
   } else {
       reject(`promise1 data rejected`)
   }
})

let promise2 = (para) => {
    return new Promise((resolve,reject) => {
        if(v) {
            resolve(para.name)
        } else {
            reject(`code rejected from promise2`)
        }
    })
}


async function syncFunc() {
    let result = await promise1;
    let final = await promise2(result)
    console.log(final);
}

syncFunc()