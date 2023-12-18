import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      const handleCallback = function (e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      };
      document.addEventListener("keydown", handleCallback);
      return function () {
        document.removeEventListener("keydown", handleCallback);
      };
    },
    [action, key]
  );
}
