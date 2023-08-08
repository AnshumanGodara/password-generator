setInterval(() => {
    if(document.getElementById("size").value==""){
        document.getElementById("submit").disabled=true;
    }
    else{
        document.getElementById("submit").disabled=false;
    }
}, 100);
const cl="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const sl="abcdefghijklmnopqrstuvwxyz"
const n="0123456789"
const s=`!@#$%^&*()_+{}":?><-=[];'/.,`
let temp_pass="";

document.getElementById("submit").addEventListener("click",(e)=>{
    e.preventDefault();
    document.getElementById("passwor").textContent="";
    let ck=document.getElementById("capital_letter")
    let slk=document.getElementById("small_letter")
    let nk=document.getElementById("number")
    let sk=document.getElementById("symbol")
    temp_pass="";
    if(ck.checked){
        temp_pass +=cl;
        
    }
    if(slk.checked){
        temp_pass +=sl;
        
    }
    if(nk.checked){
        temp_pass +=n;
        
    }
    if(sk.checked){
        temp_pass +=s;
    }
    let password="";
    let length=document.getElementById("size").value;
    let pass_size=parseInt(length,10);
    for (let i = 0; i < pass_size; i++) {
        let ran=Math.floor((Math.random()*temp_pass.length))
        password +=temp_pass[ran];
    }
    document.getElementById("passwor").textContent = password;
    console.log(password)
})
document.getElementById("reset").addEventListener("click",(e)=>{
    document.getElementById("form").reset();
    document.getElementById("passwor").textContent="";
})