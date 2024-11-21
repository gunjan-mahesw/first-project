// let cNum = Math.floor(Math.random() * 100) + 1;
// attempt =0;
// let attempt = document.getElementById("attempt");
// let userinp = document .getElementById("inp");
// let subBtn = document.getElementById("submit");
// let restBtn = document.getElementById("resBtn");
// let message = document.getElementById("msg");
// function check (){
//     let usernum = parseInt (userinp.value);

//     if (cNum == usernum){
//         message.innerHTML = "Congratulations! You guessed the correct number. It was " + cNum;
//         message.style.color = "green";
//         subBtn.disabled = true;
//         restBtn.style.display = "block";


//     }
//     else if (cNum < usernum){
//         message.innerHTML = "Too high ! try again ";

//         message.style.color = "red";
        
//     }
//     else {
//         message.innerHTML = "Too low! try again ";
//         message.style.color = "red";
//     }
// attempt++;
// attemptData.innerHTML=attempt;
// setTimeout(() => {
//     userinp.value = "";
//     message.innerHTML = "";
// },3000);

// }
// function restart (){
//     cNum = Math.floor(Math.random() * 100) + 1;
//     attempt =0;
// }
// subBtn.addEventListener("click",check);
// restBtn.addEventListener("click",restart);
