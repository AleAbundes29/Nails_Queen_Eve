const preciosAcrilico = {

tip:{
1:200,2:250,3:300,4:350,5:400,6:450,7:500,8:550,9:600,10:650,11:700,12:750,13:800
},

escultura:{
1:250,2:300,3:350,4:400,5:450,6:500,7:550,8:600,9:650,10:700,11:750,12:800,13:850
}

}

const preciosEfectos = {

espejo:30,
aurora:25,
azucar:20,
unicornio:30,
gato2d:25,
gato9d:35,
sueter:20,
terciopelo:25,
cocodrilo:30,
glow:35,
marmol:35,
mano:60

}

let counts={}

Object.keys(preciosEfectos).forEach(e=>counts[e]=0)

const totalElement=document.getElementById("total")

function actualizarAcrilico(){

let tipo=document.getElementById("tipoAcrilico").value
let tamano=document.getElementById("tamanoAcrilico").value

let precio=preciosAcrilico[tipo][tamano]

document.getElementById("precioAcrilico").textContent="$"+precio

calculateTotal()

}

function increase(tipo){

if(counts[tipo]<10){

counts[tipo]++
update(tipo)

}

}

function decrease(tipo){

if(counts[tipo]>0){

counts[tipo]--
update(tipo)

}

}

function update(tipo){

document.getElementById(tipo+"Count").textContent=counts[tipo]

let subtotal=counts[tipo]*preciosEfectos[tipo]

document.getElementById(tipo+"Price").textContent="$"+subtotal

calculateTotal()

}

function calculateTotal(){

let total=0

let tipo=document.getElementById("tipoAcrilico").value
let tamano=document.getElementById("tamanoAcrilico").value

total+=preciosAcrilico[tipo][tamano]

Object.keys(preciosEfectos).forEach(e=>{

total+=counts[e]*preciosEfectos[e]

})

document.querySelectorAll("input[type=checkbox]").forEach(box=>{

if(box.checked){

total+=Number(box.dataset.price)

}

})

totalElement.textContent="$"+total

}

document.querySelectorAll("input[type=checkbox]").forEach(box=>{

box.addEventListener("change",calculateTotal)

})

function resetServices(){

Object.keys(preciosEfectos).forEach(e=>{

counts[e]=0
document.getElementById(e+"Count").textContent=0
document.getElementById(e+"Price").textContent="$0"

})

document.querySelectorAll("input[type=checkbox]").forEach(box=>box.checked=false)

totalElement.textContent="$0"

}