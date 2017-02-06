var way = [
    ['north', north],
    ['east', east],
    ['south', south],
    ['west', west]
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
