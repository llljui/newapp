/**
 * Created by Administrator on 2016/1/13.
 */
//------------content-------------------
$(".boon_box span").click(function(e){
    var text_color=$(this).css("color");
    var text=$(this).html();
    if(text_color=="rgb(246, 72, 83)"){
        $(this).css({"border":"1px solid #CCCCCC","color":"#646464"});
        var boon_text=$("#boon").html();
        var result=boon_text.replace(text+',','');
        $("#boon").html(result);
    }else{
        $(this).css({"border":"1px solid #f64853","color":"#f64853"});
        $("#boon").append(text+',');
    }
});
$(".button-sure").click(function(){
    history.go(-1);location.reload();
});
