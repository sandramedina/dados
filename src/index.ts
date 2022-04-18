function tirarDados(){ 

let resultado: number = Array.from({length:19}, el => 0);
let repeticiones: number = 1000;
let n1 = number;
let n2= number;

for (let i:number=0; i < repeticiones; i++) {
n1=Math.floor(Math.random()*6)+1;
n2=Math.floor(Math.random()*6)+1;
resultado=[n1+n2]++;
 }
  }
 for (i=2;i<19;i++) {
 let botonDados = document.getElementById("dados");
botonDados.addEventListener("click", tirarDados);

 }
  