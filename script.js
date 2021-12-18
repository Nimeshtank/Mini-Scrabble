var textarea = document.querySelector('#evaluatedText');
var count = document.querySelector('#count');

function keycount(){

    var textcount = textarea.value.replace(/ /g, "").length;
    count.innerHTML = textcount;
}

