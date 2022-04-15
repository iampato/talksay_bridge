import React, { useEffect, useState } from 'react';

export function useMethodHandlerHook() {
  function handleMethod(methodName, args) {
    if (methodName && args) {
      try {
        let results = [
          methodName, args
        ];
        window.flutter_inappwebview.callHandler('methodHandler', ...results);
      } catch (e) {
        console.log("Error: ", e);
      }
    }
  }
  return { handleMethod };
};

// const Bla = () => {
//   const { handleMethod } = useMethodHandlerHook();

//   return (
//     <>
//       <button onClick={() => handleMethod('test', { "name": "hey" })}>TEST</button>
//     </>
//   )
// };

