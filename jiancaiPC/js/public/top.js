/**
 * Created by Administrator on 2016/1/8.
 */
//------------top内部模块垂直居中-------------------
//------------登录注册居中----------------
var top_height=$("#top").height();
var top_dl_height=$("#top_dl").height();
$("#top_dl").css("margin-top",(top_height-top_dl_height)/2+"px");
//-----------简才APP居中------------
var jiancai_app_height=$("#jiancai_app").height();
$("#jiancai_app").css("margin-top",(top_height-jiancai_app_height)/2+"px");
//-----------服务热线---------------
var server_hotline_height=$("#server_hotline").height();
$("#server_hotline").css("margin-top",(top_height-server_hotline_height)/2+"px");
//------------top内部模块垂直居中-------------------
//--------------------logo点击事件------------------------
$(".logo").click(function(){
    window.location.href="home.html";
});
$(".company_center_icon").click(function(){
	window.location.href="company_center.html";	
});
//--------------------login---------------------
$(".login").click(function(){
    window.location.href="login.html";
});
$(".register").click(function(){
    window.location.href="register.html";
});
//------------logo行模块居中----------------
//var top_logo_line_height=$("#top_logo_line").height();
/*var top_logo_line_height=$("#top_logo_line").height();
var logo_height=$("#logo").height();
alert(top_logo_line_height+","+logo_height);
$("#logo").css("margin-top",(top_logo_line_height-logo_height)/2+"px");*/
/*----------------企业版居中--------------------*/
/*var companny_vs_height=$("#companny_vs").height();
alert(top_logo_line_height+","+companny_vs_height);
$("#companny_vs").css("margin-top",(top_logo_line_height-companny_vs_height)/2+"px");*/
/*----------------城市居中--------------------*/
/*var select_city_height=$("#select_city").height();
alert(top_logo_line_height+","+select_city_height);
$("#select_city").css("margin-top",(top_logo_line_height-select_city_height)/2+"px");*/
/*----------------企业中心入口居中--------------------*/
/*var company_center_icon_height=$("#company_center_icon").height();
alert(top_logo_line_height+","+company_center_icon_height);
$("#company_center_icon").css("margin-top",(top_logo_line_height-company_center_icon_height)/2+"px");*/
//------------top内部模块垂直居中-------------------