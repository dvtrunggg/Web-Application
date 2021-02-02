var phoneNode = document.getElementById('validationCustom03');
var addressNode = document.getElementsByClassName('adress')[0];
var firstNameNode = document.getElementById('validationCustom01');
var lastNameNode = document.getElementById('validationCustom02');


document.getElementById('form').addEventListener('submit', function(){
    
    var phone = phoneNode.value;
    var address = addressNode.value;
    var firstName = firstNameNode.value;
    var lastName = lastNameNode.value;


    console.log(phone);
    console.log(address);
    console.log(firstName);
    console.log(lastName);
})
