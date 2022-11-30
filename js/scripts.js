/*This file is for your custom js.  All yours*/

// Calls input from form-input.html


$(document).ready(function () {
  var users = ["Hà Huy Toàn", "Lại Văn Sơn", "Hà Văn Huy", "Lê Thị Thường", "Vũ Huy Hoàng", "Trịnh Hồng Sơn"]
  setInterval(() => {
    var randomUser = Math.floor(Math.random() * 6);
    if(randomUser >= 0 && randomUser < 6) {
      var selectedUser = users[randomUser];
      $("#notiName").text(selectedUser);
      $("#notiAvatar").text("https://joeschmoe.io/api/v1/random")
    }
    $("#myToast").toast("show");
    setTimeout(() => {
      $("#myToast").toast("hide");
    }, 2000)
  }, 5000)
});
