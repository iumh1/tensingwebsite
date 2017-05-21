/*
Script: https://teamtreehouse.com/community/loading-external-html-into-a-div-using-jquery
*/
var includeDiv = $("#include");
$(window).on('hashchange', function() {
    var href = location.hash.slice(1) +".html";
    includeDiv.load('files/' + href);
});
/*part ended*/

$("#include").load("files/home.html");
