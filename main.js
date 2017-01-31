var way = [
    ['north', function () {
        way[i][0];
        return north()
    }],
    ['east', function () {
        way[i][0];
        return east()
    }],
    ['south', function () {
        way[i][0];
        return south()
    }],
    ['west', function () {
        way[i][0];
        return west()
    }]
];

var i = 0, prev = 2, deadEnd = 0, result;

while (result != 'next' && result != 'end') {
    while (!isFree(way[i][0]) || i == prev && deadEnd < 4) {
        i++;
        deadEnd++;
        i = i % 4;
    }

    deadEnd = 0;
    prev = (i + 2) % 4;
    map();
    result = way[i][1]();
    i = (i + 3) % 4;
}


if (result == 'next') {
    alert('TA-DAAAAA!!!!');
} else {
    alert('I\'M FREE!!!');
}

result = "";
