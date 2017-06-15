var progressbar = $("#progressbar");
var includeDiv = $("#include");
var carousel = $("#includeCarousel");

$(window).on('hashchange', function() {
    includeIntoDiv();
});

function navcontrol(){
  if ($(window).width() <= 800){
      $('#btnTrigger').click();
  }
}

function includeIntoDiv(){
  progressbar.show();
  var href = location.hash.slice(1) +".html";
  if (href==".html") {
    carousel.load("files/home.html");
    carousel.show();
    includeDiv.hide();
  } else {
    includeDiv.load('files/' + href);
    carousel.hide();
    includeDiv.show();
    navcontrol();
  }
  progressbar.hide();
}

includeIntoDiv();
