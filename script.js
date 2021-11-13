var textarea = document.querySelector('#evaluatedText');
var count = document.querySelector('#count');

function keycount(){

    var text = textarea.value;
    var textcount = textarea.value.length;
    count.innerHTML = textcount;
}

