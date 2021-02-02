
var img = document.getElementById('phone_image');

var white = document.getElementById('blanc');
var black = document.getElementById('noir');
var red = document.getElementById('rouge');

white.addEventListener('click',function(){
    img.setAttribute('src','../img/buy_se_white.png');
});

black.addEventListener('click',function(){
    img.setAttribute('src','../img/buy_se_black.png');

});

red.addEventListener('click',function(){
    img.setAttribute('src','../img/buy_se_red.png');

});

var rom64gb = document.getElementById('64GB');
var rom128gb = document.getElementById('128GB');
var rom256gb = document.getElementById('256GB');
var par_mo = document.getElementById('par_mo');

rom64gb.addEventListener('click', function(){
    par_mo.innerText = "$399.00";
});

rom128gb.addEventListener('click', function(){
    par_mo.innerText = "$449.00";
});

rom256gb.addEventListener('click', function(){
    par_mo.innerText = "$549.00";
});