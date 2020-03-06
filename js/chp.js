$(document).ready(function(){
    box_h=$(".box").height()
    var times=1;

    console.log("ready");

    function getchp(){
        $.ajax({
            type:"get",
            async:false,
            url:"https://chp.shadiao.app/kong.php?encode=json",
            dataType:"jsonp",
            jsonp:"callback",

            success:function(json){
                data=json["data"][0]["chp"];
                $("#chptext").text(data);
                $("#allchp").append(times + "."+ data + "<br>");
                
                console.log(times+data);
                times+=1;
                
            },
        });
    }

    $(getchp());

    $(".btn-lg").click(function(){
        getchp();

    
    });
    
 
    
    
    // 解决底部自动导航的问题
    function autoFooterHeight() {
        // 获取内容的高度
        var bodyHeight = $("body").height();
        // 获取底部导航的高度
        var navHeight = $(".navbar").height();
        // 获取显示屏的高度
        var iHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // 如果内容的高度大于（窗口的高度 - 导航的高度）,移除属性样式
        if (bodyHeight > (iHeight - navHeight)) {
            $("#footer").removeClass("navbar-fixed-bottom");
        }
    }  
    autoFooterHeight();

})