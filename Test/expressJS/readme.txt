B1: npm install -g express
npm install -g express-generator 
//bấm express -h để check lại dòng 2
B2: express . để tạo ra các thư mục sử dụng (giống các thư mục trong TD12)
or sử dụng express --view=hbs nếu muốn dùng kiểu hbs


khi chạy ctrinh: npm install -> npm start (chạy nè, cần phải chạy lại mỗi khi sửa code)
cách 2: npm install nodemon ->nodemon (auto thay đổi giúp mình)

các file trong thư mục public sẽ dc loading qua ...
các file ngoài public phải dc định nghĩa trong routes
chỉnh port tại phần bin/www
//Nếu dùng hbs thì để, dùng react thì có thể xóa đi
tạo ra các thư mục để lưu trữ data base: config: lưu trữ biến môi trường, CHỨA DATABASE
models
controllers


//cấu trúc MVC: model-view-controller
model: hình ảnh ánh xạ tới database, giao tiếp vs database là ở đây
controller: xử lý require...
data sẽ đổi thành obj, nạp vào controller và bắn qua view...(ở view là biến thành HTML)
obj dc vẽ ra ở dạng jade, pug, hbs,... và chuyển thành html...
trong folder controllers: page->action 
routes: xử lý URL
