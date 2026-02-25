const checkboxes = document.querySelectorAll("input[type=checkbox]")
const totalElement = document.getElementById("total")
const countElement = document.getElementById("count")

checkboxes.forEach(box => {

box.addEventListener("change", calcular)

})

function calcular(){

let total = 0
let count = 0

checkboxes.forEach(box => {

if(box.checked){

total += Number(box.dataset.price)
count++

}

})

totalElement.textContent = "$" + total
countElement.textContent = count + " servicios seleccionados"

}

function resetServices(){

checkboxes.forEach(box => box.checked = false)

totalElement.textContent = "$0"
countElement.textContent = "0 servicios seleccionados"

}