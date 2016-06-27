//This to-do list will have 4 functions

// Add a task to the list
function addTask() {
    var toDoList = getToDoList();
    
    var task = document.getElementById("taskInput");
    //where the document is the HTML page
    toDoList.push(task.value);
    localStorage.setItem("todoList", JSON.stringify(toDoList));
    
    
    showToDoList();
}

// remove a task from the list
function removeTask(button) {
    var toDoList = getToDoList();
    toDoList.splice(index, 1)
    showToDoList();
};


// Display the to do list to the user
function showToDoList() {
    var toDoList = getToDoList();

    var html = "<ul>"
    for (var i = 0; i < toDoList.length; i++){
        "<li> <button class='removeButton' onclick='removeTask("+ i +")'>X</button>" + toDoList[i] + "<li>"
    }
    html += "</ul>"
    document.getElementById("taskDisplay").innerHTML = html
    
}


// Retrieve the toDoList from local storage
function getToDoList() {
    var toDoListString = localStorage.getItem("toDoList");
    var toDoList =  JSON.parse(toDoListString);
    return toDoList
}

//showToDoList();