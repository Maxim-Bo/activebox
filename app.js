$(function(){
    
    let header = $("#header");
    let headerTop = $("#header-top")
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load", function () {
        headerH = header.innerHeight();
        scrollPos = $(this).scrollTop();
        
        if (scrollPos>headerH) {
            headerTop.addClass("header__fixed");
        }
        else {
            headerTop.removeClass("header__fixed");
        }
    });

});
