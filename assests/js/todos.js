//This will strike the li as completed.
$("li").on("click", function() {
   $(this).toggleClass("completed");
});

$("span").on("click", function(){
   $(this).fadeOut("fast", function(){
      $(this).parent().remove();
   });
});

