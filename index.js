const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

// kata 1 - display array from the cities in gotCitiesCSV
{
    function k1() {
        let destination = document.getElementById("Katas1");
        let newP = document.createElement("p");
        let a = JSON.stringify(gotCitiesCSV.split(","));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k1()
}

// kata 2- Display an array of words from the sentence in bestThing.
{
    function k2() {
        let destination = document.getElementById("Katas2");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.split(","));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k2()
}
// Katas 3-Display a string separated by semi-colons instead of commas from gotCitiesCSV
{
    function k3() {
        let destination = document.getElementById("Katas3");
        let newP = document.createElement("p");

        let a = JSON.stringify(gotCitiesCSV.replace(/,/g, ";"));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k3()
}
// Kata 4 - Display a CSV (comma-separated) string from the lotrCitiesArray
{
    function k4() {
        let destination = document.getElementById("Katas4");
        let newP = document.createElement("p");
        // newElement.textContent = JSON.stringify(lotrCitiesArray);
        let a = JSON.stringify(lotrCitiesArray.toString());
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k4()
}

// Kata 5 - Display the first 5 cities in lotrCitiesArray
{
    function k5() {
        let destination = document.getElementById("Katas5");
        let newP = document.createElement("p");
        let a = JSON.stringify(lotrCitiesArray.slice(0, 5));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k5()
}
// Katas 6 -Display the last 5 cities in lotrCitiesArray

{
    function k6() {
        let destination = document.getElementById("Katas6");
        let newP = document.createElement("p");
        let a = JSON.stringify(lotrCitiesArray.slice(lotrCitiesArray.length - 5));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k6()
}
// Katas 7 - Display the 3rd to 5th city in lotrCitiesArray
{
    function k7() {
        let destination = document.getElementById("Katas7");
        let newP = document.createElement("p");
        let a = JSON.stringify(lotrCitiesArray.slice(2, 5));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k7()
}
// Kata 8 - Using splice, remove "Rohan" from lotrCitiesArray
{
    function k8() {
        let destination = document.getElementById("Katas8");
        let newP = document.createElement("p");
        const rohanIndex = lotrCitiesArray.indexOf("Rohan");
        lotrCitiesArray.splice(rohanIndex, 1);
        let a = JSON.stringify(lotrCitiesArray);
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k8()
}
// Kata 9 - Using splice, remove all cities after "Dead Marshes" in lotrCitiesArray

{
    function k9() {
        let destination = document.getElementById("Katas9");
        let newP = document.createElement("p");
        let rhunIndex = lotrCitiesArray.indexOf("Rhun");
        lotrCitiesArray.splice(rhunIndex, 3);
        let a = JSON.stringify(lotrCitiesArray);
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k9()
}


// Katas 10 - Using splice, add "Rohan" back to lotrCitiesArray right after "Gondor"

{
    function k10() {
        let destination = document.getElementById("Katas10");
        let newP = document.createElement("p");
        let beleriandIndex = lotrCitiesArray.indexOf("Beleriand")
        lotrCitiesArray.splice(beleriandIndex, 0, "Rohan");
        let a = JSON.stringify(lotrCitiesArray);
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k10()
}

// // Using splice, rename "Dead Marshes" to "Deadest Marshes" in lotrCitiesArray

{
    function k11() {
        let destination = document.getElementById("Katas11");
        let newP = document.createElement("p");
        let deadMarshesIndex = lotrCitiesArray.indexOf("Dead Marshes");
        lotrCitiesArray.splice(deadMarshesIndex, 1, "Deadest Marshes");
        let a = JSON.stringify(lotrCitiesArray);
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k11()
}
// Katas 12 - Using slice, display the first 14 characters from bestThing

{
    function k12() {
        let destination = document.getElementById("Katas12");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.slice(0, 14));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k12()
}
// Kata 13 - Using slice, display the last 12 characters from bestThing
{
    function k13() {
        let destination = document.getElementById("Katas13");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.slice(bestThing.length - 12));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k13()
}
// Kata 14 - Using slice, display characters between the 23rd and 38th position of bestThing (i.e., "boolean is even")
{
    function k14() {
        let destination = document.getElementById("Katas14");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.slice(23, 38));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k14()
}
// Kata 15 - Repeat #13 using substring instead of slice.
{
    function k15() {
        let destination = document.getElementById("Katas15");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.substring(bestThing.length - 12));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k15()
}
// Kata 16 - Repeat #14 using substr instead of slice.

{
    function k16() {
        let destination = document.getElementById("Katas16");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.substring(23, 38));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k16()
}
// Kata 17 - Find and display the index of "only" in bestThing
{
    function k17() {
        let destination = document.getElementById("Katas17");
        let newP = document.createElement("p");
        let a = JSON.stringify(bestThing.indexOf("only"));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k17()
}

// Katas 18 - Find and display the index of the last word in bestThing
{
    function k18() {
        let destination = document.getElementById("Katas18");
        let newP = document.createElement("p");
        let v = bestThing.split(" ").slice(-1);
        let a = JSON.stringify(bestThing.lastIndexOf(v));
        newP.textContent = a;
        destination.appendChild(newP);
    }
    k18()
}

// // Kata 19 - Find and display all cities from gotCitiesCSV  that use double vowels ("aa","ee", etc.)
// {
function k19() {
    let destination = document.getElementById("Katas19");
    let newP = document.createElement("p");
    let a = gotCitiesCSV.split(",");
    let doubleVowelCity = []

    for (let i = 0; i < a.length; i++) {
        city = a[i];
        if (city.includes("aa") == true) {
            doubleVowelCity.push(city);
        } else if (city.includes("ee") == true) {
            doubleVowelCity.push(city);

        } else if (city.includes("ii") == true) {
            doubleVowelCity.push(city);

        } else if (city.includes("oo") == true) {
            doubleVowelCity.push(city);

        } else if (city.includes("uu") == true) {
            doubleVowelCity.push(city);

        }

    }
    newP.textContent = JSON.stringify(doubleVowelCity);
    destination.appendChild(newP);
}
k19()

// // // Katas 20 - Find and display all cities from lotrCitiesArray that end with "or"
{
    function k20() {
        let destination = document.getElementById("Katas20");
        let newP = document.createElement("p");
        let a = gotCitiesCSV.split(",");
        let allORCities = [];
        for (let i = 0; i < lotrCitiesArray.length; i++) {
            city = lotrCitiesArray[i];
            if (city.includes)
        }
         // let a = JSON.stringify(gotCitiesCSV.split(","));
        // newP.textContent = a;

        destination.appendChild(newP);
    }
    k20()
}

// // const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
// // const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
// // const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
// // // Katas 21 - Find and display all the words in bestThing that start with a "b"

// // // Katas 22 - Display "Yes" or "No" if lotrCitiesArray includes "Mirkwood"

// {
//     function k22() {
//         let destination = document.getElementById("Katas22");
//         let newP = document.createElement("p");
//         if (lotrCitiesArray.includes("Mirkwood" === true) 
//             let a = alert("yes");
//         }
//         newP.textContent  = a;
//         destination.appendChild(newP);
//     }
//     k22()
// }



// Katas 23 - Display "Yes" or "No" if lotrCitiesArray includes "Hollywood"
// Katas 24 - Display the index of "Mirkwood" in lotrCitiesArray
// Find and display the first city in lotrCitiesArray that has more than one word
// Reverse the order in lotrCitiesArray
// Sort lotrCitiesArray alphabetically
// Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)
// Using pop, remove the last city from lotrCitiesArray
// Using push, add back the city from lotrCitiesArray that was removed in #29 to the back of the array
// Using shift, remove the first city from lotrCitiesArray
// Using unshift, add back the city from lotrCitiesArray that was removed in #31 to the front of the array