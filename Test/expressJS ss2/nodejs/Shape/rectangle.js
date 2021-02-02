// khai báo và định nghĩa các fuction (giống file .h nè)

//hình chữ nhật nè

//"area" là function mình viết
exports.area = (width, height) => width * height; //(arrow function)

//circumference là 1 function, cách khai báo này giống ở trên
//  exports.circumference = (width, height) => 2 *(width + height); //<=> với hàm ở dưới
exports.circumference = function(width, height){
    return 2 * (width + height);
}

//cách 2
module.exports = {
    //"area" is a function (dien tich)
    area: (width,  height) => {
        return width * height;
    },
    circumference: (width, height) =>{
        console.log("Dang tính nè...");
        return (width + height) * 2;
    }

}

