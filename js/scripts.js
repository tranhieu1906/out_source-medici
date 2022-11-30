/*This file is for your custom js.  All yours*/

// Calls input from form-input.html

var users = [
  {
    name: "Ilyse Lemery",
    image:
      "https://robohash.org/odiovoluptatemquidem.png?size=100x100&set=set1",
  },
  {
    name: "Kamilah Batting",
    image: "https://robohash.org/quiremdelectus.png?size=100x100&set=set1",
  },
  {
    name: "Anissa Kayley",
    image: "https://robohash.org/quispossimusducimus.png?size=100x100&set=set1",
  },
  {
    name: "Rhys Parzis",
    image: "https://robohash.org/sintquitotam.png?size=100x100&set=set1",
  },
  {
    name: "Andi Rampton",
    image:
      "https://robohash.org/exercitationemearumquaerat.png?size=100x100&set=set1",
  },
  {
    name: "Vittoria Bellamy",
    image:
      "https://robohash.org/consequunturfacilisvoluptates.png?size=100x100&set=set1",
  },
  {
    name: "Simeon Coull",
    image:
      "https://robohash.org/voluptatemrationererum.png?size=100x100&set=set1",
  },
  {
    name: "Nobe Bushell",
    image:
      "https://robohash.org/distinctioidquisquam.png?size=100x100&set=set1",
  },
  {
    name: "Vonni Pavelka",
    image:
      "https://robohash.org/voluptatevoluptasnam.png?size=100x100&set=set1",
  },
  {
    name: "Janessa Arthur",
    image: "https://robohash.org/veletaperiam.png?size=100x100&set=set1",
  },
  {
    name: "Dani McEttigen",
    image:
      "https://robohash.org/laudantiumearumomnis.png?size=100x100&set=set1",
  },
  {
    name: "Celestyna Hugli",
    image: "https://robohash.org/isterepellendusunde.png?size=100x100&set=set1",
  },
  {
    name: "Norene Beaumont",
    image:
      "https://robohash.org/temporadoloribusreiciendis.png?size=100x100&set=set1",
  },
  {
    name: "Kirbee Revell",
    image:
      "https://robohash.org/voluptassedaccusamus.png?size=100x100&set=set1",
  },
  {
    name: "Ingaberg Gosz",
    image: "https://robohash.org/ducimusdoloremiste.png?size=100x100&set=set1",
  },
  {
    name: "Haydon Weigh",
    image:
      "https://robohash.org/quinecessitatibusmollitia.png?size=100x100&set=set1",
  },
  {
    name: "Eberto Snarie",
    image:
      "https://robohash.org/quidemconsequaturlaudantium.png?size=100x100&set=set1",
  },
  {
    name: "Malcolm Gringley",
    image: "https://robohash.org/eiusveroodio.png?size=100x100&set=set1",
  },
  {
    name: "Elora Paulot",
    image: "https://robohash.org/incidunteasequi.png?size=100x100&set=set1",
  },
  {
    name: "Maddi Menego",
    image: "https://robohash.org/inventoremaximequo.png?size=100x100&set=set1",
  },
  {
    name: "Noelani Perett",
    image:
      "https://robohash.org/consequuntureiusvelit.png?size=100x100&set=set1",
  },
  {
    name: "Abbey Diggins",
    image: "https://robohash.org/inquaetenetur.png?size=100x100&set=set1",
  },
  {
    name: "Tiebold De Biasio",
    image: "https://robohash.org/aliasexnatus.png?size=100x100&set=set1",
  },
  {
    name: "Brad Brandassi",
    image:
      "https://robohash.org/impeditconsequaturlabore.png?size=100x100&set=set1",
  },
  {
    name: "Cordie Keune",
    image: "https://robohash.org/dolorcummollitia.png?size=100x100&set=set1",
  },
  {
    name: "Camey Murby",
    image: "https://robohash.org/dictaquaeaut.png?size=100x100&set=set1",
  },
  {
    name: "Lorilyn Flaubert",
    image: "https://robohash.org/rerumautemsoluta.png?size=100x100&set=set1",
  },
  {
    name: "Buiron Sineath",
    image: "https://robohash.org/sedutquis.png?size=100x100&set=set1",
  },
  {
    name: "Hyacinthia Aronin",
    image:
      "https://robohash.org/aspernaturrerumatque.png?size=100x100&set=set1",
  },
  {
    name: "Jabez Wormald",
    image: "https://robohash.org/atnullavoluptatum.png?size=100x100&set=set1",
  },
  {
    name: "Allys Dovydenas",
    image: "https://robohash.org/magnamvitaefugiat.png?size=100x100&set=set1",
  },
  {
    name: "Andee Laffan",
    image: "https://robohash.org/enimeosnon.png?size=100x100&set=set1",
  },
  {
    name: "Noelani McGrory",
    image:
      "https://robohash.org/omnispraesentiumquaerat.png?size=100x100&set=set1",
  },
  {
    name: "Malena Adamowicz",
    image: "https://robohash.org/eumplaceattempore.png?size=100x100&set=set1",
  },
  {
    name: "Avie O' Byrne",
    image: "https://robohash.org/evenietnatusdolorem.png?size=100x100&set=set1",
  },
  {
    name: "Major Beccera",
    image: "https://robohash.org/eteosrepellat.png?size=100x100&set=set1",
  },
  {
    name: "Kristy Tippett",
    image: "https://robohash.org/cumeligendicorrupti.png?size=100x100&set=set1",
  },
  {
    name: "Vally Bootton",
    image: "https://robohash.org/occaecatiutqui.png?size=100x100&set=set1",
  },
  {
    name: "Greta Matijevic",
    image: "https://robohash.org/sequiaspernaturaut.png?size=100x100&set=set1",
  },
  {
    name: "Valeda Wolsey",
    image: "https://robohash.org/blanditiiseosoptio.png?size=100x100&set=set1",
  },
  {
    name: "Brody Louedey",
    image:
      "https://robohash.org/temporibusvoluptatemitaque.png?size=100x100&set=set1",
  },
  {
    name: "Dillie O'Corrigane",
    image:
      "https://robohash.org/facilisquamblanditiis.png?size=100x100&set=set1",
  },
  {
    name: "Barry Whitlam",
    image: "https://robohash.org/quaeautautem.png?size=100x100&set=set1",
  },
  {
    name: "Jamesy Ginsie",
    image: "https://robohash.org/sequiiurequo.png?size=100x100&set=set1",
  },
  {
    name: "Brina Seadon",
    image: "https://robohash.org/utinillo.png?size=100x100&set=set1",
  },
  {
    name: "Shalom Halliwell",
    image: "https://robohash.org/veromolestiasab.png?size=100x100&set=set1",
  },
  {
    name: "Dulci Newlands",
    image: "https://robohash.org/officiaautomnis.png?size=100x100&set=set1",
  },
  {
    name: "Packston Konke",
    image:
      "https://robohash.org/eligendirepellendusut.png?size=100x100&set=set1",
  },
  {
    name: "Beatrice Ikringill",
    image: "https://robohash.org/totamvoluptatemodit.png?size=100x100&set=set1",
  },
  {
    name: "Alleyn Hallahan",
    image: "https://robohash.org/enimeaet.png?size=100x100&set=set1",
  },
  {
    name: "Guenna Giacomini",
    image: "https://robohash.org/itaqueeosex.png?size=100x100&set=set1",
  },
  {
    name: "Richardo Offill",
    image: "https://robohash.org/officiisvelat.png?size=100x100&set=set1",
  },
  {
    name: "Trina Diwell",
    image:
      "https://robohash.org/similiquevoluptasfugiat.png?size=100x100&set=set1",
  },
  {
    name: "Lewes Parkhouse",
    image: "https://robohash.org/velitidtempore.png?size=100x100&set=set1",
  },
  {
    name: "Kahlil Sheilds",
    image: "https://robohash.org/aliasquaeratqui.png?size=100x100&set=set1",
  },
  {
    name: "Worthington Chesterton",
    image:
      "https://robohash.org/etassumendaexplicabo.png?size=100x100&set=set1",
  },
  {
    name: "Ninette Goodbarr",
    image: "https://robohash.org/inventoreaassumenda.png?size=100x100&set=set1",
  },
  {
    name: "Ashia Gallatly",
    image:
      "https://robohash.org/reiciendisconsecteturut.png?size=100x100&set=set1",
  },
  {
    name: "Killie Goodday",
    image:
      "https://robohash.org/dolorimpeditasperiores.png?size=100x100&set=set1",
  },
  {
    name: "Perry Fitchett",
    image:
      "https://robohash.org/accusantiumaccusamusfugiat.png?size=100x100&set=set1",
  },
  {
    name: "Suzanna Jotcham",
    image:
      "https://robohash.org/impeditquiareiciendis.png?size=100x100&set=set1",
  },
  {
    name: "Fawnia Bulbrook",
    image: "https://robohash.org/asperioresmagnamrem.png?size=100x100&set=set1",
  },
  {
    name: "Welbie Welfare",
    image: "https://robohash.org/rerumerrorminus.png?size=100x100&set=set1",
  },
  {
    name: "Lari Wrixon",
    image:
      "https://robohash.org/eosvoluptatumaccusantium.png?size=100x100&set=set1",
  },
  {
    name: "Angela Milmo",
    image: "https://robohash.org/esthicfacere.png?size=100x100&set=set1",
  },
  {
    name: "Uta Isaaksohn",
    image:
      "https://robohash.org/mollitiavoluptatescorporis.png?size=100x100&set=set1",
  },
  {
    name: "Judy Boissieux",
    image: "https://robohash.org/etvitaemollitia.png?size=100x100&set=set1",
  },
  {
    name: "Derrick Goosey",
    image:
      "https://robohash.org/distinctioetcorrupti.png?size=100x100&set=set1",
  },
  {
    name: "Kordula Dobell",
    image: "https://robohash.org/totamcorporissit.png?size=100x100&set=set1",
  },
  {
    name: "Elva Shrawley",
    image: "https://robohash.org/sequivelvelit.png?size=100x100&set=set1",
  },
  {
    name: "Tann Langfield",
    image: "https://robohash.org/rerumutblanditiis.png?size=100x100&set=set1",
  },
  {
    name: "Maud MacGeffen",
    image:
      "https://robohash.org/evenietaperiamofficia.png?size=100x100&set=set1",
  },
  {
    name: "Jonie Haldene",
    image: "https://robohash.org/totamnonmagnam.png?size=100x100&set=set1",
  },
  {
    name: "Latia Siene",
    image: "https://robohash.org/quiaquinesciunt.png?size=100x100&set=set1",
  },
  {
    name: "Walliw MacElane",
    image:
      "https://robohash.org/optioassumendatenetur.png?size=100x100&set=set1",
  },
  {
    name: "Charisse McClunaghan",
    image:
      "https://robohash.org/perspiciatisomnisminus.png?size=100x100&set=set1",
  },
  {
    name: "Mycah Rainsdon",
    image: "https://robohash.org/cumtemporaexcepturi.png?size=100x100&set=set1",
  },
  {
    name: "Dev Leach",
    image: "https://robohash.org/nobisdolorerem.png?size=100x100&set=set1",
  },
  {
    name: "Flore Dinse",
    image: "https://robohash.org/erroriuresimilique.png?size=100x100&set=set1",
  },
  {
    name: "Brnaby Eccleston",
    image:
      "https://robohash.org/accusantiumomnismolestias.png?size=100x100&set=set1",
  },
  {
    name: "Hanna Pentycross",
    image: "https://robohash.org/excepturimagnamiure.png?size=100x100&set=set1",
  },
  {
    name: "Pepito Tison",
    image:
      "https://robohash.org/voluptatenumquamdoloribus.png?size=100x100&set=set1",
  },
  {
    name: "Ceil Tideswell",
    image: "https://robohash.org/maximeeosnumquam.png?size=100x100&set=set1",
  },
  {
    name: "Flor Frenchum",
    image: "https://robohash.org/omnisquasvero.png?size=100x100&set=set1",
  },
  {
    name: "Whitney Northcliffe",
    image: "https://robohash.org/atqueperspiciatisea.png?size=100x100&set=set1",
  },
  {
    name: "Randee Palliser",
    image: "https://robohash.org/nemoporroquo.png?size=100x100&set=set1",
  },
  {
    name: "Valentino Depka",
    image: "https://robohash.org/sequiautut.png?size=100x100&set=set1",
  },
  {
    name: "Tracie Foy",
    image:
      "https://robohash.org/expeditavoluptatemfacere.png?size=100x100&set=set1",
  },
  {
    name: "Rey Urion",
    image: "https://robohash.org/quiquodmagni.png?size=100x100&set=set1",
  },
  {
    name: "Stern Reuben",
    image:
      "https://robohash.org/sedaccusamusveritatis.png?size=100x100&set=set1",
  },
  {
    name: "Geri Burtwistle",
    image: "https://robohash.org/nequequiaet.png?size=100x100&set=set1",
  },
  {
    name: "Gwendolin Springett",
    image: "https://robohash.org/quidemametminus.png?size=100x100&set=set1",
  },
  {
    name: "Clemence Jessard",
    image: "https://robohash.org/sequiquiexpedita.png?size=100x100&set=set1",
  },
  {
    name: "Ron Grocock",
    image: "https://robohash.org/cumqueadipsum.png?size=100x100&set=set1",
  },
  {
    name: "Dov Claxson",
    image: "https://robohash.org/autemvelnon.png?size=100x100&set=set1",
  },
  {
    name: "Noami Glading",
    image:
      "https://robohash.org/voluptasquisdignissimos.png?size=100x100&set=set1",
  },
  {
    name: "Barron Maryott",
    image: "https://robohash.org/sedlaudantiumiusto.png?size=100x100&set=set1",
  },
  {
    name: "Jandy Caunce",
    image: "https://robohash.org/quissittenetur.png?size=100x100&set=set1",
  },
  {
    name: "Friederike Schieferstein",
    image: "https://robohash.org/teneturcumqueanimi.png?size=100x100&set=set1",
  },
  {
    name: "Robina Greenley",
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
        $("#notiName").text(selectedUser.name);
        $("#notiAvatar").attr("src", selectedUser.image);
        // $("#notiAvatar").text("https://joeschmoe.io/api/v1/random");
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
