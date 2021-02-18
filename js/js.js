$(document).ready(function(){

    $(".top-product .card-item img").on({
        mouseenter : function(){
            $(this).css("opacity","0.5")
        },
        mouseleave : function(){
            $(this).css("opacity","1")
        }
    });
    $(".item-shop .card-item img").on({
        mouseenter : function(){
            $(this).css("opacity","0.5")
        },
        mouseleave : function(){
            $(this).css("opacity","1")
        }
    });

    $(window).scroll(function(){
        var sc = $(this).scrollTop();

        if(sc > 470){
            $(".top-page-button").fadeIn();
        }else{
            $(".top-page-button").fadeOut();  
        }

    });

    $(".top-page-button").click(function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $("#img1-gallery").click(function()
    {
        $("#img-show").attr("src","images/product5.jpg");
    });
    $("#img2-gallery").click(function()
    {
        $("#img-show").attr("src","images/product8.jpg");
    });
    $("#img3-gallery").click(function()
    {
        $("#img-show").attr("src","images/product13.jpg");
    });
    $("#img4-gallery").click(function()
    {
        $("#img-show").attr("src","images/product14.jpg");
    });

    $(".tabs-content li").click(function(){
        var myID = $(this).attr("id");
        
        $(this).addClass("active").siblings().removeClass("active");

        $(".tabs-content div").hide();

        $('#' + myID + "-content").fadeIn(1000);
    });
});
