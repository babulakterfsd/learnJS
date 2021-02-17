'use strict';

let changer = (id) => {
    let target = document.getElementById(id);
    let i = 200;
    let stopper = setInterval(() => {
       i += 1;
       if(i == 700) {
           clearInterval(stopper)
       } else {
           target.style.width = i + `px`;
       }
    },0)
}

document.getElementById(`mybtn`).addEventListener((`click`),() => {
    changer(`myanimation`)
})