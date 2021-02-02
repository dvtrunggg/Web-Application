var sizeCheck = document.getElementsByClassName('checkSize')[0];
var connectCheck = document.getElementsByClassName('checkConnect')[0];

document.getElementById('bag').addEventListener('click', function(){
    var size = sizeCheck.innerText.toLowerCase();
    var connect = connectCheck.innerText;



    if(connect == 'GPS')
    {
        connect = 'gps';
    }
    if(connect == 'GPS + Cellular')
    {
        connect = 'gps cellular';
    }
    console.log(size);
    console.log(connect);


})
