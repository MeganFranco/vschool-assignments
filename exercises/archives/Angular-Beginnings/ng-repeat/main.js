var app = angular.module("ng-repeat", []);

app.controller("MainController",["$scope", function($scope){
    
    $scope.player = {  
        kills: [
            {
                handle: "jk400",
                rank: 14932,
                clan: ["hpburner200", "sputnik", "sololobo21"]
            },
             {
                handle: "AppleSmokedBacon",
                rank: 1005,
                clan:["NopeKing", "N00bsmasher", "roflcopter"]
            },
            {
                handle: "CheetoLuvah",
                rank: 478332,
                clan: ["HanibalsElephants", "IronandWhine", "trenchcoat", "catvideos4dayz"]
            },
            {
                handle: "rofolcopter",
                rank: 324678,
                clan: ["NopeKing", "N00bsmasher", "AppleSmokedBacon"]
            },
        ]
}
    
}])
