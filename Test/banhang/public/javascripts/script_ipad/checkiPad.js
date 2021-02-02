var colorCheck = document.getElementsByClassName('checkColor')[0];
var romCheck = document.getElementsByClassName('checkRom')[0];
var connectCheck = document.getElementsByClassName('checkConnect')[0];

document.getElementById('bag').addEventListener('click', function(){
    var color = colorCheck.innerHTML.toLowerCase();    // trả về space grey thì value trong database là grey đó:))
    var rom = romCheck.innerText;
    var connect = connectCheck.innerText.toLowerCase();

  
    if(color == 'space grey'){
        color = 'grey';
    }
    else{
        color = 'silver';
    }

    if(connect == 'wi-fi'){
        connect = 'wifi';
    }
    else{
        connect = 'wifi cellular';
    }


    console.log(color);
    console.log(rom);
    console.log(connect);


})
