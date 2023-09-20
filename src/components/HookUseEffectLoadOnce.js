import React, { useEffect, useState } from 'react';

function HookUseEffectLoadOnce() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // This effect runs once when the component initially loads
    console.log('Component has loaded');
    setLoaded(true);

    // Cleanup function (optional)
    return () => {
      console.log('Component is unmounting');
    };
  }, []); // An empty dependency array means it runs once on mount

  return (
    <div>
      <p>Component has loaded: {loaded ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default HookUseEffectLoadOnce;
