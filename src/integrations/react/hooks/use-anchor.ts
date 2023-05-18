/** @jsxImportSource react */

import { useEffect, useState } from 'react';

export interface NavButtonProps {
  anchor: string;
  text: string;
}

const dispatchPushStateEvent = function () {
  const originalPushState = history.pushState;
  window.history.pushState = (...rest: History['pushState']['arguments']) => {
    const result = originalPushState.apply(window.history, rest);
    const event = new Event('pushstate');
    window.dispatchEvent(event);
    return result;
  };

  return [() => window.history.pushState = originalPushState];
}

export const useAnchor: (anchor: string) => [boolean, () => void] = (anchor) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const [unregister] = dispatchPushStateEvent();
    const listener = () => {
      setIsActive(window.location.hash === `#${anchor}`);
    };
    listener();
    window.addEventListener('pushstate', listener);
    return () => {
      window.removeEventListener('pushstate', listener);
      unregister();
    };
  }, []);

  const onClick = () => {
    window.history.pushState({}, '', `#${anchor}`);
  };

  return [isActive, onClick];
}
