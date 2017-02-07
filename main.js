var way = [
    ['north', north],
    ['east', east],
    ['south', south],
    ['west', west]
];

var currentDirection = 0;
var currentState = "";

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
    setTimeout(function() {map()}, 1000);
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


    takeTheWall();

var mainFunctionInterval = setInterval(mainFunction, 300);

function mainFunction() {
    console.clear();
    seekFreeLeft();

    if ((currentState = step()) == "next") {
            clearInterval(mainFunctionInterval);
            alert("TA-DAAAAAA!!!");
            mainFunctionInterval = setInterval(mainFunction, 300);
        }
        else if (currentState != true) {
            clearInterval(mainFunctionInterval);
            alert("I'M FREEEEE!!!");
        }
}