var includeDiv = $("#include");
$(window).on('hashchange', function() {
    var href = location.hash.slice(1) +".html";
    includeDiv.load('files/' + href);
});

$("#include").load("files/home.html");
