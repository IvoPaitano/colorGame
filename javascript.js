var colors = generateRandomColors(6)

var todosLosCuadros = document.querySelectorAll(".square")

var colorDisplay = document.getElementById("colorDisplay")

var pickedColor = colors[pickColor(5)]

colorDisplay.textContent = pickedColor;


var numberOfSquares= 6

for (var i = 0; i < todosLosCuadros.length; i++) {

    todosLosCuadros[i].style.backgroundColor = colors[i]
    todosLosCuadros[i].addEventListener("click",function () {
        
        var clickedColor = this.style.backgroundColor
        console.log(clickedColor);
        if (clickedColor === pickedColor) {
            document.getElementById("message").textContent = "Correct"
            document.querySelector("h1").style.background = clickedColor
            changeColors(clickedColor)
            document.getElementById("reset").textContent = "Play Again?"
            numberOfSquares = 6
        }else{
            this.style.backgroundColor = document.body.style.backgroundColor//Linea a revisar
            document.getElementById("message").textContent = "Try Again"
        }
    })
}


 function changeColors(color) {
     var cuadrados = document.querySelectorAll(".square")
     cuadrados.forEach(function (nodo) {
         nodo.style.backgroundColor = color
     })
 }





function pickColor(x) {
    return Math.round(Math.random() * x)
}





function randomColor() {
    return `rgb(${pickColor(255)}, ${pickColor(255)}, ${pickColor(255)})`;
}





function generateRandomColors(y) {
    var arreglo = []
    for (var i = 0; i < y; i++) {
        arreglo.push(randomColor())
    }    
    return arreglo
}





 document.getElementById("reset").addEventListener("click",function () {

        this.textContent = "New Colors"
        document.querySelector("h1").style.backgroundColor = "rgb(114, 85, 241)"
 
         if (document.getElementById("btnEasy").style.backgroundColor == "rgb(114, 85, 241)") {
            numberOfSquares = 3
         }
        console.log(numberOfSquares);
        
        if (numberOfSquares == 6) {
            document.getElementById("btnEasy").classList.remove("selected")
            document.getElementById("btnHard").classList.add("selected")
        }

         this.textContent = "New Colors"

         document.getElementById("message").textContent = ""
         document.querySelector("h1").style.backgroundColor = "#232323"

         var newColors = generateRandomColors(numberOfSquares)
         var newPickedColor = newColors[pickColor(numberOfSquares-1)]

         pickedColor = newPickedColor
         colorDisplay.textContent = pickedColor

     for (var j = 0; j < numberOfSquares; j++) {
         todosLosCuadros[j].style.display = "block"
         todosLosCuadros[j].style.backgroundColor = newColors[j]
     }

 })



 

document.getElementById("btnEasy").addEventListener("click",function () {
    
    document.getElementById("reset").textContent = "New Colors"
    numberOfSquares = 3
    document.querySelector("h1").style.backgroundColor = "rgb(114, 85, 241)"

    this.classList.add("selected")
    document.getElementById("btnHard").classList.remove("selected")

    var colorsEasy = generateRandomColors(numberOfSquares)
    var pickedColorEasy = colorsEasy[pickColor(2)]

    pickedColor = pickedColorEasy
    colorDisplay.textContent = pickedColor

    for (var k = 0; k < todosLosCuadros.length; k++) {;
        if (k == 0 || k == 1 || k == 2) {
            todosLosCuadros[k].style.backgroundColor = colorsEasy[k]            
        }else{
            todosLosCuadros[k].style.display = "none"
        }

    }

})





document.getElementById("btnHard").addEventListener("click",function () {
    document.getElementById("reset").textContent = "New Colors"
    numberOfSquares = 6
    document.querySelector("h1").style.backgroundColor = "rgb(114, 85, 241)"
    
    this.classList.add("selected")
    document.getElementById("btnEasy").classList.remove("selected")

    var colorsHard = generateRandomColors(numberOfSquares)
    var pickedColorHard = colorsHard[pickColor(5)]

    pickedColor = pickedColorHard
    colorDisplay.textContent = pickedColor

    for (var l = 0; l < todosLosCuadros.length; l++) {
        todosLosCuadros[l].style.display = "block"
        todosLosCuadros[l].style.backgroundColor = colorsHard[l]
    }

})
