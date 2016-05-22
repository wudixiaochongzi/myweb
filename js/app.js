
var app=angular.module('mayWeb',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider.when('/',{
        templateUrl:'tpls/welcome.html',
        controller:'welcome'
    }).when('/about',{
        templateUrl:'tpls/about.html',
        controller:'about'
    }).when('/works',{
        templateUrl:'tpls/works.html',
        controller:'works'
    }).when('/life',{
        templateUrl:'tpls/life.html',
        controller:'life'
    }).when('/contact',{
        templateUrl:'tpls/contact.html',
        controller:'contact'
    })
}).controller('welcome',function($scope){

}).controller('about',function($scope){

}).controller('works',function($scope){

}).controller('life',function($scope){

}).controller('contact',function($scope){

});