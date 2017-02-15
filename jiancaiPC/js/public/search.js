/*搜索按钮*/
$("#search_btn").click(function(){
    var search_text=$("#search_text").val();
    if(search_text.trim()==""){
        alert("搜索框不能为空");
    }else{
        //alert(search_text);
        window.location.href="job_list.html?search_text="+search_text;
    }
});