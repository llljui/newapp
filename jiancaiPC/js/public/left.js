/*左侧菜单*/
$(function(){
    $(".menu_main").hover(function(){
        $(this).children("dl").css("display","block");
        var menu_main_height=$(".menu_main").height();
        $(this).children("dl").children(".line_white").css("height",menu_main_height+6);
    },function(){
        $(this).children("dl").css("display","none");
    });
});