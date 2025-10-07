$("h1").css("color", "blue");
$("h1").css("font-size", "90px");

$(document).keypress(function (event) {
  $("h1").text(event.key);
});

