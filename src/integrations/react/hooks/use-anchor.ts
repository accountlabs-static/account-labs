/** @jsxImportSource react */

import { useEffect, useState } from 'react';
import { Anchor } from '~/common/constants';

export interface NavButtonProps {
  anchor: string;
  text: string;
}

const dispatchReplaceStateEvent = function () {
  const originalReplaceState = history.replaceState;
  window.history.replaceState = (...rest: History['replaceState']['arguments']) => {
    const result = originalReplaceState.apply(window.history, rest);
    const event = new Event('replacestate');
    window.dispatchEvent(event);
    return result;
  };

  return [() => window.history.replaceState = originalReplaceState];
};

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

const throttleAndDebounce = (fn: () => void, delay: number): () => void => {
  let timeout: any
  let called = false

  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }

    if (!called) {
      fn()
      called = true
      setTimeout(() => {
        called = false
      }, delay)
    } else {
      timeout = setTimeout(fn, delay)
    }
  }
}


export const useAnchor: (anchor: string) => [boolean, () => void] = (anchor) => {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    window.history.pushState({}, '', `#/${anchor}`);
  };

  useEffect(() => {
    const [removePushStateEvent] = dispatchPushStateEvent();
    const [removeReplaceStateEvent] = dispatchReplaceStateEvent();
    const listener = (disableScroll?: boolean) => {
      const id = `#/${anchor}`;
      const nextActive = window.location.hash === id || window.location.hash === '' && anchor === Anchor.MISSION;
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
    window.addEventListener('replacestate', () => listener(true));

    window.addEventListener('scroll', throttleAndDebounce(() => {
      const dom = document.getElementById(anchor);
      const isInViewport = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        const viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
        return rect.bottom > 0 && rect.right > 0 &&
          rect.top < viewHeight &&
          rect.left < viewWidth;
      };
      if (dom && isInViewport(dom)) {
        window.history.replaceState(null, document.title, `#/${anchor}` ?? '');
      }
    }, 300));
    return () => {
      window.removeEventListener('pushstate', () => listener());
      window.removeEventListener('replacestate', () => listener(true));
      removePushStateEvent();
      removeReplaceStateEvent();
    };
  }, []);

  return [isActive, onClick];
}
