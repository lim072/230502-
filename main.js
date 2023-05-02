$(document).ready(function(){
    $('#notice>ul>li>a').on('click',function(e){
        e.preventDefault
        // $('.popup').css("display",'block');
        $('.popup').addClass("active");

        var txt = $(this).text();
        $('.popup>h1').text(txt)
    });

    $('#close').click(function(){
        // $('.popup').css("display",'none');
        $('.popup').removeClass("active");
    });
});

