import { useState, useEffect } from 'react';

function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(
    typeof window === 'undefined' ? undefined : window.visualViewport?.height
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.visualViewport?.height);
    };

    window.visualViewport?.addEventListener('resize', handleResize);

    // Initial setting of height
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.visualViewport?.removeEventListener('resize', handleResize);
  }, []);

  return windowHeight;
}

export default useWindowHeight;
