import { useEffect } from "react";

const FuncScrollToUp = () => {
  return useEffect(() => {
    window.scroll("scroll", function () {
      window.scroll(0, 0);
    });
  }, []);
};

export default FuncScrollToUp;
