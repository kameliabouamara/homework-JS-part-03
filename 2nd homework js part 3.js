/*Exercice 1:
Write a JavaScript program that compare two objects 
to determine if the first one contains equivalent 
property values to the second one.*/

var mcmember1 = {
    name: "kamelia",
    discordID: "xeirdos"
};

var mcmember2 = {
    name: "denver",
    discordID: "denverH2O"
};

if (mcmember1.name == mcmember2.name) {
    console.log("true");
} else {
    console.log("false");
}
/*2nd method more optimal*/
console.log(JSON.stringify(mcmember1) === JSON.stringify(mcmember2));

/*Exercice 2:
Write a JavaScript function to find the common elements from two arrays
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["1", "2"] */

/*
function difference(tab1 = [], tab2 = []) {
    var tab3 = [];
    var i;
    var j;

    for (i = 0; i < tab1.lentgh; i++) {
        for (j = 0; i < tab2.lentgh; j++) {
            if (tab1[i] == tab2[j]) {
                tab3.push(tab1[i]);
            }
        }
    }
    return tab3;
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
*/


var difference = [1, 2, 3].filter(x => [100, 2, 1, 10].indexOf(x) !== -1)
console.log(difference);