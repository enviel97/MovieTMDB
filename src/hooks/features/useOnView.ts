import { useEffect, useRef, useState } from "react";

const useOnScreens = <T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(
    () => {
      const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting);
      }, options);
      if (!!ref.current) {
        observer.observe(ref.current);
      }
      return () => {
        if (!!ref.current) {
          observer.unobserve(ref.current);
        }
      };
    },
    [ref, options]
    //
  );

  return { ref, visible };
};

export default useOnScreens;
