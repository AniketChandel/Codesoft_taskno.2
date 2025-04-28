let a=document.querySelectorAll(".bt")
let b=document.querySelector("#box1")
let s=""
a.forEach(a=>{
a.addEventListener("click",()=>{
const v=a.innerText

if(v==='C'){
b.innerText='0'
s=0    
}
else if(v==='='){
try{
 s= eval(s);
 b.innerText=s;
}
catch{
    s=0
    b.innerText="Error"
}
}
else{
s=s+v;
b.innerText=s;

}




})
})
let col=document.querySelector("#col")
let colo=document.querySelector("body")
col.addEventListener("click",()=>{
colo.style.backgroundColor="green"
})