var gameMarker = "x";

function changeMarkerToX(){ 
    gameMarker = "x";
    console.log("The x button was clicked");
}

function changeMarkerToO(){ 
    gameMarker = "o";
    console.log("The o button was clicked");
}

function placeMark(id) {
    var place = document.getElementById(id);
    place.innerHTML = gameMarker;
    console.log(gameMarker + "added");
}