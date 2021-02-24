$(function() {
    // slider
    let winh = $(window).innerHeight(),
        upperh = $(".upper-bar").innerHeight(),
        navh = $(".navbar").innerHeight();
    $(".slider,.carousel-item").height(winh - (upperh + navh));
    //end slider
    // feature work
    $(".feature-work ul li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active")

        if ($(this).data("class") === "all") {
            $(".shuffle-img .col-md").css("opacity", 1)
        } else {
            $(".shuffle-img .col-md").css("opacity", "0.08")
            $($(this).data("class")).parent().css("opacity", 1)
        }


    })

    // feature work
})