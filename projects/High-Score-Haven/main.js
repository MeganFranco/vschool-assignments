// window.onload = function(){
//   console.log("docs are connected");
//
//
// }

//add a message box if "message" == true
function preparePage()
{
     var checkBox = function(){
     if (document.getElementById("messageOption").checked){
         document.getElementById("commentBox").style.display = "block";
     } else {
        document.getElementById("commentBox").style.display = "none";
     }
 }

 document.getElementById("messageOption").onlick = checkBox();
}



//document.getElementById("messageOption").onclick = function(){
//    if(document.getElementById("messageOption").checked) {
//        document.getElementById("commentBox").style.display = "block";
//    } else {
//        document.getElementById("commentBox").style.display = "none";
//    }
//}


window.onload = function() {
    preparePage();
}

 
 
 
 
 ///OPTION 1///////////
 
// why doesn't statement (from Lynda tutorial) below work?!?!
document.getElementById("formSubmit").addEventListener('click', addRow);

//stack overflow response http://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null (still not working)

//var grabForm = document.getElementById("formSubmit")
//    if(grabForm) {
//        grabForm.addEventListener('submit', addRow)
//    }
//
function addRow(event) {
    //only run JS
    event.preventDefault();
    
    //add a table row? 
    
//    document.getElementById("newName").innerHTML = document.getElementById("userName").value;
    
    var name = document.getElementById("userName").value;
    document.getElementById("newName").innerHTML = name;
    
    console.log("hey, I'm working");   
}



///////////Option 2///////////////////
//  document.getElementById("formSubmitTwo").onsubmit = submitTwo()	
 
// var submitTwo = function(){
//      //use .value to pull from forms
//    
//     
//    var name = document.forms[0].elements[0].value;
//
//     
//     
//      var name = document.getElementById("userName").value;
//      var game = document.getElementById("userGame").value;
//      var date = document.getElementById("userDate").value;
//      var score = document.getElementById("userScore").value;
//	  
//     
//       document.getElementById("newName").value = name;
//      document.getElementById("newGame").value = game;
//      document.getElementById("newDate").value = date;
//      document.getElementById("newScore").value = score;
//      
//      	  console.log("name: " + name);
     
     
           //Nope...
//      document.getElementById("newName").innerHTML = name;
//      document.getElementById("newGame").innerHTML = game;
//      document.getElementById("newDate").innerHTML = date;
//      document.getElementById("newScore").innerHTML = score;
     //also Nope...
//    var name = document.forms[0].elements[0].value;
     
 //}
//
// document.getElementById("formSubmitTwo").onsubmit = submitTwo()	

 

// on submit -> add a new table row filled with the user information

//

//use a class?
    // function userScore {
    //
    // }
    
//error messages


///////////////////////////AM WORK/////////////////////////


////add a message box if "message" == true
//document.getElementById("message").onclick = function() {
//    if (document.getElementById("message").checked){
//        //add box
//    } else {
//        //box.style.display = none
//    }
//}
//
//// on submit -> add a new table row filled with the user information
//    function fileSubmission(){
//      document.getElementById("form").onsubmit = function(){
//          var name = document.getElementById("userName");
//          var game = document.getElementById("userGame");
//          var date = document.getElementById("userDate");
//          var score = document.getElementById("userScore");
//          
//          
//          document.getElementById("newName").innerHTML = name;
//          document.getElementById("newGame").innerHTML = game;
//          document.getElementById("newDate").innerHTML = date;
//          document.getElementById("newScore").innerHTML = score;
//      }  
//    }
////
//
////use a class?
//    function userScore {
//        
//    } 
//    
////error messages
