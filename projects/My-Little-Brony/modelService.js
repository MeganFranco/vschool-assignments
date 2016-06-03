/*  http://www.webdeveasy.com/angularjs-data-model/     
http://rob.conery.io/2013/04/25/models-and-services-in-angular/   
the “M” in MVC, model classes encapsulate your application’s data and provide an API to access and manipulate that data. The other classes in your application will make requests of models via this API. When data on the model is updated, the model dispatches events that the other classes within your application can react to.
*/
var app = angular.module("MyLittleBronyApp")

app.service("ModelService", [function(){
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
}])