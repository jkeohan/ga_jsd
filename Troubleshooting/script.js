$(document).ready(function(){
  

  //Possible Issues:
  //1. jQuery not loaded
  //2. id bottles doesn't exist
  //3. var sing-button hasn't been created 
  //4. html() method not appropiate choice for appending items
  //5. Counter keeps running
  //6. Syntax issues


    var arr = [];
    $("#sing-button").click(function(){
        for(var i = 3; i>-1; i--){
        
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

      var counter = arr.length;
      var arrCounter = 0;
      var interval = setInterval(function() {
        if(counter == 0) { clearInterval(interval) }
        else {
          console.log(counter);
          counter--;
          $('#bottles').append(arr[arrCounter++]) ;
           console.log("This has run " + counter + "times");
        } 
      },1000)
  });
});
