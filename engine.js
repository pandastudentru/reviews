var content
var img

document.addEventListener("DOMContentLoaded", function(event) { 
    content = document.getElementById('content')
    img = document.getElementById('img')
    content.addEventListener('click', function(){ close();}, false);
});

function close(){
    content.style.display = 'none';
}

function show(url){
    img.src = url;
    content.style.display = 'inline';
}