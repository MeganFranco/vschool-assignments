function refresh(event) {
                location.reload();
    };

window.onload = function () {

    document.getElementById("reloadButton").style.display = "none";

    document.getElementById("messageOption").addEventListener('change', reveal);

    function reveal() {
        if (document.getElementById("messageOption").checked) {
            document.getElementById("commentBox").style.display = "initial";
        } else {
            document.getElementById("commentBox").style.display = "none";
        }

    }
    document.getElementById("commentBox").style.display = "none";

    //add user input to table
    document.getElementById("formSubmit").addEventListener('click', addRow);

    function addRow(event) {
        //only run JS
        event.preventDefault();

        if (document.getElementById("userName").value === "") {
            document.getElementById("errorMessage").innerHTML = "please enter a name";
            document.getElementById("reloadButton").style.display = "initial";
            return false;

        }
        if (document.getElementById("userGame").value === "") {
            document.getElementById("errorMessage").innerHTML = "please enter a game";
            document.getElementById("reloadButton").style.display = "initial";
            return false;

        }
        if (document.getElementById("userScore").value === "") {
            document.getElementById("errorMessage").innerHTML = "please enter a score";
            document.getElementById("reloadButton").style.display = "initial";
            return false;

        }


        var name = document.getElementById("userName").value;
        var game = document.getElementById("userGame").value;
        var date = document.getElementById("userDate").value;
        var score = document.getElementById("userScore").value;
        var message = document.getElementById("commentBox").value;

        document.getElementById("newName").innerHTML = name;
        document.getElementById("newGame").innerHTML = game;
        document.getElementById("newDate").innerHTML = date;
        document.getElementById("newScore").innerHTML = score;
        document.getElementById("newMessage").innerHTML = message;

        
        document.getElementById("form").style.display = "none";
    }

  


}