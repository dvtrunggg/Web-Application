
var img = document.getElementById('phone_image');

var violet = document.getElementById('violet');
var jaune = document.getElementById('jaune');
var noir= document.getElementById('noir');
var vert = document.getElementById('vert');

vert.addEventListener('click',function(){
    img.setAttribute('src','../img/buy_ip11_green.png');
});

noir.addEventListener('click',function(){
    img.setAttribute('src','../img/buy_ip11_black.png');

});

jaune.addEventListener('click',function(){
    img.setAttribute('src','../img/buy_ip11_yellow.png');

});

violet.addEventListener('click',function(){
    img.setAttribute('src','../img/buy_ip11_purple.png');

});

var rom128gb = document.getElementById('128GB');
var rom256gb = document.getElementById('256GB');
var par_mo = document.getElementById('par_mo');



rom128gb.addEventListener('click', function(){
    par_mo.innerText = "From $31.20/mo.*per month or $749";
});

rom256gb.addEventListener('click', function(){
    par_mo.innerText = "From $35.37/mo.*per month or $849";
});