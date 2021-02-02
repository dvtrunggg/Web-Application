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


var connect = "gps cellular";

var name = document.getElementsByClassName('name_cart')[0].innerText.toLowerCase();
//var type = document.getElementsByClassName('watch-title')[0].innerText.toLowerCase();
//var band_size = document.getElementsByClassName('band_size')[0].innerText.toLowerCase();

var bag = JSON.parse(localStorage.getItem('bag'));

// var list_product = JSON.parse(localStorage.getItem('list_product'))

if(bag == null)
    bag =[];

document.getElementById('bag').addEventListener('click', function(){
    
    let type = "apple watch hermes";
    var sizeCheck = document.getElementsByClassName('checkSize')[0].innerText.toLowerCase();
    
    let url = `http://localhost:4000/data/watch?name=${name}&type=${type}&case_size=${sizeCheck}&connect=${connect}`; 

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
    
    //  console.log(sizeCheck);
    //  console.log(connect);
    // // //console.log(band_size);
    
    //  console.log(name);
    //  console.log(type);

})