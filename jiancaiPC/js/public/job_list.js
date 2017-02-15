/*list*/
$(function(){
    var url=window.location.href;
    var attr = url.split("=");
    $("#search_text").val(attr[1]);
/*    $(".job_list_item").hover(function(){
        //alert("123");
        $(this).children(".list_detail_box").show();
    },function(){
        $(this).children(".list_detail_box").hide();
    });*/
    function letDivCenter(){
        var window_height=$(window).height();//屏幕的高
        var window_width=$(window).width();//屏幕的宽
        var list_detail_box_height=$(".list_detail_box").height();//弹出框的高
        var list_detail_box_width=$(".list_detail_box").width();//弹出框的宽

        var top = (window_height - list_detail_box_height)/2;
        var left = (window_width - list_detail_box_width)/2;

        var scrollTop = $(document).scrollTop();
        var scrollLeft = $(document).scrollLeft();
        $(".list_detail_box").css({"top":(top+scrollTop),"left":(left+scrollLeft)}).show();
    }

    function letDivCenter4subjmoney(){
        var list_detail_box_height=$(".list_detail_box").height();//屏幕的高
        var list_detail_box_width=$(".list_detail_box").width();//屏幕的宽
        var subtract_jmoney_box_height=$(".subtract_jmoney_box").height();//弹出框的高
        var subtract_jmoney_box_width=$(".subtract_jmoney_box").width();//弹出框的宽

        var top = (list_detail_box_height - subtract_jmoney_box_height)/2;
        var left = (list_detail_box_width - subtract_jmoney_box_width)/2;

        $(".subtract_jmoney_box").css({"top":(top-40),"left":(left-40)}).show();
    }
    /*发送面试邀请按钮点击事件*/
    $(".button-send").click(function(){
        letDivCenter4subjmoney();
        //$(this).attr("disabled", true).css("color","#646464").html("已发送");
    });

    $("dd.job_list_item").click(function(){
        letDivCenter();
        $(this).addClass("is-active");
    });
    $(".btn_close_circle").click(function(){
        $(".list_detail_box").css("display","none")
    });
    $(".button-close").click(function(){
        $(".subtract_jmoney_box").css("display","none")
    });
    $(".button-sure").click(function(){
        $(".subtract_jmoney_box").css("display","none");
    });
    $(".close_icon").click(function(){
        $(".list_detail_box").hide();
    });
});