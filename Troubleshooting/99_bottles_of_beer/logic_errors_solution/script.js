$(document).ready(function(){

// ISSUES
// 1. TypeError: Cannot read property 'length' of undefined.
      //var arr = [] needs to be moved below $("sing-button").click()
// 2. Nothing happens when clicking on submit button..
      //for logic i > num needs to be changed to i > -1
// 3. Last line of code "no bottles of beer" doesn't show
      //for logic i > num needs to be changed to i > -1

// Bonus1
// 1. Clear interval not stopping setInterval when all lines rendered
      //console.log(counter++) needs to remove ++

// Advanced Bonus
// 1. Function immediately executes on page load.
      //.click needs to be updated to .click({lines:3}, lyrics)
      //in function count is accessed via: num.data.lines


    $("<h3>Ready..Set...Go..</h3>").insertAfter('h1');

    var arr = [];
    $("#sing-button").click({lines:3},lyrics);
      function lyrics(num){     
        for(var i = num.data.lines; i > -1; i--){
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
             console.log("This has run " + counter + " times")//if counter++ than this counters counter--
          } 
        },1000)
    };//end lyrics
});
