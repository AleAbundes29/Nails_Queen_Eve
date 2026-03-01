const prices = {

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

let counts = {}

Object.keys(prices).forEach(key=>{
counts[key]=0
})

const totalElement = document.getElementById("total")

function increase(type){

if(counts[type] < 10){

counts[type]++
update(type)

}

}

function decrease(type){

if(counts[type] > 0){

counts[type]--
update(type)

}

}

function update(type){

document.getElementById(type+"Count").textContent = counts[type]

let subtotal = counts[type] * prices[type]

document.getElementById(type+"Price").textContent = "$"+subtotal

calculateTotal()

}

function calculateTotal(){

let total = 0

Object.keys(prices).forEach(type=>{

total += counts[type] * prices[type]

})

document.querySelectorAll("input[type=checkbox]").forEach(box=>{

if(box.checked){

total += Number(box.dataset.price)

}

})

totalElement.textContent = "$"+total

}

document.querySelectorAll("input[type=checkbox]").forEach(box=>{

box.addEventListener("change",calculateTotal)

})

function resetServices(){

Object.keys(prices).forEach(type=>{

counts[type]=0

document.getElementById(type+"Count").textContent=0
document.getElementById(type+"Price").textContent="$0"

})

document.querySelectorAll("input[type=checkbox]").forEach(box=>box.checked=false)

totalElement.textContent="$0"

}