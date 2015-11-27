/*jslint node: true, browser: true */
"use strict";

function ControllerCC() {
    var modelCC = new ModelCC(),
        viewCC = new ViewCC(),
        returnCalc = "",

        updateDisplay = function () {
            viewCC.showNumberPress(modelCC.getValue());
        };

    this.convert = function (input, cur1, cur2) {
        returnCalc = ((input / cur1) * cur2);
    };

    this.init = function () {

        
    
        viewCC.setOneClickCallback(function () {
            modelCC.getDigit("1");
            updateDisplay();
        });
        viewCC.setTwoClickCallback(function () {
            modelCC.getDigit("2");
            updateDisplay();
        });
        viewCC.setThreeClickCallback(function () {
            modelCC.getDigit("3");
            updateDisplay();
        });
        viewCC.setFourClickCallback(function () {
            modelCC.getDigit("4");
            updateDisplay();
        });
        viewCC.setFiveClickCallback(function () {
            modelCC.getDigit("5");
            updateDisplay();
        });
        viewCC.setSixClickCallback(function () {
            modelCC.getDigit("6");
            updateDisplay();
        });
        viewCC.setSevenClickCallback(function () {
            modelCC.getDigit("7");
            updateDisplay();
        });
        viewCC.setEightClickCallback(function () {
            modelCC.getDigit("8");
            updateDisplay();
        });
        viewCC.setNineClickCallback(function () {
            modelCC.getDigit("9");
            updateDisplay();
        });
        viewCC.setZeroClickCallback(function () {
            modelCC.getDigit("0");
            updateDisplay();
        });
        viewCC.setClearClickCallback(function () {
            modelCC.getDigit("c");
            updateDisplay();
        });
        viewCC.setEqualsClickCallback(function () {
            modelCC.getDigit("e");
            updateDisplay();
        });
        viewCC.setConfirmClickCallback(function () {
            
        var cutS = document.getElementById("cutSel").value,
            setCF = document.getElementById("fromSel").value,
            setCT = document.getElementById("toSel").value;
            console.log(cutS);
            console.log(setCF);
            console.log(setCT);
            modelCC.setCut(cutS); 
            modelCC.setCurFrom(setCF);
            modelCC.setCurTo(setCT);
            updateDisplay();
        });

        updateDisplay();
    };


}
var ControllerCC = new ControllerCC();
window.addEventListener("load", ControllerCC.init(), false);