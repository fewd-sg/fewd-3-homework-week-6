$('document').ready(function(){
    console.log("jquery works");
    $(".readmore").click(function(){
        $(".readmore").hide();
        $(".readless").show();
        $("#show-this-on-click").slideDown();
    });
    $(".readless").click(function(){
        $(".readmore").show();
        $(".readless").hide();
        $("#show-this-on-click").slideUp();
    });
    $(".learnmore").click(function(){
        $(".learnmore").show();
        $("#learnmoretext").slideDown();
    });
});