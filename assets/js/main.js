var progressbar = $("#progressbar");
var includeDiv = $("#include");

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
    includeDiv.load("files/home.html");
  } else {
    includeDiv.load('files/' + href);
  }
  progressbar.hide();
  navcontrol();
}

includeIntoDiv();
