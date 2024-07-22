import { useEffect } from "react";

export function useIntersectionObserver(imgRef) {
  useEffect(() => {
    if (imgRef.current) {
      const options = {};
      const callback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target;
            const previousSibling = entry.target.previousSibling;
            target.src = target.dataset.src;
            previousSibling.srcset = previousSibling.dataset.srcset;
            observer.unobserve(entry.target);
          }
        })
      };
    
      const observer = new IntersectionObserver(callback, options);
      observer.observe(imgRef.current);
    }
  }, [imgRef])
}