//This will strike the li as completed.
$("li").on("click", function() {
   $(this).toggleClass("completed");
});

$("span").on("click", function(){
   $(this).parent().fadeOut("fast", function(){
      //Now we are working with the parent() element 
      //which is the li so we can directly remove it from the DOM
      $(this).remove();
   });
});

