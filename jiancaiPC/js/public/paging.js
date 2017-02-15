// JavaScript Document
$(document).ready(function(e) {
    //$("#prev").attr("disabled", true);
    $("#prev").click(function(){
        if($(".padding_current").next().next().text()==null||$(".padding_current").prev().prev().text()==""){
            alert("已经是首页");
        }else{
            $(".padding_current").removeClass("padding_current").prev().addClass("padding_current");
        }
    });
    $("#next").click(function(){
        //$(".btn-paging").siblings().removeClass("padding_current");
        if($(".padding_current").next().next().text()==null||$(".padding_current").next().next().text()==""){
            alert("已经是尾页");
            //$("#next").attr("disable",true);
        }else{
            $(".padding_current").removeClass("padding_current").next().addClass("padding_current");
        }
        //alert($(".padding_current").next().text());
    });
    $(".digit").click(function(){
        $(this).siblings().removeClass("padding_current");
        $(this).addClass("padding_current");
        //lert($(this).text());
    });
});