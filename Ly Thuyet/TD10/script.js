
function Response(res){
    return res.json();
}

function Data(data){
    let chercher = document.getElementById('input').value;
    let key = Object.keys(data);
    let check = key.includes(chercher);
    let node_def = document.getElementById('def');
    if (check == true){
        node_def.innerHTML = data[chercher];
    }
    else{
        node_def.innerHTML="This word was not found";
    }
}

function Search(){ 
    fetch("./dictionary.json")
        .then(Response)
        .then(Data);
}
var button = document.getElementById('button_search');
var text = document.getElementById('input')
var word = document.getElementById('key');
button.addEventListener('click',function() {
    word.innerHTML = text.value;
});



