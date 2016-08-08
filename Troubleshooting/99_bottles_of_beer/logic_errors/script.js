$(document).ready(function(){

// ISSUES
// 1. TypeError: Cannot read property 'length' of undefined.
// 2. Nothing happens when clicking on submit button..
// 3. Last line of code "no bottles of beer" doesn't show

// Bonus1
// 1. Clear interval not stopping setInterval when all lines rendered

// Bonus2
// 1. SyntaxError: Unexpected token {

// Advanced Bonus
// 1. Function immediately executes on page load.


    $("<h3>Ready..Set...Go..</h3>").insertAfter('h1');
 
    $("#sing-button").click(lyrics(3));
      var arr = [];
      function lyrics(num){     
        for(var i = num; i > num; i--){
          if(i>1){
            arr.push('<li class = "bottle">'+ i +" bottles of beer on the wall");
          }
          else if(i===1){
            arr.push('<li class = "bottle">'+ i +" bottle of beer on the wall");
          }
          else{
            arr.push('<li class = "bottle">'+ "no more bottles of beer on the wall");
          }
        }; 

        var counter = arr.length; //TypeError: Cannot read property 'length' of undefined
        var arrCounter = 0

        var interval = setInterval(function() {
          if(counter == 0) { clearInterval(interval) }
          else {
            counter--
            $('#bottles').append(arr[arrCounter++]) 
             console.log("This has run " + counter++ + " times")//if counter++ than this counters counter--
          } 
        },1000)
    };//end lyrics
});
