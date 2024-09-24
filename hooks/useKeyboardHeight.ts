import { debounce } from '@/lib/util';
import { useState, useEffect } from 'react';

export const useKeyboardResize = () => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const [viewportHeight, setViewportHeight] = useState<number | undefined>(undefined);

  function scrollToTop() {
    window.scroll({
      top: -1,
    });
  }

  const debouncedScrollToTop = debounce(scrollToTop, 100);

  useEffect(() => {
    const handleResize = () => {
      // Check for Visual Viewport API support
      if (window.visualViewport) {
        setViewportHeight(window.visualViewport.height);
      } else {
        setViewportHeight(window.innerHeight); // Fallback
      }

      if (keyboardOpen) {
        debouncedScrollToTop();
      }
    };

    const debouncedResize = debounce(handleResize, 100);

    window.visualViewport?.addEventListener('resize', debouncedResize);
    window.addEventListener('resize', debouncedResize);

    // Initial call to set the right height
    handleResize();

    return () => {
      window.visualViewport?.removeEventListener('resize', debouncedResize);
      window.removeEventListener('resize', debouncedResize);
    };
  }, [keyboardOpen, debouncedScrollToTop]);

  useEffect(() => {
    const handleFocus = () => setKeyboardOpen(true);
    const handleBlur = () => setKeyboardOpen(false);

    window.addEventListener('focusin', handleFocus);
    window.addEventListener('focusout', handleBlur);

    return () => {
      window.removeEventListener('focusin', handleFocus);
      window.removeEventListener('focusout', handleBlur);
    };
  }, []);

  useEffect(() => {
    if (keyboardOpen) {
      debouncedScrollToTop();
    }
  }, [keyboardOpen, debouncedScrollToTop]);

  return viewportHeight;
};
