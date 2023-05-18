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
    const [remove] = dispatchPushStateEvent();
    const listener = (disableScroll?: boolean) => {
      const id = `#${anchor}`;
      setIsActive(window.location.hash === id);
      const dom = document.querySelector(id);
      if (dom && !disableScroll) {
        dom.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    listener(true);
    window.addEventListener('pushstate', () => listener());
    return () => {
      window.removeEventListener('pushstate', () => listener());
      remove();
    };
  }, []);

  const onClick = () => {
    window.history.pushState({}, '', `#${anchor}`);
  };

  return [isActive, onClick];
}
