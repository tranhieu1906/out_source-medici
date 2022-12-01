/*This file is for your custom js.  All yours*/

// Calls input from form-input.html
let names = ['Bảo Vy', 'Cát Tường', 'Gia Hân', 'Hoài An', 'Khả Hân', 'Khánh Ngân', 'Khánh Ngọc', 'Linh Chi', 'Ngọc Khuê', 'Phúc An', 'Thanh Hà', 'Bích Hà', 'Thanh Thúy', 'An Nhiên', 'Bích Thảo', 'Bích Thủy', 'Ðoan Trang', 'Đan Tâm', 'Hiền Nhi', 'Hiền Thục', 'Hương Thảo', 'Minh Tâm', 'Mỹ Tâm', 'Nhã Phương', 'Phương Thùy', 'Phương Trinh', 'Phương Thảo', 'Thanh Mai', 'Thảo Chi', 'Thiên Thanh', 'Thục Quyên', 'Thục Trinh', 'Hương Chi', 'Anh Dũng', 'Anh Minh', 'Anh Tuấn', 'Anh Tú', 'Anh Thái', 'Anh Khoa', 'Bảo Khánh', 'Bảo Khang', 'Bảo Long', 'Chấn Hưng', 'Chấn Phong', 'Chí Kiên', 'Chí Thanh', 'Chiến Thắng', 'Ðăng Khoa', 'Ðức Bình', 'Ðức Tài', 'Ðức Toàn', 'Ðức Thắng', 'Đình Trung', 'Đình Phúc', 'Đông Quân', 'Đức Duy', 'Gia Bảo', 'Gia Huy', 'Gia Hưng', 'Gia Khánh', 'Hải Đăng', 'Hạo Nhiên', 'Hoàng Phi', 'Hùng Cường', 'Huy Hoàng', 'Hữu Đạt', 'Hữu Nghĩa', 'Hữu Phước', 'Hữu Tâm', 'Hữu Thiện', 'Kiến Văn', 'Khôi Nguyên', 'Khôi Vĩ', 'Mạnh Hùng', 'Mạnh Khôi', 'Minh Anh', 'Minh Đức', 'Minh Khang', 'Minh Khôi', 'Minh Nhật', 'Minh Quang', 'Minh Quân', 'Minh Triết', 'Ngọc Minh', 'Nhân Nghĩa', 'Nhân Văn', 'Nhật Minh', 'Phúc Điền', 'Phúc Hưng', 'Phúc Lâm', 'Phúc Thịnh', 'Quang Khải', 'Quang Vinh', 'Quốc Bảo', 'Quốc Trung', 'Sơn Quân', 'Tài Đức', 'Tấn Phát', 'Tấn Phong', 'Toàn Thắng', 'Tuấn Kiệt', 'Tùng Quân', 'Thạch Tùng', 'Thái Dương', 'Thái Sơn', 'Thành Công', 'Thành Đạt', 'Thanh Liêm', 'Thanh Phong', 'Thanh Tùng', 'Thanh Thế', 'Thiên Ân', 'Thiện Ngôn', 'Thiện Nhân', 'Thiện Tâm', 'Thông Đạt', 'Thụ Nhân', 'Trọng Nghĩa', 'Trung Dũng', 'Trung Kiên', 'Trung Nghĩa', 'Trường An', 'Trường Phúc', 'Trường Sơn', 'Uy Vũ', 'Xuân Trường'];
var users = [
  {
    image:
      "https://robohash.org/odiovoluptatemquidem.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/quiremdelectus.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/quispossimusducimus.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/sintquitotam.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/exercitationemearumquaerat.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/consequunturfacilisvoluptates.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/voluptatemrationererum.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/distinctioidquisquam.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/voluptatevoluptasnam.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/veletaperiam.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/laudantiumearumomnis.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/isterepellendusunde.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/temporadoloribusreiciendis.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/voluptassedaccusamus.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/ducimusdoloremiste.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/quinecessitatibusmollitia.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/quidemconsequaturlaudantium.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/eiusveroodio.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/incidunteasequi.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/inventoremaximequo.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/consequuntureiusvelit.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/inquaetenetur.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/aliasexnatus.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/impeditconsequaturlabore.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/dolorcummollitia.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/dictaquaeaut.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/rerumautemsoluta.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/sedutquis.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/aspernaturrerumatque.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/atnullavoluptatum.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/magnamvitaefugiat.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/enimeosnon.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/omnispraesentiumquaerat.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/eumplaceattempore.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/evenietnatusdolorem.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/eteosrepellat.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/cumeligendicorrupti.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/occaecatiutqui.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/sequiaspernaturaut.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/blanditiiseosoptio.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/temporibusvoluptatemitaque.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/facilisquamblanditiis.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/quaeautautem.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/sequiiurequo.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/utinillo.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/veromolestiasab.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/officiaautomnis.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/eligendirepellendusut.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/totamvoluptatemodit.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/enimeaet.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/itaqueeosex.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/officiisvelat.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/similiquevoluptasfugiat.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/velitidtempore.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/aliasquaeratqui.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/etassumendaexplicabo.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/inventoreaassumenda.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/reiciendisconsecteturut.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/dolorimpeditasperiores.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/accusantiumaccusamusfugiat.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/impeditquiareiciendis.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/asperioresmagnamrem.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/rerumerrorminus.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/eosvoluptatumaccusantium.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/esthicfacere.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/mollitiavoluptatescorporis.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/etvitaemollitia.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/distinctioetcorrupti.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/totamcorporissit.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/sequivelvelit.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/rerumutblanditiis.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/evenietaperiamofficia.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/totamnonmagnam.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/quiaquinesciunt.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/optioassumendatenetur.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/perspiciatisomnisminus.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/cumtemporaexcepturi.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/nobisdolorerem.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/erroriuresimilique.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/accusantiumomnismolestias.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/excepturimagnamiure.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/voluptatenumquamdoloribus.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/maximeeosnumquam.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/omnisquasvero.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/atqueperspiciatisea.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/nemoporroquo.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/sequiautut.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/expeditavoluptatemfacere.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/quiquodmagni.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/sedaccusamusveritatis.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/nequequiaet.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/quidemametminus.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/sequiquiexpedita.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/cumqueadipsum.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/autemvelnon.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/voluptasquisdignissimos.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/sedlaudantiumiusto.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/quissittenetur.png?size=100x100&set=set1",
  },
  {
    image: "https://robohash.org/teneturcumqueanimi.png?size=100x100&set=set1",
  },
  {
    image:
      "https://robohash.org/voluptasblanditiisid.png?size=100x100&set=set1",
  },
];

$(document).ready(function () {
  setInterval(() => {
    var randomTimer = Math.floor(Math.random() * 15000) + 10000;
    setTimeout(() => {
      var randomUser = Math.floor(Math.random() * 100);
      if (randomUser >= 0 && randomUser < 100) {
        var selectedUser = users[randomUser];
        var name = names[randomUser];
        $("#notiName").text(name);
        $("#notiAvatar").attr("src", selectedUser.image);
      }
      $("#myToast").toast("show");
      setTimeout(() => {
        $("#myToast").toast("hide");
      }, 5000);
    }, [randomTimer])
  }, 10000);

  countDown();
  //countdown
  setInterval(function time() {
    countDown();
  }, 1000);
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
