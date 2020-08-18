'use strict';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A(message) {
        this.myName = 1;
        this.greeting = message;
    }
    A.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    A.prototype.getName = function () {
        return this.myName;
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(message) {
        var _this = _super.call(this, message) || this;
        _this.myName = 2;
        return _this;
    }
    return B;
}(A));
var greeter = new B('');
console.log(greeter.getName());
