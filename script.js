let digit = document.getElementById("digit");
let a = parseInt(digit.innerHTML);
let lower = document.getElementById("lower");
let upper = document.getElementById("upper")


lower.addEventListener("click", function () {
    a -= 1;
    digit.innerHTML = a;
})

upper.addEventListener("click", function () {
    a += 1;
    digit.innerHTML = a;
})



// function actionDis(){
//     if(a===1){
//         lower.disabled=true;
//     }
//     else if(a>0){
//         lower.disabled=false;
//     }

//     upper.addEventListener("click", function () {
//         a += 1;
//         digit.innerHTML = a;
//     })
    
//     lower.addEventListener("click", function () {
//         a -= 1;
//         digit.innerHTML = a;
//     })

    
// }
// actionDis();






