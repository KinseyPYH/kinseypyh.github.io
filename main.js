window.onload = start;

function start() {


    var modal1 = document.getElementById("badmintonscoresModal");
    var modal2 = document.getElementById("robotModal");

    var modal1Button = document.getElementById("badmintonScoreButton");
    var modal2Button = document.getElementById("robotButton")

    var span = document.getElementsByClassName("close")[0];

    modal1Button.onclick = function() {
        modal1.style.display = "block";
    }

    modal2Button.onclick = function() {
        modal2.style.display = "block";
    }

    span.onclick = function() {
        modal2.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal1) {
            modal1.style.display = "none";
        }
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
    }

    
}