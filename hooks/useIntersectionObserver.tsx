import { RefObject, useEffect, useState } from 'react';

export default function useIntersectionObserver(ref: RefObject<Element>, options: IntersectionObserverInit) {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), options);

    if (ref.current) {
        observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isIntersecting;
}