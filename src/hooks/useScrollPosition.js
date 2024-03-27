import { useState, useEffect } from "react";
import { throttle } from "underscore";

export const useScrollPosition = () => {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    // 注销监听
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollX, scrollY };
};
