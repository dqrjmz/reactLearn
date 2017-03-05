"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
                        判断设备平台
                     */

var Tool = function () {
    function Tool() {
        _classCallCheck(this, Tool);

        this.isTc = false;
        this.isWx = false;
        this.isQQ = false;
        this.isTouch = false;

        this.platforms();
    }
    // 判断不同平台


    _createClass(Tool, [{
        key: "platforms",
        value: function platforms() {
            if (/.*TcTravel.*/i.test(navigator.userAgent)) {
                this.isTc = true;
            } else if (/MicroMessenger/i.test(navigator.userAgent)) {
                this.isWx = true;
            } else if (/qq/i.test(navigator.userAgent.toLowerCase())) {
                this.isQQ = true;
            } else {
                this.isTouch = true;
            }
        }
    }]);

    return Tool;
}();

;
exports.default = new Tool();