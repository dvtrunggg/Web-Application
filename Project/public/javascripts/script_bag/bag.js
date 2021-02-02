var bag = JSON.parse(localStorage.getItem('bag'));
var number = JSON.parse(localStorage.getItem('number'));
var product = JSON.parse(localStorage.getItem('product'));

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



//console.log(product);

//var items = JSON.parse(localStorage.getItem('items'));

//localStorage.removeItem('bag');

if (bag == null || bag.length == 0)
{
    //console.log(bag);
    document.getElementsByClassName('container-fluid')[0].innerHTML = 
    `
    <div id="content-img" class="d-flex align-items-end d-flex justify-content-center">
        <img id="icon-bag-empty" src="/images/img_bag/shopping-cart.webp">
        <p>Your cart is empty</p>
    </div><hr>
    
    <div id="content-button" class="d-flex align-items-start d-flex justify-content-center">
        <a href="/"><button type="button" class="btn btn-outline-dark">Buy now</button></a>
    </div>
    `;
}
else 
{
    ////////////////////////////// hien thi thong tin ///////////////////////////////////////

    var div_item = '';
    for (let i = 0; i < product.length; i++)
    {
        if (number[i] != 0)
        {
            let temp_arr = {};
            Object.assign(temp_arr, product[i]);
            delete temp_arr.image;
            delete temp_arr._id;
            delete temp_arr.__v;
            
            var str = '';
            for (let key in temp_arr) 
            {
                if (temp_arr.hasOwnProperty(key)) {
                    let obj_key = '';
                    
                    switch(key)
                    {
                        case 'name': obj_key = 'Name'; break;
                        case 'count': obj_key = 'Number'; break;
                        case 'color': obj_key = 'Color'; break;
                        case 'type': obj_key = 'Type'; break;
                        case 'rom': obj_key = 'ROM'; break;
                        case 'ram': obj_key = 'RAM'; break;
                        case 'color': obj_key = 'Color'; break;
                        case 'price': obj_key = 'Price'; break;
                        case 'inch': obj_key = 'Model (inch display)';
                        case 'more': obj_key = 'Connectivity'; break;
                        case 'case_size': obj_key = 'Case size'; break;
                        case 'band_size': obj_key = 'Band size'; break;
                        case 'graphic': obj_key = 'Graphic'; break;

                    };

                    if(obj_key == '')
                    {
                        obj_key = key;
                    }

                    str += `${obj_key}: ` + ' ' + temp_arr[key] + ' | ';
                }
            }
            
            div_item +=
            `
                <div class="card" style="width: 18rem;" id="${i}">
                    <img style="width: 250px; height: 300px" src="${product[i].image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <div style="height: 50px;">
                            <h5 class="card-title">${product[i].name.toUpperCase()}</h5>
                        </div>
                        
                        <div style="height: 140px;">
                            <p class="card-text">${str}</p>
                        </div>
                        
                        <div style="height: 100px;">
                            Number: <input type="number" value="${number[i]}" min="0" max="${product[i].count}" onchange="changeNumber(${i+1000})" id="${i+1000}"></br>
                            <button style="width: 60%; font-size: 1em" type="button" class="btn btn-outline-danger" onclick="removeItem(${i})">Remove</button>
                        </div>
                        
                        
                    </div>
                </div>
            `;
        }
    }

    document.getElementsByClassName('container-fluid')[0].innerHTML = 
    `
        <div id="display-item" class="d-flex align-content-between flex-wrap justify-content-center" >
            <p>${div_item}</p>

            <div id="layout-getinfo" style="margin: 0; margin-top: 2.5%;" class="d-flex align-items-center justify-content-center" data-toggle="modal" data-target="#exampleModal">
                <button type="button" class="btn btn-light" data-toggle="modal" data-target="#staticBackdrop" id="button-get-info">
                    Buy now
                </button>
            </div>
        </div>
    `;

    /////////////////////////////////////////////////////////////////////
}
// <button type="button" class="btn btn-light " id="button-get-info">Buy now</button>

function removeItem(id) {

    if (confirm('Are you sure to remove this item?')) 
    {
        let obj = document.getElementById(id);
        obj.parentNode.removeChild(obj);

        let new_arr = [];

        for(let i = 0; i < bag.length; i++)
        {
            if(isEqual(product[id], bag[i]) != true)
            {
                new_arr.push(bag[i]);
            }
        }

        console.log(new_arr);
        bag = new_arr;

        localStorage.setItem('bag', JSON.stringify(bag));

        updateArrIfo();

        if (bag == null || bag.length == 0)
        {
            //console.log(bag);
            document.getElementsByClassName('container-fluid')[0].innerHTML = 
            `
            <div id="content-img" class="d-flex align-items-end d-flex justify-content-center">
                <img id="icon-bag-empty" src="/images/img_bag/shopping-cart.webp">
                <p>Your cart is empty</p>
            </div><hr>

            <div id="content-button" class="d-flex align-items-start d-flex justify-content-center">
                <a href="/"><button type="button" class="btn btn-outline-dark">Buy now</button></a>
            </div>
            `
        }
    }

}


function changeNumber(id)
{
    let num = document.getElementById(id).value;
    // console.log(num);
    
    let temp_arr = [];
    for(let i = 0; i < bag.length; i++)
    {
        if (!isEqual(bag[i], product[id-1000]))
        {
            temp_arr.push(bag[i]);
        }
    }

    for(let i = 0; i < num; i++)
    {
        temp_arr.push(product[id-1000]);
    }

    bag = temp_arr;
    localStorage.setItem('bag', JSON.stringify(bag));

    updateArrIfo();

    // number[id-1000] = value;
    // localStorage.setItem('number', JSON.stringify(number));

    if (num == 0)
    {
        removeItem(id-1000);
    }
    else
    {
        if(bag == null || bag.length == 0)
        {
            //console.log(bag);
            document.getElementsByClassName('container-fluid')[0].innerHTML = 
            `
            <div id="content-img" class="d-flex align-items-end d-flex justify-content-center">
                <img id="icon-bag-empty" src="/images/img_bag/shopping-cart.webp">
                <p>Your cart is empty</p>
            </div><hr>
            
            <div id="content-button" class="d-flex align-items-start d-flex justify-content-center">
                <a href="/"><button type="button" class="btn btn-outline-dark">Buy now</button></a>
            </div>
            `
        }
    }
    
}
