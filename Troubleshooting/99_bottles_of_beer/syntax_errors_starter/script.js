$(document).ready(function(){

// Issues:
// 1. SyntaxError: Unexpected string
// 2. SyntaxError: Unexpected token {
// 3. SyntaxError: missing ) after argument list
// 4. TypeError: "<h3>Ready..Set...Go..</h3>".insertAfter is not a function

// Bonus1
// 1. SyntaxError: Unexpected token (
// 2. ReferenceError: arr is not defined


    ("<h3>Ready..Set...Go..</h3>").insertAfter('h1');
    var arrary = [];
    $"#sing-button").click(function() {
         
        for(var i = 3; i > -1; i--) 
          if(i>1 {
            arr.push('<li class = "bottle">'+ i +" bottles of beer on the wall");
          }
          else if(i===1){
            arr.push('<li class = "bottle">'+ i +" bottle of beer on the wall");
          }
          else{
            arr.push('<li class = "bottle">'+ "no more bottles of beer on the wall");
          }
        }; 

        var counter = arr.length; 
        var arrCounter = 0

        var interval = setInterval(function() {
          if(counter == 0) { clearInterval(interval) }
          else {
            counter--
            $('#bottles').append(arrarrCounter++]) 
             console.log("This has run " + counter + " times")//if counter++ than this counters counter--
          } 
        },1000)
    });
});
