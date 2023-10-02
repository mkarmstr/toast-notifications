import React from 'react';

export function useEscapeKey(func) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === 'Escape') {
                func(event)
            }
          }
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [func]);
  }

  export function useKeydown(key, func) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === key) {
                func(event)
            }
          }
      window.addEventListener('keydown', handleKeyDown);
  
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }, [func, key]);
  }