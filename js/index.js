$(function(){
    var navBar=$('.nav_bar');
    navBar.click(function(){
        navBar.removeClass('nav_on');
        $(this).addClass('nav_on');
    });
});
