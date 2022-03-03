var banner = new Swiper(".banner-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
});
var banner = new Swiper(".tb-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
    },
});

$('.slide-nav').click(function(){
    $('.slide-nav').not($(this)).removeClass('active');
})

$(document).ready(function() {
	
	jQuery.expr[':'].Contains = function(a, i, m) {
	  return jQuery(a).text().toUpperCase()
		  .indexOf(m[3].toUpperCase()) >= 0;
	};


	jQuery.expr[':'].contains = function(a, i, m) {
	  return jQuery(a).text().toUpperCase()
		  .indexOf(m[3].toUpperCase()) >= 0;
	};
	
    $('#faq_search').keyup(function(e) {
        var s = $(this).val().trim();
        if (s === '') {
            $('.fq-wrapper h5').parent().parent().show();
            return true;
        }
		
        $('.fq-wrapper h5:not(:contains(' + s + '))').parent().parent().hide();
        $('.fq-wrapper h5:contains(' + s + ')').parent().parent().show();
        return true;
    });

}); // end document ready

$('.yt-vid-btn').click(function () {
    $('#yt-vid').modal("show");
    var url = $(this).data("url");
    $('#yt-vid iframe').attr('src', url);
});

$('#yt-vid').on('hidden.bs.modal', function () {
    $('#yt-vid iframe').attr('src', "");
});
$('.h-tb').click(function () {
    $('.h-tb').removeClass('active');

    $(this).addClass('active');

});

$('.h-tb').click(function(){
    var att = $(this).attr('data-att');
    $('html,body').animate({
        scrollTop: $(att).offset().top
    }, 1600);
});