/** @jsxImportSource react */

import { useEffect, useState } from 'react';
import { Anchor } from '~/common/constants';

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
};

export const useAnchor: (anchor: string) => [boolean, () => void] = (anchor) => {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    window.history.pushState({}, '', `#${anchor}`);
  };

  useEffect(() => {
    const [remove] = dispatchPushStateEvent();
    const listener = (disableScroll?: boolean) => {
      const id = `#${anchor}`;
      const nextActive = window.location.hash === id;
      setIsActive(nextActive);
      if (nextActive) {
        const dom = document.getElementById(anchor);
        if (dom && !disableScroll) {
          if (anchor === Anchor.MISSION) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
          }

          dom.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };
    listener(true);
    window.addEventListener('pushstate', () => listener());
    return () => {
      window.removeEventListener('pushstate', () => listener());
      remove();
    };
  }, []);

  return [isActive, onClick];
}
