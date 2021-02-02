function check() {
 
  var data = new Array();
  data[0] = document.getElementById('userName').value;
  data[1] = document.getElementById('Email').value;
  data[2] = document.getElementById('passw').value;
  data[3] = document.getElementById('re_passw').value;
  data[4] = document.getElementById('answer').value;
  data[5] = document.getElementById('last_mid_Name').value;
  data[6] = document.getElementById('Name').value;


  var myerror = new Array();
  myerror[0] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập tên</span>";
  myerror[1] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập email</span>";
  myerror[2] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập mật khẩu</span>";
  myerror[3] = "<span style='color:red,font-weight:bold'>Mật khẩu chưa khớp</span>";
  myerror[4] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập câu trả lời</span>";
  myerror[5] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập họ và tên lót</span>";
  myerror[6] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập tên</span>";


  var nearby = new Array("z-name", "z-email", "z-password", "z-cpassword", "z-answer", "z-last_mid_name", "z-yourName");

  for (i in data) {
      var error = myerror[i];
      var div = nearby[i];

      if (data[i]=="") {
          document.getElementById(div).innerHTML = error;
      } else {
          document.getElementById(div).innerHTML = "OK!";
      }
  }

}