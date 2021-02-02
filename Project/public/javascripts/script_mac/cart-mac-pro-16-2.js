var cpu_i7 = document.getElementById('model_i7');
var cpu_i9 = document.getElementById('model_i9');

var ram_8GB = document.getElementById('ram_8GB');
var ram_16GB = document.getElementById('ram_16GB');

var rom_256GB = document.getElementById('rom_256GB');
var rom_512GB = document.getElementById('rom_512GB');
var rom_1T = document.getElementById('rom_1T');
var rom_2T = document.getElementById('rom_2T');

var g1 = document.getElementById('graphic_5300M');
var g2 = document.getElementById('graphic_5500M');
var g3 = document.getElementById('graphic_5500M_2');
var g4 = document.getElementById('graphic_5600M');


cpu_i9.addEventListener('click', function(){
    cpu_i9.classList.add('checked1');
    cpu_i7.classList.remove('checked1');
})

cpu_i7.addEventListener('click', function(){
    cpu_i7.classList.add('checked1');
    cpu_i9.classList.remove('checked1');
})

//
ram_8GB.addEventListener('click', function(){
    ram_8GB.classList.add('checked2');
    ram_16GB.classList.remove('checked2');
})

ram_16GB.addEventListener('click', function(){
    ram_16GB.classList.add('checked2');
    ram_8GB.classList.remove('checked2');
})

rom_256GB.addEventListener('click', function(){
    rom_256GB.classList.add('checked3');
    rom_512GB.classList.remove('checked3');
    rom_1T.classList.remove('checked3');
    rom_2T.classList.remove('checked3');

})

rom_512GB.addEventListener('click', function(){
    rom_512GB.classList.add('checked3');
    rom_256GB.classList.remove('checked3');
    rom_1T.classList.remove('checked3');
    rom_2T.classList.remove('checked3');

})

rom_1T.addEventListener('click', function(){
    rom_1T.classList.add('checked3');
    rom_512GB.classList.remove('checked3');
    rom_256GB.classList.remove('checked3');
    rom_2T.classList.remove('checked3');

})

rom_2T.addEventListener('click', function(){
    rom_2T.classList.add('checked3');
    rom_512GB.classList.remove('checked3');
    rom_256GB.classList.remove('checked3');
    rom_1T.classList.remove('checked3');

})


//

g1.addEventListener('click', function(){
    g1.classList.add('checked4');
    g2.classList.remove('checked4');
    g3.classList.remove('checked4');
    g4.classList.remove('checked4');

})

g2.addEventListener('click', function(){
    g2.classList.add('checked4');
    g1.classList.remove('checked4');
    g3.classList.remove('checked4');
    g4.classList.remove('checked4');

})

g3.addEventListener('click', function(){
    g3.classList.add('checked4');
    g2.classList.remove('checked4');
    g1.classList.remove('checked4');
    g4.classList.remove('checked4');

})

g4.addEventListener('click', function(){
    g4.classList.add('checked4');
    g2.classList.remove('checked4');
    g3.classList.remove('checked4');
    g1.classList.remove('checked4');

})

///////////////ham so sanh 2 object///////////////////////////
function isEqual(objA, objB) {
    // Tạo các mảng chứa tên các property
    var aProps = Object.getOwnPropertyNames(objA);
    var bProps = Object.getOwnPropertyNames(objB);
    // Nếu độ dài của mảng không bằng nhau,
    // thì 2 objects đó không bằnh nhau.
    if (aProps.length != bProps.length) {
        return false;
    }
    
    for (var i = 0; i < aProps.length; i++) {
         var propName = aProps[i];          
          // Nếu giá trị của cùng một property mà không bằng nhau,
          // thì 2 objects không bằng nhau.
         if (objA[propName] !== objB[propName]) {             
             return false;         
         }     
    }
    // Nếu code chạy đến đây,
    // tức là 2 objects được tính lằ bằng nhau.
    return true;
}

function updateArrIfo()
{
    let bag = JSON.parse(localStorage.getItem('bag'));
    let number = JSON.parse(localStorage.getItem('number'));
    let product = JSON.parse(localStorage.getItem('product'));

    if (bag == null)
    {
        bag = [];
    }

    if (number == null)
    {
        number = [];
    }

    if (product == null)
    {
        product = [];
    }

    for (let i = 0; i < number.length; i++)
    {
        number[i] = 0;
    }

    if (bag != null)
    {
        var flag = true;

        for (let i = 0; i < bag.length; i++)
        {
            flag = true;
            console.log(number.length);
            console.log(product.length);

            if (product.length != 0 && number.length != 0)
            {
                for (let j = 0; j < product.length; j++)
                {
                    if (isEqual(bag[i], product[j]))
                    {
                        number[j] += 1;
                        flag = false;
                    }
                }
            }
            
            if(flag)
            {
                product.push(bag[i]);
                number.push(1);
            }

        }

        localStorage.setItem('bag', JSON.stringify(bag));
        localStorage.setItem('number', JSON.stringify(number));
        localStorage.setItem('product', JSON.stringify(product));

    }
}

var bag = JSON.parse(localStorage.getItem('bag'));

// var list_product = JSON.parse(localStorage.getItem('list_product'))

if(bag == null)
    bag =[];


var cpu;
var ram;
var rom;
var graphic;
document.getElementById('bag').addEventListener('click', function(){

    //get cpu
    var cpu_i9List = cpu_i9.className.split(/\s+/);
    var cpu_i7List = cpu_i7.className.split(/\s+/);
    for (var i = 0; i < cpu_i9List.length; i++) {
        if (cpu_i9List[i] === 'checked1') {
            cpu = 'i9';
        }
    }

    for (var i = 0; i < cpu_i7List.length; i++) {
        if (cpu_i7List[i] === 'checked1') {
            cpu = 'i7';
        }
    }
    

    //get ram
    var ram_8GBList = ram_8GB.className.split(/\s+/);
    var ram_16GBList = ram_16GB.className.split(/\s+/);
    for (var i = 0; i < ram_8GBList.length; i++) {
        if (ram_8GBList[i] === 'checked2') {
            ram = '8GB';
        }
    }

    for (var i = 0; i < ram_16GBList.length; i++) {
        if (ram_16GBList[i] === 'checked2') {
            ram = '16GB';
        }
    }

//
    var rom_256GBList = rom_256GB.className.split(/\s+/);
    var rom_512GBList = rom_512GB.className.split(/\s+/);
    var rom_1TList = rom_1T.className.split(/\s+/);
    var rom_2TList = rom_2T.className.split(/\s+/);
    for (var i = 0; i < rom_256GBList.length; i++) {
        if (rom_256GBList[i] === 'checked3') {
            rom = '256GB';
        }
    }
    for (var i = 0; i < rom_512GBList.length; i++) {
        if (rom_512GBList[i] === 'checked3') {
            rom = '512GB';
        }
    }
    for (var i = 0; i < rom_1TList.length; i++) {
        if (rom_1TList[i] === 'checked3') {
            rom = '1T';
        }
    }
    for (var i = 0; i < rom_2TList.length; i++) {
        if (rom_2TList[i] === 'checked3') {
            rom = '2T';
        }
    }



    var g1_List = g1.className.split(/\s+/);
    var g2_List = g2.className.split(/\s+/);
    var g3_List = g3.className.split(/\s+/);
    var g4_List = g4.className.split(/\s+/);

    for (var i = 0; i < g1_List.length; i++) {
        if (g1_List[i] === 'checked4') {
            graphic = 'amd radeon pro 5300m with 4gb of gddr6 memory';
        }
    }

    for (var i = 0; i < g2_List.length; i++) {
        if (g2_List[i] === 'checked4') {
            graphic = 'amd radeon pro 5500m with 4gb of gddr6 memory storage';
        }
    }

    for (var i = 0; i < g3_List.length; i++) {
        if (g3_List[i] === 'checked4') {
            graphic = 'amd radeon pro 5500m with 8gb of gddr6 memory';
        }
    }
    for (var i = 0; i < g4_List.length; i++) {
        if (g4_List[i] === 'checked4') {
            graphic = 'amd radeon pro 5600m with 8gb of hbm2 memory';
        }
    }

    let url = `http://localhost:4000/data/mac?name=mac pro 16&color=silver&rom=${rom}&ram=${ram}&cpu=${cpu}&graphic=${graphic}`; 

    console.log(url);

    fetch(url,{method: 'GET'})
    .then((response)=>{
        return response.json();
    })
    .then((text)=>{
        //console.log(text[0]);
        //let item = JSON.parse(text[0]);

        bag.push(text[0]);

        localStorage.setItem('bag', JSON.stringify(bag));

        alert('Successfully!');

        updateArrIfo();

    });

    // console.log(cpu);
    // console.log(ram);
    // console.log(rom);
    // console.log(graphic);

})