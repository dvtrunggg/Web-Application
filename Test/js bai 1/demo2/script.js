


// var obj_p1 = document.getElementById('p1');
// // obj_p1.innerHTML= '<p class="p01">Sửa p1 r nè</p>';
// obj_p1.setAttribute('class', 'p01')
// alert(obj_p1.getAttribute('class'))

// console.log(document.getElementById('div1').innerText);
// console.log(document.getElementById('div1').innerHTML);
// console.log(document.getElementById('div1').outerHTML);

function addClass(node){
    node.setAttribute('class','p p01');
}



var p2=document.getElementById('p2');
p2.onmouseover = function(){
    p2.setAttribute('class','p p01')
}
p2.onmouseout = function(){
    p2.setAttribute('class','p')

}

    var p3 = document.getElementById('p3');
    p3.addEventListener('mousedown',a);
    function a() {
        alert('hello');
    }
    p3.removeEventListener('mousedown',a);

