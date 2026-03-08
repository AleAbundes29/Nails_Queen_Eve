const preciosTip = {
1:200,2:250,3:300,4:350,5:400,6:450,7:500,8:550,9:600,10:650,11:700,12:750,13:800
};

const preciosEscultura = {
1:250,2:300,3:350,4:400,5:450,6:500,7:550,8:600,9:650,10:700,11:750,12:800,13:850
};

function toggleAcrilico(){

let activo = document.getElementById("activarAcrilico").checked;

document.getElementById("tipoAcrilico").disabled = !activo;
document.getElementById("tamanoAcrilico").disabled = !activo;

actualizarAcrilico();
}

function actualizarAcrilico(){

let activo = document.getElementById("activarAcrilico").checked;

if(!activo){
document.getElementById("precioAcrilico").innerText="$0";
calcularTotal();
return;
}

let tipo=document.getElementById("tipoAcrilico").value;
let tamano=document.getElementById("tamanoAcrilico").value;

let precio= tipo==="tip" ? preciosTip[tamano] : preciosEscultura[tamano];

document.getElementById("precioAcrilico").innerText="$"+precio;

calcularTotal();
}

let preciosEfectos={

espejo:30,
aurora:25,
azucar:20,
unicornio:30,
gato2d:25,

french:10,
gelcolor:10,
relieve:20,
tresd:30,

sueter:20,
terciopelo:25,
cocodrilo:30,
cristales:20,
marmol:35,
mano:60

};

let counts={};

function increase(tipo){

if(!counts[tipo]) counts[tipo]=0;

counts[tipo]++;

document.getElementById(tipo+"Count").innerText=counts[tipo];

document.getElementById(tipo+"Price").innerText="$"+(counts[tipo]*preciosEfectos[tipo]);

calcularTotal();
}

function decrease(tipo){

if(!counts[tipo]) counts[tipo]=0;

if(counts[tipo]>0) counts[tipo]--;

document.getElementById(tipo+"Count").innerText=counts[tipo];

document.getElementById(tipo+"Price").innerText="$"+(counts[tipo]*preciosEfectos[tipo]);

calcularTotal();
}

document.querySelectorAll('input[type="checkbox"][data-price]').forEach(cb=>{
cb.addEventListener("change",calcularTotal);
});

function calcularTotal(){

let total=0;
let count=0;

if(document.getElementById("activarAcrilico").checked){

let precio=document.getElementById("precioAcrilico").innerText.replace("$","");

total+=parseInt(precio);

count++;

}

document.querySelectorAll('input[type="checkbox"][data-price]').forEach(cb=>{

if(cb.checked){
total+=parseInt(cb.dataset.price);
count++;
}

});

for(let key in counts){

total+=counts[key]*preciosEfectos[key];

if(counts[key]>0) count++;

}

document.getElementById("total").innerText="$"+total;

document.getElementById("count").innerText=count+" servicios seleccionados";
}

function resetServices(){
location.reload();
}