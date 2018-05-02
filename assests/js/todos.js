//This will strike the li as completed.
$("li").on("click", function() {
   $(this).toggleClass("completed");
});

$("span").on("click", function(){
   $(this).parent().remove();
});