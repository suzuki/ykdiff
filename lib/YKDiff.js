"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _jsYaml = _interopRequireDefault(require("js-yaml"));

var _Result = _interopRequireDefault(require("./Result"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var YKDiff =
/*#__PURE__*/
function () {
  function YKDiff(filenameA, filenameB) {
    _classCallCheck(this, YKDiff);

    _defineProperty(this, "filenameA", void 0);

    _defineProperty(this, "filenameB", void 0);

    this.filenameA = filenameA;
    this.filenameB = filenameB;
  }

  _createClass(YKDiff, [{
    key: "getKeysSet",
    value: function getKeysSet(o) {
      var _this = this;

      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var resultSet = new Set();
      var keys = Object.keys(o);
      keys.forEach(function (key) {
        if (_typeof(o[key]) === "object") {
          var childSet = _this.getKeysSet(o[key], key);

          resultSet = new Set([].concat(_toConsumableArray(resultSet), _toConsumableArray(childSet)));
        } else {
          if (parent === null) {
            resultSet.add(key);
          } else {
            resultSet.add(parent + "." + key);
          }
        }
      });
      return resultSet;
    }
  }, {
    key: "createErrorMessages",
    value: function createErrorMessages(baseSet, targetSet) {
      var results = [];
      baseSet.forEach(function (key) {
        if (!targetSet.has(key)) {
          results.push("\"".concat(key, "\" is only exist in this file."));
        }
      });
      return results;
    }
  }, {
    key: "getDiff",
    value: function getDiff() {
      var fileA = _fs.default.readFileSync(this.filenameA);

      var fileB = _fs.default.readFileSync(this.filenameB);

      var docA = _jsYaml.default.safeLoad(fileA.toString());

      var docB = _jsYaml.default.safeLoad(fileB.toString());

      var keysSetA = this.getKeysSet(docA);
      var keysSetB = this.getKeysSet(docB);
      var notExistsA = this.createErrorMessages(keysSetA, keysSetB);
      var notExistsB = this.createErrorMessages(keysSetB, keysSetA);
      return new _Result.default(notExistsA, notExistsB);
    }
  }]);

  return YKDiff;
}();

var _default = YKDiff;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ZS0RpZmYudHMiXSwibmFtZXMiOlsiWUtEaWZmIiwiZmlsZW5hbWVBIiwiZmlsZW5hbWVCIiwibyIsInBhcmVudCIsInJlc3VsdFNldCIsIlNldCIsImtleXMiLCJPYmplY3QiLCJmb3JFYWNoIiwia2V5IiwiY2hpbGRTZXQiLCJnZXRLZXlzU2V0IiwiYWRkIiwiYmFzZVNldCIsInRhcmdldFNldCIsInJlc3VsdHMiLCJoYXMiLCJwdXNoIiwiZmlsZUEiLCJmcyIsInJlYWRGaWxlU3luYyIsImZpbGVCIiwiZG9jQSIsInlhbWwiLCJzYWZlTG9hZCIsInRvU3RyaW5nIiwiZG9jQiIsImtleXNTZXRBIiwia2V5c1NldEIiLCJub3RFeGlzdHNBIiwiY3JlYXRlRXJyb3JNZXNzYWdlcyIsIm5vdEV4aXN0c0IiLCJSZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxNOzs7QUFJSixrQkFBWUMsU0FBWixFQUErQkMsU0FBL0IsRUFBa0Q7QUFBQTs7QUFBQTs7QUFBQTs7QUFDaEQsU0FBS0QsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7OytCQUdDQyxDLEVBRWE7QUFBQTs7QUFBQSxVQURiQyxNQUNhLHVFQURXLElBQ1g7QUFDYixVQUFJQyxTQUFzQixHQUFHLElBQUlDLEdBQUosRUFBN0I7QUFFQSxVQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZSixDQUFaLENBQWI7QUFDQUksTUFBQUEsSUFBSSxDQUFDRSxPQUFMLENBQWEsVUFBQUMsR0FBRyxFQUFJO0FBQ2xCLFlBQUksUUFBT1AsQ0FBQyxDQUFDTyxHQUFELENBQVIsTUFBa0IsUUFBdEIsRUFBZ0M7QUFDOUIsY0FBTUMsUUFBUSxHQUFHLEtBQUksQ0FBQ0MsVUFBTCxDQUFnQlQsQ0FBQyxDQUFDTyxHQUFELENBQWpCLEVBQXdCQSxHQUF4QixDQUFqQjs7QUFDQUwsVUFBQUEsU0FBUyxHQUFHLElBQUlDLEdBQUosOEJBQVlELFNBQVosc0JBQTBCTSxRQUExQixHQUFaO0FBQ0QsU0FIRCxNQUdPO0FBQ0wsY0FBSVAsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDbkJDLFlBQUFBLFNBQVMsQ0FBQ1EsR0FBVixDQUFjSCxHQUFkO0FBQ0QsV0FGRCxNQUVPO0FBQ0xMLFlBQUFBLFNBQVMsQ0FBQ1EsR0FBVixDQUFjVCxNQUFNLEdBQUcsR0FBVCxHQUFlTSxHQUE3QjtBQUNEO0FBQ0Y7QUFDRixPQVhEO0FBYUEsYUFBT0wsU0FBUDtBQUNEOzs7d0NBR0NTLE8sRUFDQUMsUyxFQUNVO0FBQ1YsVUFBTUMsT0FBaUIsR0FBRyxFQUExQjtBQUVBRixNQUFBQSxPQUFPLENBQUNMLE9BQVIsQ0FBZ0IsVUFBQUMsR0FBRyxFQUFJO0FBQ3JCLFlBQUksQ0FBQ0ssU0FBUyxDQUFDRSxHQUFWLENBQWNQLEdBQWQsQ0FBTCxFQUF5QjtBQUN2Qk0sVUFBQUEsT0FBTyxDQUFDRSxJQUFSLGFBQWlCUixHQUFqQjtBQUNEO0FBQ0YsT0FKRDtBQU1BLGFBQU9NLE9BQVA7QUFDRDs7OzhCQUV3QjtBQUN2QixVQUFNRyxLQUFhLEdBQUdDLFlBQUdDLFlBQUgsQ0FBZ0IsS0FBS3BCLFNBQXJCLENBQXRCOztBQUNBLFVBQU1xQixLQUFhLEdBQUdGLFlBQUdDLFlBQUgsQ0FBZ0IsS0FBS25CLFNBQXJCLENBQXRCOztBQUVBLFVBQU1xQixJQUFJLEdBQUdDLGdCQUFLQyxRQUFMLENBQWNOLEtBQUssQ0FBQ08sUUFBTixFQUFkLENBQWI7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHSCxnQkFBS0MsUUFBTCxDQUFjSCxLQUFLLENBQUNJLFFBQU4sRUFBZCxDQUFiOztBQUVBLFVBQU1FLFFBQVEsR0FBRyxLQUFLaEIsVUFBTCxDQUFnQlcsSUFBaEIsQ0FBakI7QUFDQSxVQUFNTSxRQUFRLEdBQUcsS0FBS2pCLFVBQUwsQ0FBZ0JlLElBQWhCLENBQWpCO0FBRUEsVUFBTUcsVUFBVSxHQUFHLEtBQUtDLG1CQUFMLENBQXlCSCxRQUF6QixFQUFtQ0MsUUFBbkMsQ0FBbkI7QUFDQSxVQUFNRyxVQUFVLEdBQUcsS0FBS0QsbUJBQUwsQ0FBeUJGLFFBQXpCLEVBQW1DRCxRQUFuQyxDQUFuQjtBQUVBLGFBQU8sSUFBSUssZUFBSixDQUFXSCxVQUFYLEVBQXVCRSxVQUF2QixDQUFQO0FBQ0Q7Ozs7OztlQUdZaEMsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCB5YW1sIGZyb20gXCJqcy15YW1sXCI7XG5pbXBvcnQgUmVzdWx0IGZyb20gXCIuL1Jlc3VsdFwiO1xuXG5jbGFzcyBZS0RpZmYge1xuICBwcml2YXRlIGZpbGVuYW1lQTogc3RyaW5nO1xuICBwcml2YXRlIGZpbGVuYW1lQjogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGZpbGVuYW1lQTogc3RyaW5nLCBmaWxlbmFtZUI6IHN0cmluZykge1xuICAgIHRoaXMuZmlsZW5hbWVBID0gZmlsZW5hbWVBO1xuICAgIHRoaXMuZmlsZW5hbWVCID0gZmlsZW5hbWVCO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRLZXlzU2V0KFxuICAgIG86IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gICAgcGFyZW50OiBzdHJpbmcgfCBudWxsID0gbnVsbFxuICApOiBTZXQ8c3RyaW5nPiB7XG4gICAgbGV0IHJlc3VsdFNldDogU2V0PHN0cmluZz4gPSBuZXcgU2V0KCk7XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobyk7XG4gICAga2V5cy5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBpZiAodHlwZW9mIG9ba2V5XSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBjb25zdCBjaGlsZFNldCA9IHRoaXMuZ2V0S2V5c1NldChvW2tleV0sIGtleSk7XG4gICAgICAgIHJlc3VsdFNldCA9IG5ldyBTZXQoWy4uLnJlc3VsdFNldCwgLi4uY2hpbGRTZXRdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgICByZXN1bHRTZXQuYWRkKGtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0U2V0LmFkZChwYXJlbnQgKyBcIi5cIiArIGtleSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHRTZXQ7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVycm9yTWVzc2FnZXMoXG4gICAgYmFzZVNldDogU2V0PHN0cmluZz4sXG4gICAgdGFyZ2V0U2V0OiBTZXQ8c3RyaW5nPlxuICApOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgcmVzdWx0czogc3RyaW5nW10gPSBbXTtcblxuICAgIGJhc2VTZXQuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKCF0YXJnZXRTZXQuaGFzKGtleSkpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGBcIiR7a2V5fVwiIGlzIG9ubHkgZXhpc3QgaW4gdGhpcyBmaWxlLmApO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGlmZigpOiBSZXN1bHQge1xuICAgIGNvbnN0IGZpbGVBOiBCdWZmZXIgPSBmcy5yZWFkRmlsZVN5bmModGhpcy5maWxlbmFtZUEpO1xuICAgIGNvbnN0IGZpbGVCOiBCdWZmZXIgPSBmcy5yZWFkRmlsZVN5bmModGhpcy5maWxlbmFtZUIpO1xuXG4gICAgY29uc3QgZG9jQSA9IHlhbWwuc2FmZUxvYWQoZmlsZUEudG9TdHJpbmcoKSk7XG4gICAgY29uc3QgZG9jQiA9IHlhbWwuc2FmZUxvYWQoZmlsZUIudG9TdHJpbmcoKSk7XG5cbiAgICBjb25zdCBrZXlzU2V0QSA9IHRoaXMuZ2V0S2V5c1NldChkb2NBKTtcbiAgICBjb25zdCBrZXlzU2V0QiA9IHRoaXMuZ2V0S2V5c1NldChkb2NCKTtcblxuICAgIGNvbnN0IG5vdEV4aXN0c0EgPSB0aGlzLmNyZWF0ZUVycm9yTWVzc2FnZXMoa2V5c1NldEEsIGtleXNTZXRCKTtcbiAgICBjb25zdCBub3RFeGlzdHNCID0gdGhpcy5jcmVhdGVFcnJvck1lc3NhZ2VzKGtleXNTZXRCLCBrZXlzU2V0QSk7XG5cbiAgICByZXR1cm4gbmV3IFJlc3VsdChub3RFeGlzdHNBLCBub3RFeGlzdHNCKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBZS0RpZmY7XG4iXX0=