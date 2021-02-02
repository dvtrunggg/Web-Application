var phoneNode = document.getElementById('validationCustom03');
//var addressNode = document.getElementsByClassName('adress')[0];
var firstNameNode = document.getElementById('validationCustom01');
var lastNameNode = document.getElementById('validationCustom02');
var addressNode = document.getElementById('validationCustom05');
var emailNode = document.getElementById('validationCustom04');

var number = JSON.parse(localStorage.getItem('number'));
var product = JSON.parse(localStorage.getItem('product'));

document.getElementById('submit').addEventListener('click', function(){
    
    var phone = phoneNode.value;
    var address = addressNode.value;
    var firstName = firstNameNode.value;
    var lastName = lastNameNode.value;
    var email = emailNode.value;

    var items = [];

    for (let i = 0; i < product.length; i++)
    {
      if (number[i] != 0)
      {
        items.push(product[i]);
      }

    }

    for (let i = 0; i < items.length; i++)
    {
      delete items[i]._id;
      delete items[i].__v;
    }

    let total = 0;
    for (let i = 0; i < items.length; i++)
    {
      total += items[i].price;
    }

    let json_temp = {
        firstName: firstName,
        lastName : lastName,
        phone : phone,
        email : email,
        address : address,
        status : 'Waitting',
        total : total,
        product : items,
        }

      console.log(json_temp);
    
    fetch('/bag', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(json_temp),
      })
      .then(response => response.json())
      .then(data => {
      console.log('Success:', data);
      })
    .catch((error) => {
      console.error('Error:', error);
    });

    localStorage.removeItem('bag');
    localStorage.removeItem('product');
    localStorage.removeItem('number');

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
    
    //alert('Successfully!');

})


