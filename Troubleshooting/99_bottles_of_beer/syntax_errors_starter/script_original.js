$(document).ready(function(){

//Issues:
//1. SyntaxError: Unexpected string
//2. SyntaxError: missing ) after argument list
//3. SyntaxError: Unexpected token {

//Bonus
//1.  //SyntaxError: Unexpected token (


    $("<h3>Ready..Set...Go..</h3>").insertAfter('h1');
    var arr = [];
    $"#sing-button").click({repeat:3},lyrics);
      
      function lyrics(event){
        var num = event.data.repeat     
        for(var i = num; i > 0; i--)
          if(i>1{
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
            $('#bottles').append(arrarrCounter++]) 
             console.log("This has run " + counter + " times")//if counter++ than this counters counter--
          } 
        },1000)
    };//end lyrics
});
