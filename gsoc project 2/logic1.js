const inputs=document.querySelector(".inputs");
resetBtn=document.querySelector(".reset-btn");
hint=document.querySelector(".hint-sapn");
wrongletter=document.querySelector(".wrong-letter span");
typinginput=document.querySelector(".typing-input");
let word,incorrects=[];
function randomword(){
    let ranobj=wordlist(Math.floor(Math.randomn()*worrdlist.length));
    let word=ranobj.word;
    console.log(ranobj);
    hint.innerText=ranobj.hint;

    let html="";
    for(i=0;i<word.length;i++){
        html+=`<<input type="text" disabled>>`
    }
    inputs.innerHTML=html;
}
randomword();
function initgame(e){
    let key=e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(`${key}`)){
        console.log(key);
        if(word.includes(key)){
            for(let i=0;i<word.length;i++){
                if(word[i]===key){
                    inputs.querySelectorAll("inputs")[i].value=key;
                }
            }
        }else{
            incorrects.push(`${key}`);
        }
    }
    typinginput.value="";
}
resetBtn.addEventListener("click",randomword);
typinginput.addEventListener("input",initgame);
document.addEventListener("keydown",()=>typinginput.focus());
