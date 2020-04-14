$("ul").on("click", "li", function () {
    $(this).toggleClass("done");
})

$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
})

$("#inp").keypress(function (e) {
    if (e.which === 13) {
        let val = $(this).val();
        $("ul").append(`<li><span><i class="fas fa-trash"></i></span> ${val}</li>`);
        $(this).val("");
    }
})
$(".fa-plus").click(function(){
    $("#inp").fadeToggle();
})