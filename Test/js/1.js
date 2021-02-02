var button = document.querySelector('button');
button.onclick = function(){
    var name = prompt('Quel est votre nom?');
    alert('Salut' + " " + name + ',sympa de vous voir!')
}
var a = [1];
a.push(2,3);
alert(a);
a.pop();
alert(a);