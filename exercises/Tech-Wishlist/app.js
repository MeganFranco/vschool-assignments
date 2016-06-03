var app = ("TechWishlist", ['ngRoute'])

app.config(function ($routeProvider) {
    $routeProvider
    .when("/computer", {
        templateUrl: "templates/computer/computer.html",
        controller: "ComputerController",
    })
    .when("/other", {
        templateUrl: "template/other/other.html",
        controller: "OtherController",
    })
})

