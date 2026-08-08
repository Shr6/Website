import { useEffect, useRef, useState } from "react";

export function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

export default function Section({ children, className = "" }) {
  const [ref, inView] = useReveal();
  return (
    <section ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`}>
      {children}
    </section>
  );
}
