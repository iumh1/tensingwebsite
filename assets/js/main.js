/*
Script: https://teamtreehouse.com/community/loading-external-html-into-a-div-using-jquery
*/
var includeDiv = $("#include");
$(window).on('hashchange', function() {
    var href = location.hash.slice(1) +".html";
    $("#progressbar").show("fast");
    includeDiv.load('files/' + href);
    $("#progressbar").hide();
    navcontrol();
});
/*part ended*/

function navcontrol(){
  if ($(window).width() <= 800){
      $('#btnTrigger').click();
  }
}

$("#include").load("files/home.html");
$("#progressbar").hide("fast");
