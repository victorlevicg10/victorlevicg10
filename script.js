///h1{}
const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid=document.querySelector('#pid');
const input =document.querySelector('input');

console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML="Chiste desde Javascripst <br> sds";
h1.innerText="sds";

//console.log(h1.getAttribute('pantalla'));
//h1.setAttribute('class','rojo');
h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('rojo');
h1.classList.contains('verde');

input.value = "456";

//console.log(document.createElement('span'))

const img=document.createElement('img');
img.setAttribute('src','https://blog.logrocket.com/wp-content/uploads/2021/02/machine-learning-libraries-javascript.png');
console.log(img);

pid.innerHTML="";
pid.appendChild(img);