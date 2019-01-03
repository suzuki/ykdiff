"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Result =
/*#__PURE__*/
function () {
  function Result(notExistsA, notExistsB) {
    _classCallCheck(this, Result);

    _defineProperty(this, "notExistsA", []);

    _defineProperty(this, "notExistsB", []);

    this.notExistsA = notExistsA;
    this.notExistsB = notExistsB;
  }

  _createClass(Result, [{
    key: "hasError",
    value: function hasError() {
      return this.notExistsA.length > 0 || this.notExistsB.length > 0;
    } // TODO: Split `output` to the other class/function.

  }, {
    key: "outputCommon",
    value: function outputCommon(filename, messages) {
      if (messages.length < 1) {
        return;
      }

      if (filename) {
        console.error("----------------------------------------------------------------------");
        console.error("File: " + filename);
        console.error("----------------------------------------------------------------------");
      }

      messages.forEach(function (msg) {
        console.error(msg);
      });
    }
  }, {
    key: "outputNotExistsA",
    value: function outputNotExistsA(filename) {
      this.outputCommon(filename, this.notExistsA);
    }
  }, {
    key: "outputNotExistsB",
    value: function outputNotExistsB(filename) {
      this.outputCommon(filename, this.notExistsB);
    }
  }]);

  return Result;
}();

var _default = Result;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9SZXN1bHQudHMiXSwibmFtZXMiOlsiUmVzdWx0Iiwibm90RXhpc3RzQSIsIm5vdEV4aXN0c0IiLCJsZW5ndGgiLCJmaWxlbmFtZSIsIm1lc3NhZ2VzIiwiY29uc29sZSIsImVycm9yIiwiZm9yRWFjaCIsIm1zZyIsIm91dHB1dENvbW1vbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE07OztBQUlKLGtCQUFZQyxVQUFaLEVBQWtDQyxVQUFsQyxFQUF3RDtBQUFBOztBQUFBLHdDQUh6QixFQUd5Qjs7QUFBQSx3Q0FGekIsRUFFeUI7O0FBQ3RELFNBQUtELFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDRDs7OzsrQkFFMEI7QUFDekIsYUFBTyxLQUFLRCxVQUFMLENBQWdCRSxNQUFoQixHQUF5QixDQUF6QixJQUE4QixLQUFLRCxVQUFMLENBQWdCQyxNQUFoQixHQUF5QixDQUE5RDtBQUNELEssQ0FFRDs7OztpQ0FDcUJDLFEsRUFBeUJDLFEsRUFBMEI7QUFDdEUsVUFBSUEsUUFBUSxDQUFDRixNQUFULEdBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRUQsVUFBSUMsUUFBSixFQUFjO0FBQ1pFLFFBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUNFLHdFQURGO0FBR0FELFFBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFdBQVdILFFBQXpCO0FBQ0FFLFFBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUNFLHdFQURGO0FBR0Q7O0FBRURGLE1BQUFBLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQixVQUFBQyxHQUFHLEVBQUk7QUFDdEJILFFBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRSxHQUFkO0FBQ0QsT0FGRDtBQUdEOzs7cUNBRXVCTCxRLEVBQStCO0FBQ3JELFdBQUtNLFlBQUwsQ0FBa0JOLFFBQWxCLEVBQTRCLEtBQUtILFVBQWpDO0FBQ0Q7OztxQ0FFdUJHLFEsRUFBK0I7QUFDckQsV0FBS00sWUFBTCxDQUFrQk4sUUFBbEIsRUFBNEIsS0FBS0YsVUFBakM7QUFDRDs7Ozs7O2VBR1lGLE0iLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBSZXN1bHQge1xuICBwcml2YXRlIG5vdEV4aXN0c0E6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgbm90RXhpc3RzQjogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihub3RFeGlzdHNBOiBzdHJpbmdbXSwgbm90RXhpc3RzQjogc3RyaW5nW10pIHtcbiAgICB0aGlzLm5vdEV4aXN0c0EgPSBub3RFeGlzdHNBO1xuICAgIHRoaXMubm90RXhpc3RzQiA9IG5vdEV4aXN0c0I7XG4gIH1cblxuICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubm90RXhpc3RzQS5sZW5ndGggPiAwIHx8IHRoaXMubm90RXhpc3RzQi5sZW5ndGggPiAwO1xuICB9XG5cbiAgLy8gVE9ETzogU3BsaXQgYG91dHB1dGAgdG8gdGhlIG90aGVyIGNsYXNzL2Z1bmN0aW9uLlxuICBwcml2YXRlIG91dHB1dENvbW1vbihmaWxlbmFtZTogc3RyaW5nIHwgbnVsbCwgbWVzc2FnZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgaWYgKG1lc3NhZ2VzLmxlbmd0aCA8IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZmlsZW5hbWUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVwiXG4gICAgICApO1xuICAgICAgY29uc29sZS5lcnJvcihcIkZpbGU6IFwiICsgZmlsZW5hbWUpO1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbWVzc2FnZXMuZm9yRWFjaChtc2cgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihtc2cpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIG91dHB1dE5vdEV4aXN0c0EoZmlsZW5hbWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLm91dHB1dENvbW1vbihmaWxlbmFtZSwgdGhpcy5ub3RFeGlzdHNBKTtcbiAgfVxuXG4gIHB1YmxpYyBvdXRwdXROb3RFeGlzdHNCKGZpbGVuYW1lOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5vdXRwdXRDb21tb24oZmlsZW5hbWUsIHRoaXMubm90RXhpc3RzQik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0O1xuIl19