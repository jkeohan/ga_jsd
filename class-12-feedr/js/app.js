/*
  Please add all Javascript code to this file.
*/
// console.log("inside app.js")
//     $.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results) {

//         console.log(results);

//         results.data.feed.forEach(function(result){
//             $("ul").append('<li>'+result.content.title+'</li>')
//         })

//     })

console.log("inside app.js")
var feedrApp = angular.module('feedrApp', ['ui.router', 'ngAnimate'])

//used for routing
feedrApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    // .state('/', {
    //   url:"/",
    //   templateUrl:'partials/home.html'
    // })
    // .state('/mapping', {
    //   url:"/mapping",
    //   templateUrl:"chloropleth/mapping.html"
    // })
})
// app.controller('MyController', function($http) {
//     var vm = this;
//     vm.mydata = [];

//     $http.get(URI)
//         .then(function(result) {
//           console.log(result);
//           vm.mydata = result.data;
//          });



feedrApp.controller('apiCtrl', ['$scope','$rootScope','$http', function($scope,$rootScope,$http){

      $scope.sources = {};
      $scope.activeSource = [];
      var url = "http://digg.com/api/news/popular.json"

      $scope.sources = {
        Mashable: {
          url: "http://digg.com/api/news/popular.json",
          keys: {
            articles: [],
            image: "feature_image"
          }
        },
        Digg: {
          url: 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json',
          //url: 'http://digg.com/api/news/popular.json',
          keys: {
            articles: [],
            title: "title",
            image: "media.images[0].url",
            rank: "diggs.count",
            description: "description"
          }
        },
         Reddit: {
              url: "https://www.reddit.com/top.json",
          keys: {
            articles: "new",
            image: "feature_image"
          }
        }
      }
    //if search is !empty show currently choosen feed
    //if search is true than filter article titles for search term
    //this will require attaching event listener to input field
    //and calling a function that filters and then renders results 
    // $.get($scope.url)
    // .done(function(response) { console.log(response)})
    // .fail(function(response) {console.log(response )})
    console.log($scope.sources.Digg)

    function getContent(url,source){

      //      $.get(url.url,function(response) {
       
      //    // $('.loader').removeClass("hidden")
      //     console.log("response is: ", response);
      // })
  
        $http.get(url.url)
        .then(function(response) {
          var articles = response.data.data.feed
          var obj = {}
          $.each(articles, function(i,e){
            obj.title = articles[i].content.title
            obj.img = articles[i].content.media.images[0].url
            obj.description = articles[i].content.description
            obj.url = articles[i].content.url
            $scope.sources.Digg.keys.articles.push(obj)
            $scope.activeSource.push(obj)
            obj = {}
        })
      console.log($scope.activeSource)
      //console.log($scope.activeSource[0].title)
        //setTimeout(function() { $('.loader').addClass("hidden") },3000)
      })//done
       
    }//function
    getContent($scope.sources.Digg,"Digg")

    //$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json",function(response) {

    $scope.resetAll = function() {
      $rootScope.totalTip = 0;
    };

}])

