$(document).ready(function() {
    $('#fullpage').fullpage({
        //Scrolling
        css3: true,
        autoScrolling: false,
        fitToSection: false,
        lazyLoading: true
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 ) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function(){$(".scroll").click(function(){
      $("html,body").animate({scrollTop:$("html").offset().top},"1000");
        return false;
      });
    });

    // popovers for projects
    $('.project').popover({
        trigger: 'manual',
        placement: 'bottom',
        html: true,
        content: function() {
            return $(this).siblings('.popover-temp').html();
        }
    });

    $('.project').click(function() {
        $('.project').not($(this)).popover('hide');
        $('.project').not($(this)).parents('.hvr-grow').removeClass('hvr-grow-clicked');
        $(this).popover('show');
        $(this).parents('.hvr-grow').addClass('hvr-grow-clicked');
    });

    $('body').on('click', '.popover-dismiss', function() {
        $popover = $(this).closest('.popover').siblings('.project')
        $popover.popover('hide');
        $popover.parents('.hvr-grow').removeClass('hvr-grow-clicked');
    });
    
});
