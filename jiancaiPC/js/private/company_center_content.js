/**
 * Created by Administrator on 2016/1/13.
 */
//------------content-------------------
$(".company_info_edit").click(function(){
    //$(".company_info_text input").css({"border":"none","readonly":"true"});
    if($(this).html()=="编辑"){
        $(".company_info_text").hide();
        $(".company_info_text_edit").show();
        $(this).html("保存");
    }else{
        //这里用ajax保存信息

        $(".company_info_text").show();
        $(".company_info_text_edit").hide();
        $(this).html("编辑");
    }
});

function letDivCenter4paywindow(){
    var window_height=$(window).height();//屏幕的高
    var window_width=$(window).width();//屏幕的宽
    var pay_window_height=$(".pay_window").height();//弹出框的高
    var pay_window_width=$(".pay_window").width();//弹出框的宽

    var top = (window_height - pay_window_height)/2;
    var left = (window_width - pay_window_width)/2;

    var scrollTop = $(document).scrollTop();
    var scrollLeft = $(document).scrollLeft();

    $(".pay_window_text").css({"top":(top+scrollTop-10),"left":(left+scrollLeft-20)}).show();
}

//充值事件
$("#recharge").click(function(){
    letDivCenter4paywindow();
    $(".pay_window_text").show();
});
//充值框关闭事件
$(".close_icon,.close_btn,.close_icon_pay").click(function(){
    $(".pay_window_text").hide();
});
