let count = 0
countDisplay = document.getElementById("counterel")
countDisplay.textContent = 0
function increment(){
    count += 1
    countDisplay.textContent = count
    
}

function del() {
    countDisplay.textContent=0
    count = 0
}