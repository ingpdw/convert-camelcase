'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * js-observer - lib/Camelize.js
 * Copyright(c) 2015 ingpdw <ingpdw@gmail.com>
 */

exports = module.exports = function () {
    function Camelize() {
        _classCallCheck(this, Camelize);
    }

    _createClass(Camelize, [{
        key: 'isNumerical',
        value: function isNumerical(obj) {
            obj = obj - 0;
            return obj === obj;
        }
    }, {
        key: 'isArray',
        value: function isArray(obj) {
            return obj instanceof Array;
        }
    }, {
        key: 'toCamel',
        value: function toCamel(string) {
            if (this.isNumerical(string)) {
                return string;
            }

            string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
                return chr ? chr.toUpperCase() : '';
            });

            return string.substr(0, 1).toLowerCase() + string.substr(1);
        }
    }, {
        key: 'convert',
        value: function convert(obj) {
            var _tmp = void 0,
                _item = void 0,
                _key = void 0,
                _value = void 0,
                _len = void 0;

            //isArray?
            if (this.isArray(obj)) {
                _tmp = [];

                for (_item = 0, _len = obj.length; _item < _len; _item++) {

                    _value = obj[_item];

                    if ((typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) === 'object') _value = this.convert(_value);

                    _tmp.push(_value);
                }

                //isObject?
            } else {
                _tmp = {};
                for (_item in obj) {
                    if (obj.hasOwnProperty(_item)) {
                        _key = this.toCamel(_item);
                        _value = obj[_item];
                        if (_value !== null && (typeof _value === 'undefined' ? 'undefined' : _typeof(_value)) === 'object') _value = this.convert(_value);

                        _tmp[_key] = _value;
                    }
                }
            }

            return _tmp;
        }
    }]);

    return Camelize;
}();