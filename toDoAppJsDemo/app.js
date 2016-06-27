function addTask() {
	var toDoList = getToDoList();
	if (!toDoList) {
		toDoList = new Array;
	}
	var task = document.getElementById("taskInput").value;
	toDoList.push(task);
	localStorage.setItem("toDoList", JSON.stringify(toDoList));
	document.getElementById("taskInput").value = "";
	showToDoList();

}


function removeTask(button) {
	var id = parseInt(button.getAttribute('id'));
	var toDoList = getToDoList();
	console.log(id, typeof id);
	toDoList.splice(id, 1);
	localStorage.setItem('toDoList', JSON.stringify(toDoList));
	showToDoList();
};


function showToDoList() {
	var toDoList = getToDoList();
	var html = "<ul>";

	//	Alternative using for each.
		toDoList.forEach(function (task) {
			html += `<li>   <button id="${toDoList.indexOf(task)}" class="removeButton" onClick="removeTask(this)">X</button>   ${task} </li>`
		})

	html += "</ul>";
	document.getElementById("taskDisplay").innerHTML = html;
}

function getToDoList() {
	var toDoList = new Array;
	var toDoListString = localStorage.getItem("toDoList");
	toDoList = JSON.parse(toDoListString);
	return toDoList;
}

showToDoList();


//function strike() {
//	var checkbox = document.getElementById("thisBox").value;
//	var task = document.getElementById("task");
//	if (checkbox = "true") {
//		task.style.textDecoration = "line-through";
//	} else {
//		task.style.textDecoration = "inherit";
//	}
//}