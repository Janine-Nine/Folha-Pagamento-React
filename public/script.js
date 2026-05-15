function login(){

const email=document.getElementById('email').value;
const senha=document.getElementById('senha').value;

if(email==="admin@empresa.com" && senha==="123456"){

document.getElementById('loginBox').classList.add('hidden');
document.getElementById('dashboard').classList.remove('hidden');

localStorage.setItem('logado','true');

}else{
alert('Login inválido');
}
}

function logout(){
localStorage.removeItem('logado');
location.reload();
}

function mostrar(id){

const boxes=document.querySelectorAll('.box');

boxes.forEach(box=>{
box.classList.remove('active');
});

document.getElementById(id).classList.add('active');
}

window.onload=function(){

if(localStorage.getItem('logado')==='true'){

document.getElementById('loginBox').classList.add('hidden');
document.getElementById('dashboard').classList.remove('hidden');

}
}