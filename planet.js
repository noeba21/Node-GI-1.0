const fs = require('fs');
const path = require('path');

fs.readFile('/Users/noeba/Desktop/node-GI/planet.txt', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    const array = data.toString().split("\n");
    for (const line of array) {
        console.log(line);
    }
});