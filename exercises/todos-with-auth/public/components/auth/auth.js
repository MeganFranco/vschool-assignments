/*services for logins*/
//main app + "." + name of the component you want to make
var app = angular.module("TodoApp.Auth", ["ngStorage"]);

//where you do things like login, signup, and logout 
app.service("UserService", ["$http", "$location", "TokenService", function ($http, $location, TokenService) {
    this.signup = function (user) {
        return $http.post("/auth/signup", user);
    };

    this.login = function (user) {
        return $http.post("/auth/login", user).then(function (response) {
            //you get the token back, but you need to protect it -- enter the TokenService 
            TokenService.setToken(response.data.token);
            return response;

        });
    };

    this.logout = function () {
        TokenService.removeToken();
        $location.path("/");
    };

    this.isAuthenticated = function () {
        //use the !! to turn it to a boolean?
        return TokenService.getToken();
    };

}]);

app.service("TokenService", ["$localStorage", function ($localStorage) {


    this.getToken = function () {
        return $localStorage.token
    };

    this.setToken = function (token) {
        $localStorage.token = token;
    };

    this.removeToken = function () {
        delete $localStorage.token
    };

}]);


//a factory differs from a service because we just return an object right away instead of using the "this" keywords

app.factory("AuthInterceptor", ["$location", "$q", "TokenService", function ($location, $q, TokenService) {
    //this is finicky, so make sure to to it in the exact right way
    return {
        //anytime there's an outgoing request, do the following things...
        request: function (config) {
            var token = TokenService.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token;
            }
            return config;
        },
        responseError: function (response) {
            if (response.status === 401) {
                //if unauthorized, then the token is probably bad or non-existant...
                TokenService.removeToken();
                $location.path("/login");
            }
            return $q.reject(response)
        }
    }
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);