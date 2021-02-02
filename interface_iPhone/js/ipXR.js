
var img = document.getElementById('phone_image');

var blanc = document.getElementById('blanc');
var corail = document.getElementById('corail');
var noir= document.getElementById('noir');
var bleu = document.getElementById('bleu');

blanc.addEventListener('click',function(){
    img.setAttribute('src','../img/buy_ipXR_white.png');
});

noir.addEventListener('click',function(){
    img.setAttribute('src','../img/buy_ipXR_black.png');

});

corail.addEventListener('click',function(){
    img.setAttribute('src','../img/buy_ipXR_coral.png');

});

bleu.addEventListener('click',function(){
    img.setAttribute('src','../img/buy_ipXR_blue.png');

});

var rom128gb = document.getElementById('128GB');
var rom64gb = document.getElementById('64GB');
var par_mo = document.getElementById('par_mo');



rom128gb.addEventListener('click', function(){
    par_mo.innerText = "From $31.20/mo.*per month or $749";
});

rom64gb.addEventListener('click', function(){
    par_mo.innerText = "From $27.04/mo.*per month or $649";
});