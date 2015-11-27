/*jslint node: true, browser: true */
"use strict";

function ModelCC() {

    var value = "",
        currency = [],
        doneCalc = true,
        cut = 0,
        fromCR = 0,
        toCR = 0,
        fromCur = "EUR",
        toCur = "EUR",
        ratesOfExchange = [ "USD", "JPY", "BGN", "CZK", "DKK", 
                            "GBP", "HUF", "PLN", "RON", "SEK", 
                            "CHF", "NOK", "HRK", "RUB", "TRY", 
                            "AUD", "BRL", "CAD", "CNY", "HKD", 
                            "IDR", "ILS", "INR", "KRW", "MXN", 
                            "MYR", "NZD", "PHP", "SGD", "THB", "ZAR"];

    this.getValsCentralBank = function () {

        var i = 2,
            getData = "",
            xml = "",
            parser = "",
            xmlDocument = "",
            CADjson  = "",
            CADxml = "";
           
            getData = new XMLHttpRequest();
            getData.open("GET", "https://devweb2014.cis.strath.ac.uk/~aes02112/ecbxml.php", false);
            getData.send(null);
            xml = getData.responseText;
            parser = new DOMParser();
            xmlDocument = parser.parseFromString(xml, "text/xml");
            CADxml = xmlDocument.getElementsByTagName("Cube");

            for (i; i <= 32; i = i + 1) {
                currency[i - 2] = CADxml[i].getAttribute("rate");
            }
            CADjson =  JSON.stringify(currency);
            if (localStorage) {
                localStorage.cgb12174_currencies = CADjson;
            }

    };

    if (localStorage) {
        if (localStorage.cgb12174_lastValue) {
            value = localStorage.cgb12174_lastValue;
        }
    }
    
    if (localStorage) {
        if (localStorage.cgb12174_lastValue) {
            fromCur = localStorage.cgb12174_lastValue;
        }
    }
    
    if (localStorage) {
        if (localStorage.cgb12174_lastValue) {
            toCur = localStorage.cgb12174_lastValue;
        }
    }
    
    if (localStorage) {
        if (localStorage.cgb12174_lastValue) {
            cut = localStorage.cgb12174_lastValue;
        }
    }

    this.getDigit = function (buttonNo) {
        if (buttonNo === "c") {
            value = "";
        } else if (buttonNo === "e") {
            this.getValsCentralBank();
            this.getFR();
            //console.log(fromCur);
            this.getTR();
            //console.log(toCur);
            this.convert();
            doneCalc = true;
        } else if (doneCalc === true) {
            value = buttonNo;
            doneCalc = false;
        } else {
            value += buttonNo;
        }
    };

    this.getValue = function () {
        return value;
    };



    this.convert = function () {
        var  cutAway = 0;

        value /= fromCR;
        value *= toCR;
        cutAway = (cut / 100) * value;
        value -= cutAway;
        value = value.toFixed(2);
    };

    this.getFR = function () {
        var i = 0;

        if (fromCur === "EUR") {
            fromCR = 1;
        } else {
            for (i; i < ratesOfExchange.length; i = i + 1) {
                if (ratesOfExchange[i] === fromCur) {
                    fromCR = currency[i];
                    break;
                }
            }
        }
    };

    this.getTR = function () {
        var i = 0;

        if (toCur === "EUR") {
            toCR = 1;
        } else {
            for (i; i < ratesOfExchange.length; i = i + 1) {
                if (ratesOfExchange[i] === toCur) {
                    toCR = currency[i];
                    break;
                }
            }
        }
    };

    // Setter and getter for getting the cut
    this.setCut = function (cutChange) {
        cut = cutChange;
    };

    this.getCut = function () {
        return cut;
    };

    // Setter and getter for getting the 'from' currency
    this.setCurFrom = function (fromCurChange) {
        fromCur = fromCurChange;
    };

    this.getCurFrom = function () {
        return fromCur;
    };

    // Setter and getter for getting the 'to' currency
    this.setCurTo = function (toCurChange) {
        toCur = toCurChange;
    };

    this.getCurTo = function () {
        return toCur;
    };

}