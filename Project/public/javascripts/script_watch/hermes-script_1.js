var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function changeBorderColor() {
  document.getElementById("my-table").style.border = "think solid blue";
}


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
                  let arr_collapse = ['#collapseOne', '#collapseTwo', '#collapseThree', '#collapseFour'];
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



///////////////////// lay du lieu trinh duyet

var case_size = document.getElementsByClassName('case_size')[0];
var connectivity = document.getElementsByClassName('connectivity')[0];
var band_size = document.getElementsByClassName('band_size')[0];

var bag = JSON.parse(localStorage.getItem('bag'));

// var list_product = JSON.parse(localStorage.getItem('list_product'))

if(bag == null)
    bag =[];


document.getElementById('bag').addEventListener('click', function(){
    var t_case = case_size.innerHTML.toLowerCase();    // trả về space grey thì value trong database là grey đó:))
    var t_connectivity = connectivity.innerText.toLowerCase();
    var t_band = band_size.innerText.toLowerCase();

    ///////

    let url = `http://localhost:4000/data/watch?name=watch hermes&color=${color}&rom=${rom}&more=${connect}`; 

    //console.log(url);

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

    });

    //////



    // console.log(color);
    // console.log(rom);
    // console.log(connect);
})