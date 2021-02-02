
var prenom = prompt("Entrez votre prenom: ");

var nom = prompt("Entrez votre nom: ");
//(prenom == null && nom == null)? alert("xin chào"+prenom + " "+ nom) : alert("xin chao");
try{
    if(prenom == '' && nom == ''){
    throw "Invalid";
}
}
catch(e){
    nom = "Incomnu";
} alert("Bonjour "+prenom + " "+ nom);