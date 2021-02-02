

// alert(arrNumber);

// var cube = function(num){
//     return num*num;
// }

// var factorielle = function 

function map(f,arrNumber){
    var resultat = [];
    for(var i = 0; i != arrNumber.length; i++)
        resultat[i] = f(arrNumber[i]);
    return resultat;
}

var Nhan2 = function(x){
    return x*2;
}
var Chia2 = function(x)
{
    return x/2;
} 
var cube = function(x)
{
    return x*x;
}


function myFunction() {
    var op = document.getElementById("opt").value;
    var Str_Num = document.getElementById("number").value;
    num = Str_Num.split(",");
    for(i = 0; i < num.length;i++)
    {
        num[i] = Number(num[i]);
    }
    switch(op) {
        case 'cube':
            document.getElementById("resultat").innerHTML = map(cube,num);    
            break;  
        case 'Nhan2':
            document.getElementById("resultat").innerHTML = map(Nhan2,num);
            break;
        case 'Chia2':
            document.getElementById("resultat").innerHTML = map(Chia2,num);
            break;
    }
}