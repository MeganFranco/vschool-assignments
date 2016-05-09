var theBlackSwans = [
    {
        name: "Bella",
        position: "Troop Leader",
        age: 36,
        yearsDancing: 30,
        favoriteStyle: "Ballet",
        otherTroops: ["Swing Dancers Unanonymous", "Jezebels of Jazz",
            "Tap Tap Tappers", "Hip Hop Ladies", "Polka Party"],
        description: function () {
            var time = this.age - this.yearsDancing;
    
             return this.name + "'s favorite style of dance is " + this.favoriteStyle + " and they have been dancing for " + time ;
        fans: [
            {
                name: "George",
                hometown: "Toledo",
                ticketsPurchased: 6,
                frequentFriendClub: function () {
              if (ticketsPurchased > 5) {
                  return this.name + " is in the Friends Club and eligible for discounts";
                  var this.name = true;
              } else {
                  return this.name + " is not eligible for discounts";
                  var this.name = false
              }
          }
            },
            {
                name: "Sharron",
                hometown: "Oakland",
                ticketsPurchased: 9,
                frequentFriendClub: function () {}
            },
            {
                name: "Joe",
                hometown: "Princeton",
                ticketsPurchased: 5,
                frequentFriendClub: function () {}
            },
        ]
//        
//        }, 
//    {
//        name: "Samantha",
//        position: "Senior Dancer",
//        age: 27,
//        yearsDancing: 19,
//        favoriteStyle: "Jazz",otherTroops: ["Jezebels of Jazz"
//            "Hip Hop Ladies", "Polka Party"],
//    fans: [
//        {
//            name: "Perla",
//            hometown: "Pittsburg",
//            ticketsPurchased: 4,
//            frequentFriendClub: function () {
//                if (ticketsPurchased > 5) {
//                    return this.name + " is in the Friends Club and eligible for discounts";
//                    var this.name = true;
//                } else {
//                    return this.name + " is not eligible for discounts";
//                    var this.name = false
//                }
//            }
//            },
//
//        {
//            name: "George",
//            hometown: "Toledo",
//            ticketsPurchased: 6,
//            frequentFriendClub: function () {
//                if (ticketsPurchased > 5) {
//                    return this.name + " is in the Friends Club and eligible for discounts";
//                    var this.name = true;
//                } else {
//                    return this.name + " is not eligible for discounts";
//                    var this.name = false
//                }
//            }
//            },
//        ]
//   },
//       
//    {
//     name: "Ellen",
//     position: "junior dancer",
//     age: 23,
//     yearsDancing: 16,
//     favoriteStyle: "hip-hop",
//     otherTroops: ["Tap Tap Tappers", "Hip Hop Ladies"],
//     fans: [
//         {
//             name: "Joe",
//             hometown: "Princeton",
//             ticketsPurchased: 5,
//             frequentFriendClub: function () {
//                 if (ticketsPurchased > 5) {
//                     return this.name + " is in the Friends Club and eligible for discounts";
//                     var this.name = true;
//                 } else {
//                     return this.name + " is not eligible for discounts";
//                     var this.name = false
//                 }
//             }
//            }
//        ]
// }
}

console.log(theBlackSwans.description());

 ]




 //
 //function () {
 //    if (ticketsPurchased > 5) {
 //        return this.name + " is in the Friends Club and eligible for discounts";
 //        var this.name = true;
 //    } else {
 //        return this.name + " is not eligible for discounts";
 //        var this.name = false
 //    }
 //}
 //
 //description: function () {
 //    var time = this.age - this.yearsDancing;
 //    
 //    console.log(this.name + "'s favorite style of dance is " + this.favoriteStyle + " and they have been dancing for " + time.)
 //},