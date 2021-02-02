var a = prompt("Entrez numero a: ");
var b = prompt("Entrez numero b: ");
var c = prompt("Entrez numero c: ");
var max = a;
if (b > max )
{
    max = b;
}
 if (c > max){
    max = c
}
alert('Le plus grand nombre: ' + max);


var str = prompt('Entrez la séquence de nombres (séparé par un virgule): ');
list = str.split(',');
var n = list.length;

var max2 = Math.max.apply(Math, list); 
alert('Le plus grand nombre dans le tableau: '+max2);

var time = prompt('Entrez votre numéro');
var heurs;
var min;
if (Number.isInteger(time))
{
    heurs = time;
}
else{
    heurs = Math.floor(time);
    min = Math.round((time - heurs)*60);
}
alert("Nous avons " + heurs + " heurs " + min + " minutes");
var string = prompt("Entrez votre string: ");
var l = string.length;
alert("La dermière de lettre de " + string + " est: " + string[0] + " et " + string[l-1]);
