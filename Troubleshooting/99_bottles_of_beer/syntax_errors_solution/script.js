$(document).ready(function(){
  
// Issues:
// 1. SyntaxError: Unexpected string
      //Missing opening (  @  $"#sing-button").click(function(){
// 2. SyntaxError: missing ) after argument list
     //Missing opening { after for loop.. for(var i = 3; i>-1; i--) 
    //Error however indicates that the issue is at closing } of for loop
// 3. SyntaxError: Unexpected token {
    //Missing closing ) after if statement.. if(i>1{

// Bonus
// 1. SyntaxError: Unexpected token (
    //Missing opening [  $('#bottles').append(arr[arrCounter++])

// Bonus2 
// 1. ReferenceError: arr is not defined
    //array = [] should be named arr = []

    
    $("#sing-button").click(function(){
      var arr = [];
      for(var i = 3; i>-1; i--) {
      
        if(i>1) {
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
      var arrCounter = 0;

      var interval = setInterval(function() {
        if(counter == 0) { clearInterval(interval) }
        else {
          counter--
          $('#bottles').append(arr[arrCounter++]) 
           console.log("This has run " + counter + " times")
        } 
      },1000)
  });
});
