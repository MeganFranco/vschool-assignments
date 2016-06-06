var app = angular.module("MyLittleBronyApp");

app.service("PonyService", ["$http", function ($http) {
    var self = this;

    this.poniesList = [
//        {
//            name: "Twilight Sparkle",
//            imgUrl: "http://pre02.deviantart.net/8872/th/pre/i/2012/206/7/d/twilight_sparkle_by_hankofficer-d46dfaw.png"
//    },
//        {
//            name: "Applejack",
//            imgUrl: "http://vignette4.wikia.nocookie.net/mlpfanart/images/f/ff/Applejack_3_by_xpesifeindx-d5gsde5.png/revision/latest?cb=20131015231355"
//    },
    ];



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
    //    this.getPonyList = function (arrayOfPonies) {
    //        return poniesList;
    //    }

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
        //==================SERVER STUFF========================//

    ///////////////////Add to Server///////////////////////////
    this.addPonyToServer = function (pony) {
        $http.post("http://mean.codingcamp.us/meganfranco/pony", pony)
            .then(function (response) {
                self.poniesList.push(response.data);
                console.log(response.data)

            })
    };


    ////////////////////Delete from server///////////////////////////

    this.deletePonyFromServer = function (pony) {
        console.log(pony);
        $http.delete("http://mean.codingcamp.us/meganfranco/pony/" + pony._id)
            .then(function (response) {
//                console.log(response.data)
                    ///splice will start removing at the first parameter and then it removes the amount of items specified in the second parameter 
                  
            });


    }



    /////////////////Get from Server////////////////////
    this.showAllPonies = function () {
           
        return $http.get("http://mean.codingcamp.us/meganfranco/pony")
            .then(function (response) {
                for (var i = 0; i < response.data.length; i++) {
                    if(self.poniesList.indexOf(response.data[i] == -1))
                    {self.poniesList.push(response.data[i]);}
                }

                console.log(response.data)

            })
    }
    
    
//////////////edit item//////////////////
    
    this.editPonyFn = function (pony, index){
        $http.put ("http://mean.codingcamp.us/meganfranco/pony/" + pony._id, pony)
//        console.log("http://mean.codingcamp.us/meganfranco/pony/" + pony._id)
            .then(function(response){
            console.log(response.data)
           self.poniesList[index] =  pony;
//            console.log(self.poniesList[index])
        });
    }

}]);