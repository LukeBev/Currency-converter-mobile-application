/*jslint node: true, browser: true */
"use strict";

function ViewCC() {

    var textArea = document.getElementById("displayZone"),
        confirm = document.getElementById("confirm"),

        numButtonOne = document.getElementById("numButton1"),
        numButtonTwo = document.getElementById("numButton2"),
        numButtonThree = document.getElementById("numButton3"),
        numButtonFour = document.getElementById("numButton4"),
        numButtonFive = document.getElementById("numButton5"),
        numButtonSix = document.getElementById("numButton6"),
        numButtonSeven = document.getElementById("numButton7"),
        numButtonEight = document.getElementById("numButton8"),
        numButtonNine = document.getElementById("numButton9"),
        numButtonZero = document.getElementById("numButton0"),
        numButtonC = document.getElementById("numButtonC"),
        numButtonE = document.getElementById("numButtonE");
        

    this.showNumberPress = function (numberPress) {
        textArea.innerHTML = numberPress;
    };
    this.setOneClickCallback = function (callback) {
        numButtonOne.addEventListener("click", callback);
    };
    this.setTwoClickCallback = function (callback) {
        numButtonTwo.addEventListener("click", callback);
    };
    this.setThreeClickCallback = function (callback) {
        numButtonThree.addEventListener("click", callback);
    };
    this.setFourClickCallback = function (callback) {
        numButtonFour.addEventListener("click", callback);
    };
    this.setFiveClickCallback = function (callback) {
        numButtonFive.addEventListener("click", callback);
    };
    this.setSixClickCallback = function (callback) {
        numButtonSix.addEventListener("click", callback);
    };
    this.setSevenClickCallback = function (callback) {
        numButtonSeven.addEventListener("click", callback);
    };
    this.setEightClickCallback = function (callback) {
        numButtonEight.addEventListener("click", callback);
    };
    this.setNineClickCallback = function (callback) {
        numButtonNine.addEventListener("click", callback);
    };
    this.setZeroClickCallback = function (callback) {
        numButtonZero.addEventListener("click", callback);
    };
    this.setClearClickCallback = function (callback) {
        numButtonC.addEventListener("click", callback);
    };
    this.setEqualsClickCallback = function (callback) {
        numButtonE.addEventListener("click", callback);
    };
    this.setConfirmClickCallback = function (callback) {
        console.log(confirm + " <---  the currency before click");
        confirm.addEventListener("click", callback);
        console.log(confirm + " <---  the currency after click");
    };
}