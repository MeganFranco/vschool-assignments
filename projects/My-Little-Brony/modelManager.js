var app = angular.module("MyLittleBronyApp")

app.service("ManagerService", ["ModelService", function (ModelService) {



    ////////////////add a pony///////////////////////
    this.addPony = function (newPony) {
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