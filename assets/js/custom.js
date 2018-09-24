// custom script
$(document).ready(function() {
        var menu = $("#menu-spasium");
        var menuLink = $(".nav-link");
        var navimage = $(".navbar-brand img");
        var pos = menu.position();
            $(window).scroll(function() {
                var windowpos = $(window).scrollTop();
                if (windowpos >= pos.top & windowpos > 50) {
                    menu.css({"background-color":"#fff"});
                    menu.css({"padding-top":"0%"});
                    navimage.css({"width":"75%"});
                } else {
                    menu.css({"background-color":"transparent"});
                    menu.css({"padding-top":"2%"});
                    navimage.css({"width":"100%"});
                }
            });

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
});
// end of custom script