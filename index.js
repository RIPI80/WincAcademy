function colorbg() {
    var x=document.getElementById("selectid");
    var bgcolor=x.options[x.selectedIndex].value;
    document.body.style.backgroundColor=bgcolor;
}