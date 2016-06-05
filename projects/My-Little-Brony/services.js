var app = angular.module("MyLittleBronyApp");

app.service("PonyService", ["$http", function ($http){
    var self = this;

    this.poniesList = [];



    ////////////////add a pony///////////////////////
    this.addPony = function (newPony) {
        //        console.log("hello")
        var response = ponyValidator(newPony)
        if (response.success) {
            this.poniesList.push(newPony);
//            console.log(this.poniesList)
        } else {
            return response.message;
            //            throw new Error("Pony Not Valid")
        }
    }

    ////////////////////delete a pony////////////////////
    this.deletePony = function (id) {
        this.poniesList.splice(id, 1);
    }

    ///////////////get list of ponies////////////////    
    this.getPonyList = function (arrayOfPonies) {
        return ModelService.poniesList;
    }

    ////////////////Check Submission//////////////////  
    var ponyValidator = function (newPony) {
        if (newPony.name.length <= 3) {
            return {
                message: "Pony name must be longer than 3 characters",
                success: false
            }
        } else {
            return {
                success: true
            }
        }

    }


    ///////////////Get from Server//////////////////
    this.takeFromServer = function () {
//        console.log(self.poniesList)
          return $http.get("http://mean.codingcamp.us/meganfranco/pony")
                .then(function (response) {
                        self.poniesList = response.data;
                        console.log(self.poniesList)

                    })
//        console.log(this.poniesList)
    }
    ///////////////////Add to Server///////////////////////////
    this.addPonyToServer = function(pony) {
        $http.post("http://mean.codingcamp.us/meganfranco/pony", pony)
        .then(function(response) {
                self.poniesList.push(response.data);
                
                console.log(self.poniesList)
                
            })
    };
    
    ////////////////////Delete from server///////////////////////////
    
    this.deletePonyFromServer = function(index){
        $http.delete("http://mean.codingcamp.us/meganfranco/pony", index)
        console.log(index)
        .then(function(response){
            self.poniesList.splice(response.data, 1);
            
            console.log("here!")
        })
    }

}]);