function dados_adicionar() {
    var x = document.getElementById("desc");
    var text = "";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
	window.history.back();
}


function voltar() {
	window.history.back();
}