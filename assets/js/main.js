/*
Script: https://teamtreehouse.com/community/loading-external-html-into-a-div-using-jquery
*/
var includeDiv = $("#include");
$(window).on('hashchange', function() {
    var href = location.hash.slice(1) +".html";
    $("#progressbar").show("fast");
    includeDiv.load('files/' + href);
    $("#progressbar").hide();
});
/*part ended*/

$("#include").load("files/home.html");
$("#progressbar").hide("100");
