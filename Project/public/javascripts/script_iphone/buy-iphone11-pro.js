function changeCorlor() {
    const item=document.querySelectorAll(".item");

    for (let k = 0; k < item.length; k++) {
        let box = item[k].querySelectorAll(".box-small");
        if (box.length == 0) {
            box = item[k].querySelectorAll(".box-big");
        }
        //console.log(box);
        for (let i=0; i < box.length; i++) {
            box[i].addEventListener("click", function() {
                for (let j = 0; j < box.length; j++) {
                    box[j].classList.remove("change_border");
                }
                this.classList.add("change_border");
            })
        }
    }
}

changeCorlor();



function selectItem() {
    var card = document.querySelectorAll(".card");

    for (let i = 0; i < card.length; i++) {
        let box = card[i].querySelectorAll(".box");
            for (let j = 0; j < box.length; j++) {
                box[j].addEventListener("click", function() {
                   
                    window.scrollBy(0, 90);
                      
                    // collcapse, collapsing when item is clicked
                    let arr_collapse = ['#collapseOne', '#collapseTwo', '#collapseThree'];
                    let collapse = card[i].querySelector(arr_collapse[i]);
                    if (collapse.classList.contains("collapse", "show"))
                    {     
                        collapse.classList.replace("collapse", "collapsing");
                        collapse.classList.remove("show");
                    }

                    // rename card-header
                    let para = card[i].querySelector("#para");          // ex: Model
                    let para_save = para.innerHTML;
                    let selected = box[j].querySelector("#selected");   // ex: 11 inch
                    para.innerHTML = selected.innerHTML;

                    // change color, size card-header
                    let change_button = card[i].querySelector("#change-button");  
                    change_button.innerHTML = "Change";
                    para.classList.add("para-selected");

                    // card-header border
                    let card_header = card[i].querySelector(".card-header");
                    card_header.classList.add("card-header-selected");
                    if (i == 0) {
                        card_header.classList.add("card-header-selected-first");
                    }

                    // card padding-bottom
                    card[i].classList.add("card-selected");
                    
                    // change box when selected option (change box when click card-header)
                    card_header.addEventListener("click", function() {
                        card_header.classList.remove("card-header-selected");
                        card_header.classList.remove("card-header-selected-first");
                        para.innerHTML = para_save;
                        change_button.innerHTML = "";
                        para.classList.remove("para-selected");
                        card[i].classList.remove("card-selected");
                    })
                })
            }
    }
}

selectItem();


//////////////////////////////////su li trinh duyet
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

var addToBag = document.getElementById('addToBag');
var color = document.getElementsByClassName('checkColor')[0];
var rom = document.getElementsByClassName('checkRom')[0];
var model = document.getElementsByClassName('checkModel')[0];

var bag = JSON.parse(localStorage.getItem('bag'));

// var list_product = JSON.parse(localStorage.getItem('list_product'))

if(bag == null)
    bag =[];

addToBag.addEventListener('click', function(){
    // console.log(color.innerText);
    // console.log(rom.innerText);

    let getColor = color.innerText.toLowerCase();
    let getRom = rom.innerText;
    let getModel = model.innerText.toLowerCase();

    if (getColor == 'space grey')
    {
        getColor = 'grey';
    }

    if (getColor == 'midnightt green')
    {
        getColor = 'green';
    }

    if (getModel == 'iphone11 pro')
    {
        getModel = 'iphone 11 pro';
    }
    else
    {
        if (getModel == 'iphone 11 pro max')
        getModel = 'iphone 11 proMax';
    }

    //console.log(getModel);
    
    let url = `http://localhost:4000/data/iphone?name=${getModel}&color=${getColor}&rom=${getRom}`;
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


});