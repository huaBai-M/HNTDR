$(function () {
    $('.nav li.fir').mouseenter(function () {
        // $(this).find('ul').css({"display":"block"});
        // console.log(1)
        // $(this).find('ul').stop().slideDown(500);
        $(this).find('ul').css('display','block');
    })
        .mouseleave(function () {
            // $(this).find('ul').stop().slideUp(500);
            $(this).find('ul').css('display','none');
        })


    // $('.left_type ul.type li.fir').mouseenter(function () {
    //     console.log(1)
    //     // $(this).find('ul').css({"display":"block"});
    //     // console.log(1)
    //     // $(this).find('ul').stop().slideDown(500);
    //     $(this).find('ul').css('opacity','1');
    // })
    //     .mouseleave(function () {
    //         // $(this).find('ul').stop().slideUp(500);
    //         $(this).find('ul').css('opacity','0');
    //     })

})