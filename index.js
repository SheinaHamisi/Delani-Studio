$(document).ready(function() {
    $("#design-img").click(function(){
        $("#design-img").hide();
        $(".design").show();
    })

    $(".design").click(function(){
        $(".design").hide();
        $("#design-img").show();
    })

    $("#development-img").click(function(){
        $("#development-img").hide();
        $(".development").show();
    })

    $(".development").click(function(){
        $(".development").hide();
        $("#development-img").show();
    })

    $("#management-img").click(function(){
        $("#management-img").hide();
        $(".management").show();
    })

    $(".management").click(function(){
        $(".management").hide();
        $("#management-img").show();
    })
})