//This will strike the li as completed.
$("li").on("click", function() {
   $(this).toggleClass("completed");
});

//This will delete the task from thr to-do list 
$("span").on("click", function(){
   $(this).parent().fadeOut("slow", function(){
      //Now we are working with the parent() element 
      //which is the li so we can directly remove it from the DOM
      $(this).remove();
   });
});

//This will add new tasks on enter being pressed
$("input[type=text]").on("keypress", function (event) {
   if (event.which == 13) {
      let value = $(this).val();
      $("ul").append("<li><span>X</span> " +value +"</li>");
   }
});