const checkboxes = document.querySelectorAll("input[type=checkbox]")
const totalElement = document.getElementById("total")
const countElement = document.getElementById("count")

let nailCount = 0
let crystalCount = 0

const nailPrice = 30
const crystalPrice = 15

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

total += nailCount * nailPrice
total += crystalCount * crystalPrice

totalElement.textContent = "$" + total
countElement.textContent = count + " servicios seleccionados"

}

function increaseNails(){

if(nailCount < 10){

nailCount++
updateNails()

}

}

function decreaseNails(){

if(nailCount > 0){

nailCount--
updateNails()

}

}

function updateNails(){

document.getElementById("nailCount").textContent = nailCount
document.getElementById("nailPrice").textContent = "$" + (nailCount * nailPrice)

calcular()

}

function increaseCrystals(){

if(crystalCount < 10){

crystalCount++
updateCrystals()

}

}

function decreaseCrystals(){

if(crystalCount > 0){

crystalCount--
updateCrystals()

}

}

function updateCrystals(){

document.getElementById("crystalCount").textContent = crystalCount
document.getElementById("crystalPrice").textContent = "$" + (crystalCount * crystalPrice)

calcular()

}

function resetServices(){

checkboxes.forEach(box => box.checked = false)

nailCount = 0
crystalCount = 0

document.getElementById("nailCount").textContent = 0
document.getElementById("crystalPrice").textContent = "$0"
document.getElementById("crystalCount").textContent = 0
document.getElementById("nailPrice").textContent = "$0"

totalElement.textContent = "$0"
countElement.textContent = "0 servicios seleccionados"

}