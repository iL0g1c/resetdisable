// ==UserScript==
// @name         reset-killer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Disables the r key when run.
// @author       Osprey_
// @match http://www.geo-fs.com/geofs.php*
// @match http://geo-fs.com/geofs.php*
// @match https://www.geo-fs.com/geofs.php*
// @match https://geo-fs.com/geofs.php*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
(function () {
    function disableReset() {
        var o = setInterval(function () {
            window.geofs &&
            geofs.aircraft &&
            geofs.aircraft.instance.object3d &&
            (
                clearInterval(o),

                function () {
                    window.enabled = void 0;

                    /*Makes sure you can't press shift + s in the chat and say flares.*/
                    $(document).off("keydown");
                    $(document).on("keydown", ".geofs-stopKeyboardPropagation",
                        function (e) {
                            e.stopImmediatePropagation();
                        }
                    );
                    $(document).on("keydown", ".address-input",
                        function (e) {
                            e.stopImmediatePropagation();
                        }
                    );
                    console.log(1);
                    var e = controls.keyDown;
                    controls.keyDown = function (o) {
                        if (typeof enabled != "undefined") {
                            if (o.which == 82) {
                                return;
                            } else {
                                e(o);
                            }
                        } else {
                            e(o);
                        }

                    };
                    /*used to be if statement for the instruments. May need to put back.*/
                    enabled = !0;
                    $(document).on("keydown", controls.keyDown);
                }()
            );
        }, 100);
    }
    /*Main core function. Everthing else will start from here.*/
    function init() {
        disableReset();
    }
    init();
})();