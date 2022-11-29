"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
function isFalse (input){
    return input === false;
}

function isTrue (input){
     return input === true;
}

function isEven (input){
    // if (parseFloat( input) %2 ===0 ) {
    //     return true;
    // }else if(input === true ||input ===false){
    //     return false;
    // }else{
    //     return false;
    // }
    if(typeof 'input' === 'boolean')
        return false;

    let result;
    result = parseFloat(input)%2 ===0;
    return result
}


function addOne (input){
    // if(isNaN( input) !== true) {
    //     let result;
    //     result = parseFloat(input) + 1;
    //     return result;
    // }else if(input === Infinity){
    //     return Infinity;
    // }
    return ++input;
}

function isEqual (a, b){
    if(a == b){
        return true;
    }else{
        return false;
    }
}

function isIdentical (a, b){
    if(a===b){
        return true;
    }else{
        return false;
    }
}

function not (input){
    // if(isNaN(input)===true) {
    //     return true;
    // }else if(input === true || input === input.toString() || input === 0 || input === null){
    //     return true;
    // }else{
    //     return false;
    // }
    return !input;
}

function and (a,b){
    return a && b;
}

function or (a,b){
    return a || b;
}

function concat (a,b){
    let result;
    result = a.toString() + b.toString();
    return result;
}


