var result = document.getElementById('txtResult');
var input = document.getElementById('txtInput');
var btnClearEntry = document.getElementById('btnClearEntry');
var mot = document.getElementById('btn1');
var hai = document.getElementById('btn2');
var ba = document.getElementById('btn3');
var bon = document.getElementById('btn4');
var nam = document.getElementById('btn5');
var sau = document.getElementById('btn6');
var bay = document.getElementById('btn7');
var tam = document.getElementById('btn8');
var chin = document.getElementById('btn9');
var khong = document.getElementById('btn0');
btnClearEntry.addEventListener('click', function(){
       input.value = '0';
});
var btnClear = document.getElementById('btnClear');
btnClear.addEventListener('click', function(){
    result.value = '0';
});
input.value = '0'
result.value = '0'

mot.addEventListener('click', function(){
    input.value += 1
})
hai.addEventListener('click', function(){
    input.value += 2
})
ba.addEventListener('click', function(){
    input.value += 3
})
bon.addEventListener('click', function(){
    input.value += 4
})
nam.addEventListener('click', function(){
    input.value += 5
})
sau.addEventListener('click', function(){
    input.value += 6
})
bay.addEventListener('click', function(){
    input.value += 7
})
tam.addEventListener('click', function(){
    input.value += 8
})
chin.addEventListener('click', function(){
    input.value += 9
})
khong.addEventListener('click', function(){
    input.value += 0
})

var plus = document.getElementById('btnPlus');
plus.addEventListener('click', function(){
    var res = Number(result.value) + Number(input.value);
    result.value = res;
    input.value = '0';
})
var minus = document.getElementById('btnMinus');
minus.addEventListener('click', function(){
    var res = Number(result.value) - Number(input.value);
    result.value = res;
    input.value = '0';
})