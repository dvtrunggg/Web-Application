//cách 1: (dùng khi có nhiều hàm), ta định nghãi các hàm ở file khác và gọi nó tại file này

const rect = require('./Shape/rectangle') // khai báo file chứa function đã định nghĩa (giống import module trong python hoặc include "file.h" trong c++)
console.log(`the area of rectangle (dien tich): width = 10, height = 20 is ${rect.area(10,20)}`)
console.log(`the circumference of rectangle (chu vi): width = 10, height = 20 is ${rect.circumference(10,20)}`)

const cir = require('./Shape/circle')
console.log(`Dien tich hinh tron co r = 10: ${cir.dienTich(10)}`)
//cách 2: chúng ta sẽ public các function ra  (giống như chỉ viết 1 file.cpp) - tại file rectangle
