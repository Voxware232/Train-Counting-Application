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

// Time display function
var span = document.getElementById('span');

function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
    span.textContent = 
        ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);
    }

    setInterval(time, 1000);

