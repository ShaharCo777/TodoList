$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle(300)
})

$("ul").on("click","li", function(){
    $(this).toggleClass("completed")
})

$("ul").on("click","span", function(e){
    $(this).parent().fadeOut(400, function(){
        $(this).remove()
    })
    e.stopPropagation()
})

$("input[type='text']").keypress(function(e){
    if(e.which === 13){
    let misson = $(this).val()
    $(this).val("")
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + misson +"</li>")
    }
})