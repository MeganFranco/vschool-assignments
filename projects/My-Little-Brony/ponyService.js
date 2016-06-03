var app = angular.module("MyLittleBronyApp")

app.service("PonyService", [function() {

    this.poniesList = [
    {
        name: "Twilight Sparkle",
        imgUrl: "http://pre02.deviantart.net/8872/th/pre/i/2012/206/7/d/twilight_sparkle_by_hankofficer-d46dfaw.png"
        },
    {
        name: "Applejack",
        imgUrl: "http://vignette4.wikia.nocookie.net/mlpfanart/images/f/ff/Applejack_3_by_xpesifeindx-d5gsde5.png/revision/latest?cb=20131015231355"
        },
    ]

    ////////////////add a pony///////////////////////
    this.addPony = function (newPony) {
//        console.log("hello")
        var response = ponyValidator(newPony)
        if (response.success) {
            ModelService.poniesList.push(newPony);
        } else {
            return response.message;
//            throw new Error("Pony Not Valid")
        }
    }

    ////////////////////delete a pony////////////////////
    this.deletePony = function (id) {
        ModelService.poniesList.splice(id, 1);
    }

    ///////////////get list of ponies////////////////    
    this.getPonyList = function (arrayOfPonies) {
        return ModelService.poniesList;
    }

    ////////////////Check Submission//////////////////  
    var ponyValidator = function (newPony) {
        if (newPony.name.length <= 3) {
            return {
                message : "Pony name must be longer than 3 characters",
                success : false
            }
        }else if

    }

}])