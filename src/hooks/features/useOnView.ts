import { useEffect, useRef, useState } from "react";

const useOnScreens = <T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) => {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState<boolean>(false);
  useEffect(
    () => {
      const element = ref.current;
      const observer = new IntersectionObserver(([entry]) => {
        setVisible(entry.isIntersecting);
      }, options);
      if (!!element) {
        observer.observe(element);
      }
      return () => {
        if (!!element) {
          observer.unobserve(element);
        }
      };
    },
    [ref, options]
    //
  );

  return { ref, visible };
};

export default useOnScreens;
