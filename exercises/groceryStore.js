var shopper = {
    name: "George",
    items: 15,
    storeMember: true,
    groceryCart: ["apples", "cereal", "milk", "dog food"],
    lanefunction: function () {
        if (shopper.items <= 15) {
            return shopper.name + " can get into the expresslane"
        } else {
            return shopper.name + " can NOT get into the expresslane"
        }
    }
}

console.log(shopper.lanefunction());