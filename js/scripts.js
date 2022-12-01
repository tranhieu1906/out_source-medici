/*This file is for your custom js.  All yours*/

// Calls input from form-input.html
let names = ['Bảo Vy', 'Cát Tường', 'Gia Hân', 'Hoài An', 'Khả Hân', 'Khánh Ngân', 'Khánh Ngọc', 'Linh Chi', 'Ngọc Khuê', 'Phúc An', 'Thanh Hà', 'Bích Hà', 'Thanh Thúy', 'An Nhiên', 'Bích Thảo', 'Bích Thủy', 'Ðoan Trang', 'Đan Tâm', 'Hiền Nhi', 'Hiền Thục', 'Hương Thảo', 'Minh Tâm', 'Mỹ Tâm', 'Nhã Phương', 'Phương Thùy', 'Phương Trinh', 'Phương Thảo', 'Thanh Mai', 'Thảo Chi', 'Thiên Thanh', 'Thục Quyên', 'Thục Trinh', 'Hương Chi', 'Anh Dũng', 'Anh Minh', 'Anh Tuấn', 'Anh Tú', 'Anh Thái', 'Anh Khoa', 'Bảo Khánh', 'Bảo Khang', 'Bảo Long', 'Chấn Hưng', 'Chấn Phong', 'Chí Kiên', 'Chí Thanh', 'Chiến Thắng', 'Ðăng Khoa', 'Ðức Bình', 'Ðức Tài', 'Ðức Toàn', 'Ðức Thắng', 'Đình Trung', 'Đình Phúc', 'Đông Quân', 'Đức Duy', 'Gia Bảo', 'Gia Huy', 'Gia Hưng', 'Gia Khánh', 'Hải Đăng', 'Hạo Nhiên', 'Hoàng Phi', 'Hùng Cường', 'Huy Hoàng', 'Hữu Đạt', 'Hữu Nghĩa', 'Hữu Phước', 'Hữu Tâm', 'Hữu Thiện', 'Kiến Văn', 'Khôi Nguyên', 'Khôi Vĩ', 'Mạnh Hùng', 'Mạnh Khôi', 'Minh Anh', 'Minh Đức', 'Minh Khang', 'Minh Khôi', 'Minh Nhật', 'Minh Quang', 'Minh Quân', 'Minh Triết', 'Ngọc Minh', 'Nhân Nghĩa', 'Nhân Văn', 'Nhật Minh', 'Phúc Điền', 'Phúc Hưng', 'Phúc Lâm', 'Phúc Thịnh', 'Quang Khải', 'Quang Vinh', 'Quốc Bảo', 'Quốc Trung', 'Sơn Quân', 'Tài Đức', 'Tấn Phát', 'Tấn Phong', 'Toàn Thắng', 'Tuấn Kiệt', 'Tùng Quân', 'Thạch Tùng', 'Thái Dương', 'Thái Sơn', 'Thành Công', 'Thành Đạt', 'Thanh Liêm', 'Thanh Phong', 'Thanh Tùng', 'Thanh Thế', 'Thiên Ân', 'Thiện Ngôn', 'Thiện Nhân', 'Thiện Tâm', 'Thông Đạt', 'Thụ Nhân', 'Trọng Nghĩa', 'Trung Dũng', 'Trung Kiên', 'Trung Nghĩa', 'Trường An', 'Trường Phúc', 'Trường Sơn', 'Uy Vũ', 'Xuân Trường'];

$(document).ready(function () {
  var timer
  setInterval(() => {
    var randomTimer = Math.floor(Math.random() * 15000) + 10000;
    setTimeout(() => {
      var randomUser = Math.floor(Math.random() * 100);
      if (randomUser >= 0 && randomUser < 100) {
        var name = names[randomUser];
        $("#notiName").text(name);
      }
      $("#myToast").toast("show");
      clearTimeout(timer);
      timer = setTimeout(() => {
        $("#myToast").toast("hide");
      }, 5000);
    }, [randomTimer])
  }, 10000);

  countDown();
  //countdown
  setInterval(function time() {
    countDown();
  }, 1000);

  //
  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
});

function countDown() {
  var d = new Date();
  var hour = d.getHours();
  if (hour >= 9) {
    hour = 24 - (hour - 9);
  } else {
    hour = 9 - hour;
  }
  var min = 60 - d.getMinutes();
  if ((min + "").length == 1) {
    min = "0" + min;
  }
  var sec = 60 - d.getSeconds();
  if ((sec + "").length == 1) {
    sec = "0" + sec;
  }
  $(".countdown--hour").text(hour);
  $(".countdown--minute").text(min);
  $(".countdown--second").text(sec);
}
//cef9fef2-6bc6-4db7-b17e-14be9834e926
//f1e59fb6-a616-4b76-a810-1db0f752d9b1
function sendEmail() {
  console.log("sendEmail", Email)
  Email.send({
    SecureToken : "f1e59fb6-a616-4b76-a810-1db0f752d9b1",
    To : 'thahuy920@gmail.com',
    From : "toan.ha@sotatek.com",
    Subject : "CV ứng tuyển CMD",
    Body : "<p>Tên: Hà Tiến Duẩn</p><p>age: 24</p>`"
}).then(
  message => alert(message)
);
}