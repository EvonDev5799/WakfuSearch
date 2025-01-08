"use strict";
function arrayPos(index) {
    return 2 * (index - 1);
}
function paramValue(index, params) {
    return params[arrayPos(index)];
}
function parseCondition(condition, index, params) {
    let operation = condition[0];
    let number = Number(condition.slice(1));
    let value = Number(paramValue(index, params));
    if (operation == '~')
        return params.length > arrayPos(number);
    if (operation == '=')
        return value == number;
    if (operation == '>')
        return value >= number;
    if (operation == '<')
        return value <= number;
    console.log(`unable to parse condition : ${condition}`);
}
function parseLogic(str, params, index) {
    let start = 1;
    let cursor = start;
    while (str[cursor] != ']')
        cursor++;
    let conditionStr = str.slice(start, cursor);
    let checks = parseCondition(conditionStr, index.value, params);
    let bracket_level = 0;
    start = cursor + 2;
    cursor = start;
    while (str[cursor] != ":" && bracket_level == 0) {
        if (str[cursor] == "{")
            bracket_level++;
        if (str[cursor] == "}")
            bracket_level--;
        cursor++;
    }
    let subString;
    if (checks)
        subString = str.slice(start, cursor);
    else
        subString = str.slice(cursor + 1);
    return parseGeneric(subString, params, index);
}
let elems = [
    "Neutral",
    "Fire",
    "Water",
    "Earth",
    "Air",
    "Sun"
];
function parseGeneric(str, params, index = { value: 1 }) {
    let output = "";
    let cursor = 0;
    while (cursor < str.length) {
        if (str[cursor] == "[") {
            if (str[cursor + 1] == '#') {
                cursor += 2;
                let start = cursor;
                while (str[cursor] != ']')
                    cursor++;
                index.value = Number(str.slice(start, cursor));
                output += String(paramValue(index.value, params));
                cursor++;
            }
            else if (str[cursor + 1] == 'e' && str[cursor + 2] == 'l') {
                cursor += 3;
                let start = cursor;
                while (str[cursor] != ']')
                    cursor++;
                let elemId = Number(str.slice(start, cursor));
                output += elems[elemId];
                cursor++;
            }
            else
                console.log(`error : expected # or el but got ${str[cursor + 1]} instead at ${str.slice(cursor)}`);
        }
        else if (str[cursor] == '{') {
            let bracket_level = 1;
            cursor++;
            let start = cursor;
            while (bracket_level != 0) {
                if (str[cursor] == "{")
                    bracket_level++;
                if (str[cursor] == "}")
                    bracket_level--;
                cursor++;
            }
            let logicStr = str.slice(start, cursor - 1);
            output += parseLogic(logicStr, params, index);
        }
        else {
            output += str[cursor];
            cursor++;
        }
    }
    return output;
}
function defaultParse(str) {
    return parseGeneric(str, ["", 0, "X"]);
}
