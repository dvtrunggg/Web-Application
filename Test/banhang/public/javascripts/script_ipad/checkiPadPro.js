var colorCheck = document.getElementsByClassName('checkColor')[0];
var modelCheck = document.getElementsByClassName('checkModel')[0];
var romCheck = document.getElementsByClassName('checkRom')[0];
var connectCheck = document.getElementsByClassName('checkConnect')[0];

document.getElementById('bag').addEventListener('click', function(){
    var color = colorCheck.innerHTML.toLowerCase();    // trả về space grey thì value trong database là grey đó:))
    var model = modelCheck.innerText.toLowerCase();
    var rom = romCheck.innerText;
    var connect = connectCheck.innerText.toLowerCase();

    if(model == '11-inch'){
        model = 11;
    }
    else{
        model = 12.9;
    }

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


    console.log(model);
    console.log(color);
    console.log(rom);
    console.log(connect);


})
