  module.exports = function(robot) {

        robot.hear(/hello|hi/i, function(res) {
               res.send("Hello, World!");
        })

        robot.respond(/whats your favorite food/i, function(res) {
        res.send("no food i am robot");
        })

         var counter = 0;

         robot.respond(/whats up/i, function(res) {
            counter += 1;
            res.send("You already asked me that " + counter + " times");
          })

          robot.respond(/I want cake/i, function(res) {
            res.reply("You know we have no more cake");
          });

          robot.hear(/cat/i, function(res) {
           });

          robot.hear(/mountain lion/i, function(res) {
          });

          var fruits = ["papaya", "mango", "watermelon"];

          robot.respond(/something sweet/i, function(res) {
            var randomFruit = res.random(fruits);
            res.send("ok, here's a " + randomFruit);
          });

          var tools = ["hammer", "steamroller", "icepick"];

          robot.respond(/tell me/i, function(res) {
            var randomTool = res.random(tools);
            res.send("Tell you what? I don't know anything about " + randomTool);
          })

          //Open the pod bay doors, Hubot
          robot.respond(/open the (.*) doors/i, function(res) {
            //console.log(res);
            console.log(res.match)
            console.log("match 0",res.match[0])
            console.log("match 1",res.match[1])
          
    
            var doorType;
            doorType = res.match[1];
            if (doorType === "pod bay") {
              res.reply("I'm afraid I can't let you do that.");
            } else {
              res.reply("Opening " + doorType + " doors");
            }
          });
    }



