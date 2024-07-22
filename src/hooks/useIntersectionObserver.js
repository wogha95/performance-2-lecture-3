import { useEffect } from "react";

export function useIntersectionObserver(imgRef) {
  useEffect(() => {
    if (imgRef.current) {
      const options = {};
      const callback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        })
      };
    
      const observer = new IntersectionObserver(callback, options);
      observer.observe(imgRef.current);
    }
  }, [imgRef])
}