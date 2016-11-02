var app = angular.module('stdApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "pradzia.html",
            controller : "FirstController"
        })
        .when("/apie", {
            templateUrl : "apie.html"
        })
        .when("/kontaktai", {
            templateUrl : "kontaktai.html"
        })
        .when("/galerija", {
            templateUrl : "galerija.html"
        })
        .otherwise({
            template : "<div class='jumbotron'>404<p>Puslapis nerastas.</p></div>"
        });
});