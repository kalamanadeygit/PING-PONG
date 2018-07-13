$(document).ready function()
{
      $("form#formping").submit(function(event)
      {
        event.preventDefault();
        var userinput=$("input#number").val();
        console.log(userinput);
        $("p.display").text(userinput);

      })
});
