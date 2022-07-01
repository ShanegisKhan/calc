var answer ='';
var input ='';
var inputString = '';

$(document).ready(function() {
  $('button').click(function () {
    var input = $(this).attr("id");
    if(parseInt(input, 10) == input || input == '+' || input == '-' ||
  input == '*' || input == '/' || input == '%' || input == '.') {
        inputString += input;
        $(".textbox").val(inputString);
    } else if(input == "AC") {
      inputString = '';
      $(".textbox").val('');
    } else if(input == "CE") {
      inputString = inputString.slice(0, -1);
      $(".textbox").val(inputString);
    } else if(input == '=') {
      answer = eval(inputString);
      $(".textbox").val(answer);
    }
  });
});
