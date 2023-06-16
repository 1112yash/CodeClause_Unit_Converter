// Length converter
function convert1() {
    var inputValue1 = document.getElementById("inputValue1").value;
    var inputUnit1 = document.getElementById("inputUnit1").value;
    var outputUnit1 = document.getElementById("outputUnit1").value;

    var convertedValue;

    if (inputUnit1 === outputUnit1) {
        convertedValue = inputValue1;
    } else if (inputUnit1 === "cm" && outputUnit1 === "inch") {
        convertedValue = inputValue1 / 2.54;
    } else if (inputUnit1 === "cm" && outputUnit1 === "m") {
        convertedValue = inputValue1 / 100;
    } else if (inputUnit1 === "inch" && outputUnit1 === "cm") {
        convertedValue = inputValue1 * 2.54;
    } else if (inputUnit1 === "inch" && outputUnit1 === "m") {
        convertedValue = inputValue1 * 0.0254;
    } else if (inputUnit1 === "m" && outputUnit1 === "cm") {
        convertedValue = inputValue1 * 100;
    } else if (inputUnit1 === "m" && outputUnit1 === "inch") {
        convertedValue = inputValue1 * 39.37;
    }

    document.getElementById("outputValue1").value = convertedValue.toFixed(2);
}

// Area converter
function convert2() {
    var inputValue2 = document.getElementById("inputValue2").value;
    var inputUnit2 = document.getElementById("inputUnit2").value;
    var outputUnit2 = document.getElementById("outputUnit2").value;

    var convertedValue;

    if (inputUnit2 === "sqm" && outputUnit2 === "sqkm") {
        convertedValue = inputValue2 * 0.000001;
    } else if (inputUnit2 === "sqm" && outputUnit2 === "sqft") {
        convertedValue = inputValue2 * 10.7639;
    } else if (inputUnit2 === "sqm" && outputUnit2 === "sqmi") {
        convertedValue = inputValue2 * 0.000000386102;
    } else if (inputValue2 === "sqkm" && outputUnit2 === "sqm") {
        convertedValue = inputValue2 * 1000000;
    } else if (inputUnit2 === "sqkm" && outputUnit2 === "sqft") {
        convertedValue = inputValue2 * 10763910.41671;
    } else if (inputUnit2 === "sqkm" && outputUnit2 === "sqmi") {
        convertedValue = inputValue2 * 0.386102158542;
    } else if (inputUnit2 === "sqft" && outputUnit2 === "sqm") {
        convertedValue = inputValue2 * 0.092903;
    } else if (inputUnit2 === "sqft" && outputUnit2 === "sqkm") {
        convertedValue = inputValue2 * 0.000000092903;
    } else if (inputUnit2 === "sqft" && outputUnit2 === "sqmi") {
        convertedValue = inputValue2 * 0.00000003587;
    } else if (inputUnit2 === "sqmi" && outputUnit2 === "sqm") {
        convertedValue = inputValue2 * 2589988.11034;
    } else if (inputUnit2 === "sqmi" && outputUnit2 === "sqkm") {
        convertedValue = inputValue2 * 2.58998811034;
    } else if (inputUnit2 === "sqmi" && outputUnit2 === "sqft") {
        convertedValue = inputValue2 * 27878400;
    } else {
        convertedValue = inputValue2;
    }
    document.getElementById("outputValue2").value = convertedValue.toFixed(2);
}

//Temperature converter
function convert3() {
    var inputValue3 = document.getElementById("inputValue3").value;
    var inputUnit3 = document.getElementById("inputUnit3").value;
    var outputUnit3 = document.getElementById("outputUnit3").value;

    var convertedValue;

    if (inputUnit3 === "c" && outputUnit3 === "f") {
        convertedValue = (inputValue3 * 9 / 5) + 32;
    } else if (inputUnit3 === "c" && outputUnit3 === "k") {
        convertedValue = parseFloat(inputValue3) + 273.15;
    } else if (inputUnit3 === "f" && outputUnit3 === "c") {
        convertedValue = (inputValue3 - 32) * 5 / 9;
    } else if (inputUnit3 === "f" && outputUnit3 === "k") {
        convertedValue = (inputValue3 + 459.67) * 5 / 9;
    } else if (inputUnit3 === "k" && outputUnit3 === "c") {
        convertedValue = inputValue3 - 273.15;
    } else if (inputUnit3 === "k" && outputUnit3 === "f") {
        convertedValue = (inputValue3 * 9 / 5) - 459.67;
    } else {
        convertedValue = inputValue3;
    }

    document.getElementById("outputValue3").value = convertedValue.toFixed(2);
}


// time converter
function convert4() {
    var inputValue4 = document.getElementById("inputValue4").value;
    var inputUnit4 = document.getElementById("inputUnit4").value;
    var outputUnit4 = document.getElementById("outputUnit4").value;

    var convertedValue;

    if (inputUnit4 === "seconds" && outputUnit4 === "minutes") {
        convertedValue = inputValue4 / 60;
    } else if (inputUnit4 === "seconds" && outputUnit4 === "hours") {
        convertedValue = inputValue4 / 3600;
    } else if (inputUnit4 === "seconds" && outputUnit4 === "days") {
        convertedValue = inputValue4 / 86400;
    } else if (inputUnit4 === "minutes" && outputUnit4 === "seconds") {
        convertedValue = inputValue4 * 60;
    } else if (inputUnit4 === "minutes" && outputUnit4 === "hours") {
        convertedValue = inputValue4 / 60;
    } else if (inputUnit4 === "minutes" && outputUnit4 === "days") {
        convertedValue = inputValue4 / 1440;
    } else if (inputUnit4 === "hours" && outputUnit4 === "seconds") {
        convertedValue = inputValue4 * 3600;
    } else if (inputUnit4 === "hours" && outputUnit4 === "minutes") {
        convertedValue = inputValue4 * 60;
    } else if (inputUnit4 === "hours" && outputUnit4 === "days") {
        convertedValue = inputValue4 / 24;
    } else if (inputUnit4 === "days" && outputUnit4 === "seconds") {
        convertedValue = inputValue4 * 86400;
    } else if (inputUnit4 === "days" && outputUnit4 === "minutes") {
        convertedValue = inputValue4 * 1440;
    } else if (inputUnit4 === "days" && outputUnit4 === "hours") {
        convertedValue = inputValue4 * 24;
    } else {
        convertedValue = inputValue4;
    }

    document.getElementById("outputValue4").value = convertedValue.toFixed(2);
}



// Volume converter
function convert5() {
    var inputValue5 = document.getElementById("inputValue5").value;
    var inputUnit5 = document.getElementById("inputUnit5").value;
    var outputUnit5 = document.getElementById("outputUnit5").value;

    var convertedValue;

    if (inputUnit5 === "liters" && outputUnit5 === "cubicmeters") {
        convertedValue = inputValue5 / 1000;
    } else if (inputUnit5 === "liters" && outputUnit5 === "gallons") {
        convertedValue = inputValue5 * 0.264172;
    } else if (inputUnit5 === "liters" && outputUnit5 === "cubicfeet") {
        convertedValue = inputValue5 * 0.0353147;
    } else if (inputUnit5 === "cubicmeters" && outputUnit5 === "liters") {
        convertedValue = inputValue5 * 1000;
    } else if (inputUnit5 === "cubicmeters" && outputUnit5 === "gallons") {
        convertedValue = inputValue5 * 264.172;
    } else if (inputUnit5 === "cubicmeters" && outputUnit5 === "cubicfeet") {
        convertedValue = inputValue5 * 35.3147;
    } else if (inputUnit5 === "gallons" && outputUnit5 === "liters") {
        convertedValue = inputValue5 * 3.78541;
    } else if (inputUnit5 === "gallons" && outputUnit5 === "cubicmeters") {
        convertedValue = inputValue5 * 0.00378541;
    } else if (inputUnit5 === "gallons" && outputUnit5 === "cubicfeet") {
        convertedValue = inputValue5 * 0.133681;
    } else if (inputUnit5 === "cubicfeet" && outputUnit5 === "liters") {
        convertedValue = inputValue5 * 28.3168;
    } else if (inputUnit5 === "cubicfeet" && outputUnit5 === "cubicmeters") {
        convertedValue = inputValue5 * 0.0283168;
    } else if (inputUnit5 === "cubicfeet" && outputUnit5 === "gallons") {
        convertedValue = inputValue5 * 7.48052;
    } else {
        convertedValue = inputValue5;
    }

    document.getElementById("outputValue5").value = convertedValue.toFixed(2);
}


// Weight converter
function convert6() {
    var inputValue6 = document.getElementById("inputValue6").value;
    var inputUnit6 = document.getElementById("inputUnit6").value;
    var outputUnit6 = document.getElementById("outputUnit6").value;

    var convertedValue;

    if (inputUnit6 === "grams" && outputUnit6 === "kilograms") {
        convertedValue = inputValue6 / 1000;
    } else if (inputUnit6 === "grams" && outputUnit6 === "pounds") {
        convertedValue = inputValue6 * 0.00220462;
    } else if (inputUnit6 === "grams" && outputUnit6 === "ounces") {
        convertedValue = inputValue6 * 0.035274;
    } else if (inputUnit6 === "kilograms" && outputUnit6 === "grams") {
        convertedValue = inputValue6 * 1000;
    } else if (inputUnit6 === "kilograms" && outputUnit6 === "pounds") {
        convertedValue = inputValue6 * 2.20462;
    } else if (inputUnit6 === "kilograms" && outputUnit6 === "ounces") {
        convertedValue = inputValue6 * 35.274;
    } else if (inputUnit6 === "pounds" && outputUnit6 === "grams") {
        convertedValue = inputValue6 * 453.592;
    } else if (inputUnit6 === "pounds" && outputUnit6 === "kilograms") {
        convertedValue = inputValue6 * 0.453592;
    } else if (inputUnit6 === "pounds" && outputUnit6 === "ounces") {
        convertedValue = inputValue6 * 16;
    } else if (inputUnit6 === "ounces" && outputUnit6 === "grams") {
        convertedValue = inputValue6 * 28.3495;
    } else if (inputUnit6 === "ounces" && outputUnit6 === "kilograms") {
        convertedValue = inputValue6 * 0.0283495;
    } else if (inputUnit6 === "ounces" && outputUnit6 === "pounds") {
        convertedValue = inputValue6 * 0.0625;
    } else {
        convertedValue = inputValue6;
    }

    document.getElementById("outputValue6").value = convertedValue.toFixed(2);
}