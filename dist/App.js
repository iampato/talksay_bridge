"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useMethodHandlerHook = useMethodHandlerHook;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useMethodHandlerHook() {
  function handleMethod(methodName, args) {
    if (methodName && args) {
      try {
        let results = [methodName, args];
        window.flutter_inappwebview.callHandler('methodHandler', ...results);
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  }

  return {
    handleMethod
  };
}

; // const Bla = () => {
//   const { handleMethod } = useMethodHandlerHook();
//   return (
//     <>
//       <button onClick={() => handleMethod('test', { "name": "hey" })}>TEST</button>
//     </>
//   )
// };