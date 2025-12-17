import { useEffect, useState } from 'react';

// PUBLIC_INTERFACE
export default function useScrollSpy(ids = [], options = {}) {
  /**
   * Returns the id of the currently active section in view.
   * Uses IntersectionObserver with rootMargin tuned for fixed header.
   */
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!('IntersectionObserver' in window) || elements.length === 0) {
      // Fallback: use hash or first id
      setActiveId(window.location.hash.replace('#', '') || ids[0] || '');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveId(visible[0].target.id);
        } else {
          // If none intersecting, find the one closest to top
          const topMost = entries
            .slice()
            .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0];
          if (topMost?.target?.id) setActiveId(topMost.target.id);
        }
      },
      {
        root: null,
        rootMargin: options.rootMargin || '-64px 0px -60% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(','), options.rootMargin]);

  return activeId;
}
