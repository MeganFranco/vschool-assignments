//https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove
//http://stackoverflow.com/questions/5933157/how-to-remove-an-html-element-using-javascript

var myList = $("#theList")
var aCount = 0;

function deleteMe(myButton){
   myButton.parentNode.parentNode.removeChild(myButton.parentElement)
}

function addItem(){
    event.preventDefault();
    
    if(myList == ""){
        myList.style.display = "none";
    }

   //add to list  
    var newItem = document.getElementById("newItem").value;

    var newListItem = $("<li>" + "<button class='deleteButton' onclick='deleteMe(this)'>X</button>" + newItem + "</li>");
    myList.append(newListItem);
    
  
    document.getElementById("newItem").value = ""
    
   
 
}


