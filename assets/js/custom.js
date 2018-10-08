// custom script
$(document).ready(function() {
        var menu = $("#menu-spasium");
        var navimage = $(".navbar-brand img");
        var pos = menu.position();
        $(window).scroll(function() {
            var windowpos = $(window).scrollTop();
            if (windowpos >= pos.top & windowpos > 50) {
                navimage.css({"width":"70%"});
            } else {
                navimage.css({"width":"85%"});
            }
        });

        $(document).on('click', '.search img',function(){
            var clicks = $(this).data('clicks');
            if (clicks) {
                // odd clicks
                $('#search-input').css({"display" : "block" });
                $('#search-input').css({"width" : "120px" });
            } else {
                // even clicks
                $('#search-input').css({"width" : "0px" });
            }
            $(this).data("clicks", !clicks);
        });

        $(document).on('click', '.navbar-toggler',function(){
            var menu = $("#menu-spasium");
            var clicks = $(this).data('clicks');
            if (clicks) {
                // odd clicks
                menu.css({"background-color":"transparent"});
            } else {
                // even clicks
                menu.css({"background-color":"#fff"});
            }
            $(this).data("clicks", !clicks);
        });
});
// end of custom script