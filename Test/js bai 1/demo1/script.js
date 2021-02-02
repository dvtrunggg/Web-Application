// function phepChia(a,b)
// {
//     if (b == 0){
//         throw "chia so 0";
//     }
//     return a/b
// }

// try{
//     alert(phepChia(1,0));
// }catch(e){
//     // alert('Loi chia so 0' +e)
// }

// lấy nội dung từ thẻ có id = p1
var obj = document.getElementById('p1');
var content = obj.innerHTML; // .innerHTML là lấy ra nội dung
// alert(content);

var obj2 = document.getElementsByTagName("b");
var content2 = obj2[0].innerHTML; // nghĩa là lấy nội dung từ thẻ b đầu tiên (ở đây là 1 mảng các tag)
// alert(content2);

// tìm tất cả các đối tượng qua css có id là p1  và class là p2
var obj3 = document.querySelector("#p1.p2");
// var content3 = obj3.innerHTML;
// alert(content3);

// cập nhật lại, thay đổi nội dung của obj3
obj3.innerHTML = "Đây là nội dung mới của tag có id là p1 và class là p2"

//cập nhật, thay giá trị cho thuộc tính (nếu thuộc tính đó chưa có thì sẽ thêm mới)
obj.setAttribute('class','CSS')

//thêm thuộc tính style cho tag này 
obj.setAttribute('style','font-size: 2em')



function BatDau(){
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);
    alert(a+b+c);
}
