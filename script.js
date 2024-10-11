let btn = document.querySelector("#btn")
let pass = document.querySelector(".disp")

function generatePass (iteration){
  const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz@#$%&*/"
 let Password ="" ;

 for (let i = 1 ; i <= iteration ; i++){
  let Passw =(Math.floor(Math.random()*char.length));
  Password += char[Passw];
 }
 return Password ;
}



btn.addEventListener ("click" , (e)=>{
  e.preventDefault()

 let pLength = Number(document.querySelector(".input").value);
 pass.innerText = generatePass(pLength);

})