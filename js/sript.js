$(function(){
    let navBarBtn = $(".navBar");


    $(window).scroll(function(){

        let backToTop = $(".backTop");

        let scrTop = $(window).scrollTop()


       if(scrTop > 500){
        navBarBtn.addClass("manuFixed")
       }else{
        navBarBtn.removeClass("manuFixed")
       }

       if(scrTop > 500){
        backToTop.fadeIn();
       }
       else{
        backToTop.fadeOut();
       }
    });

    $(window).ready(function(){
        let PreLoder = $(".PreLoder");
        PreLoder.delay("1000").fadeOut(300);
    });


    let backToTop = $(".backTop");


    backToTop.click(function(){
        $("html,body").animate({
            scrollTop:0,
        },
        3500
        );
    });
    
});