import { useState, useEffect } from "react";
import { isOnScreen } from "../utils/isOnScreen";

export const useScroll = (ref, replacementRef) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // if replacementRef is on screen set state to true
      if (isOnScreen(replacementRef)) setIsScroll(true);

      //if replacementRef is true && the elementRef is NOT on screen set state to false
      if (replacementRef && !isOnScreen(ref)) setIsScroll(false);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return isScroll;
};
