// Call 'updateScreenSize' function when the page loads and when resized
window.onresize = updateScreenSize;
window.onload = updateScreenSize;

function updateScreenSize() {
    let Width = window.innerWidth;
    document.getElementById("size").innerHTML = "Screen Width: " + Width + " px";
}
