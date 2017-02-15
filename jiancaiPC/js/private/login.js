$(document).ready(function(e) {
    //登录框居中
    var top = ($(window).height() - $(".login_box_box").height())/2;
    var left = ($(window).width() - $(".login_box_box").width())/2;
    $(".login_box_box").css({"top":(top),"left":(left-30)}).show();

    //logo在登录框中居中
    var top = ($(".login_box_box").height() - $(".logo").height())/2;
    var left = ($(".login_box_box").width() - $(".logo").width())/2;
    $(".logo").css({"left":(left-30)}).show();

    //login按钮点击事件
    $(".login_btn").click(function(){
        window.location.href="home.html";
    });
});

