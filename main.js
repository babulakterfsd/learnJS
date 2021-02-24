'use strict';

document.getElementById(`btn`).addEventListener((`click`),()=> {
    
     async function hello () {
        let myfetcher = await fetch(`https://jsonplaceholder.cypress.io/todos`);
        let makejson = await myfetcher.json();
        let result = await makejson;
        for(let i = 0; i < 10; i++) {
            creator(result[i])
        }
    }

    hello()

    function creator(data) {
        let li = document.createElement(`li`);
        li.innerHTML = `${data.id}. ${data.title}`;
        li.style.listStyle = `none`;
        li.style.border = `1px solid grey`;
        li.style.textAlign = `center`
        let parent = document.getElementById(`myul`);
        parent.appendChild(li)
    }
})