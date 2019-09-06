
var btn = document.getElementById("btn-1");

// skapar en funktion som ändrar texten i en input till versaler
btn.addEventListener("click", function() {
    var txt = document.getElementById("txt-1").value;
    var txtUp = txt.toUpperCase();
    document.getElementById("txt-1").value = txtUp;
});
