function process() {
    alert(
        "First Name: " + document.travelForm.firstName.value +
        "/nLast Name: " + document.travelForm.lastName.value +
        "/nAge: " + document.travelForm.age.value +
        "/nGender: " + document.travelForm.gender.value +
        "/nLocation: " + document.travelForm.location.value +
        "/n Dietary Restrictions: " + buildDietString(document.travelForm.dietaryrestrictions.value);
    )
}

function buildDietString(dietArray) {
    var dietString = "";
    for(var i = 0; i < dietArray.length; i++){
        if(dietArray[i].checked) {
            dietString += dietArray[i].value
        }
    }
    
    if (!dietString) {
        dietString = "None";
    }
    
    return dietString;
}


function processForm () {
    var toppings = document.myTravelForm.toppings;
    
    for (var i = 0; i < toppings.length; i++){
    if(toppingsi.checked) {
        consoe.log(toppings[i].value);
    }
}
}



//////////////////////////////////
//function processForm() {
//    alert(
//        "First Name: " + document.travelForm.firstName.value + "\n" +
//        "Last Name: " + document.travelForm.lastName.value + "\n" +
//        "Gender: " + document.travelForm.gender.value + "\n" +
//        "Location: " + document.travelForm.location.value + "\n" +
//        "Dietary Restrictions: " + buildDietString(document.travelForm.diet)
//    );
//}
//
//function buildDietString(dietArray) {
//    var dietString = "";
//
//    for (var i = 0; i < dietArray.length; i++) {
//        if (dietArray[i].checked) {
//            dietString += dietArray[i].value + " ";
//        }
//    }
//    
//    if (!dietString) {
//        dietString = "None";
//    }
//    return dietString;
//}