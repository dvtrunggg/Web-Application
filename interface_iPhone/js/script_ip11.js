
var img = document.getElementById('phone_image');
var pro = document.getElementById('pro');
var promax = document.getElementById('promax');

var linkImage = img.getAttribute('src');
function iP_ProMax(){
    img.setAttribute('src','../img/buy_ip11pro_max.png');
    document.getElementById('par_mo').innerText = "From $45.79/mo.*per month or $1099";

    
}
function iP_Pro(){
    img.setAttribute('src', '../img/buy_ip11pro.png');
    document.getElementById('par_mo').innerText = "From $41.62/mo.*per month or $999";


}



function Gold(){
   if (linkImage.includes('pro_max')){
       img.setAttribute('src', '../img/buy_ip11promax_gold.png');
   }
   else{
    img.setAttribute('src', '../img/buy_ip11pro_gold.png');

   }
}


function Sliver(){
    if (linkImage.includes("pro_max"))
    {
        img.setAttribute('src', '../img/buy_ip11promax_sliver.png');
    }
    else{
        img.setAttribute('src','../img/buy_ip11pro_sliver.png');
    }
}

document.getElementById('64GB').addEventListener('click', function(){
    if(linkImage.includes('max'))
        document.getElementById('par_mo').innerText = "From $45.79/mo.*per month or $1099";
    else{
        document.getElementById('par_mo').innerText = "From $41.62/mo.*per month or $999";

    }   
})
document.getElementById('256GB').addEventListener('click', function(){
    if(linkImage.includes('max'))
        document.getElementById('par_mo').innerText = "From $52.04/mo.*per month or $1249";
    else{
        document.getElementById('par_mo').innerText = "From $47.87/mo.*per month or $1149";

    }   
})
