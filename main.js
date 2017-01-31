var way = [
    ['north', function () {
        way[i][0];
        north()
    }],
    ['east', function () {
        way[i][0];
        east()
    }],
    ['south', function () {
        way[i][0];
        south()
    }],
    ['west', function () {
        way[i][0];
        west()
    }]
];

var i = 0, prev = 2, deadEnd = 0, iter = 0;

do {
    while (!isFree(way[i][0]) || i == prev && deadEnd < 4) {
        i++;
        deadEnd++;
        i = i % 4;
    }
    iter++;
    deadEnd = 0;
    prev = (i + 2) % 4;
    way[i][1]();
    if (iter == 190) break;
    clear();
    map();
    i = (i + 3) % 4;
} while (true);

alert('TA-DAAAAA!!!!');
