$(document).ready(function(e) {
    //注册框居中
    var top = ($(window).height() - $(".register_box_box").height())/2;
    var left = ($(window).width() - $(".register_box_box").width())/2;
    $(".register_box_box").css({"top":(top),"left":(left-30)}).show();



});

