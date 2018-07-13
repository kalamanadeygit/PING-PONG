
var number=function(countTo){
  var run =[];
  for (var i=1; i<=countTo; i++){
  if (i % 15 === 0){
    run.push('pingpong');
  }else  if (i % 5 === 0) {
      run.push('pong');
    }
  else if (i %3=== 0) {
  run.push('ping');
    }  else {
    run.push(i);
  }
    }
  return run;
};

$(document).ready( function(){
      $("form#form").submit(function(event) {
        event.preventDefault();
        $("#display").empty();
        var countTo=parseInt($("input#countTo").val());
        var display=number(countTo);
        display.forEach(function(item){
        $("#display").append(' <li>' + item + '</li>');
});
      });
});
