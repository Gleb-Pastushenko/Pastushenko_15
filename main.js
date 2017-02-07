var way = [
    ['north', north],
    ['east', east],
    ['south', south],
    ['west', west]
];

var currentDirection = 0;
var currentState = "";
<<<<<<< HEAD
var stepDelay = 200;
=======
>>>>>>> a348c93009aaaaa09603aed8c442e1a7950b7a7d

function turnLeft() {
    currentDirection = (currentDirection + 3) % 4;
}

function turnRight() {
    currentDirection = (currentDirection + 1) % 4;
}

function seekFreeLeft() {
    turnLeft();

    while (!isFree(way[currentDirection][0])) {
        turnRight();
    }
}

function step() {
<<<<<<< HEAD
    map();
=======
    setTimeout(function() {map()}, 1000);
>>>>>>> a348c93009aaaaa09603aed8c442e1a7950b7a7d
    return way[currentDirection][1]();
}

function takeTheWall() {
    while(isFree(way[currentDirection][0])) {
        turnLeft();
    }

    while(!isFree(way[currentDirection][0])) {
        turnRight();
    }
}


<<<<<<< HEAD
takeTheWall();

var mainFunctionInterval = setInterval(mainFunction, stepDelay);
=======
    takeTheWall();

var mainFunctionInterval = setInterval(mainFunction, 300);
>>>>>>> a348c93009aaaaa09603aed8c442e1a7950b7a7d

function mainFunction() {
    console.clear();
    seekFreeLeft();

    if ((currentState = step()) == "next") {
<<<<<<< HEAD
        clearInterval(mainFunctionInterval);
        alert("TA-DAAAAAA!!!");
        mainFunctionInterval = setInterval(mainFunction, stepDelay);
    }
    else if (currentState != true) {
        clearInterval(mainFunctionInterval);
        alert("I'M FREEEEE!!!");
    }
=======
            clearInterval(mainFunctionInterval);
            alert("TA-DAAAAAA!!!");
            mainFunctionInterval = setInterval(mainFunction, 300);
        }
        else if (currentState != true) {
            clearInterval(mainFunctionInterval);
            alert("I'M FREEEEE!!!");
        }
>>>>>>> a348c93009aaaaa09603aed8c442e1a7950b7a7d
}