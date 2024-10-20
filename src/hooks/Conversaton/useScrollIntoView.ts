import { useEffect, useRef } from 'react';

// Custom hook
const useScrollIntoView = <
  T extends HTMLElement,
  S extends string | object | number | boolean | null | undefined,
>(
  dependency: Array<S>,
) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [...dependency]);

  return ref;
};

export default useScrollIntoView;
