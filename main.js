window.alert("Welcome to the CACulator. Enter the radius so you can get the area of the circle.")

function calculateArea(radius) {
var rad = document.getElementById("rad").value;
var area = Math.PI * (rad ** 2);
document.getElementById("area").value = area;
}







