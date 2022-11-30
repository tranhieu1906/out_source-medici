/*This file is for your custom js.  All yours*/

// Calls input from form-input.html

$(document).ready(function () {
  var users = [
    "Hà Huy Toàn",
    "Lại Văn Sơn",
    "Hà Văn Huy",
    "Lê Thị Thường",
    "Vũ Huy Hoàng",
    "Trịnh Hồng Sơn",
  ];
  setInterval(() => {
    var randomUser = Math.floor(Math.random() * 6);
    if (randomUser >= 0 && randomUser < 6) {
      var selectedUser = users[randomUser];
      $("#notiName").text(selectedUser);
      $("#notiAvatar").text("https://joeschmoe.io/api/v1/random");
    }
    $("#myToast").toast("show");
    setTimeout(() => {
      $("#myToast").toast("hide");
    }, 2000);
  }, 5000);
  countDown()
  //countdown
  setInterval(function time(){
    countDown()
  }, 1000);
});

function countDown() {
  var d = new Date();
  var hour = d.getHours();
  if(hour >= 9) {
    hour = 24 - (hour - 9)
  } else {
    hour = 9 - hour
  }
  var min = 60 - d.getMinutes();
  if((min + '').length == 1){
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length == 1){
        sec = '0' + sec;
  }
  $(".countdown--hour").text(hour)
  $(".countdown--minute").text(min)
  $(".countdown--second").text(sec)
}