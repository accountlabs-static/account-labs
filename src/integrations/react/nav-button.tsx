/** @jsxImportSource react */

import React from 'react';
import { qwikify$ } from '@builder.io/qwik-react';
import { useAnchor } from '~/integrations/react/hooks/use-anchor';
import styles from './index.module.css';

export interface NavButtonProps {
  anchor: string;
  text: string;
}

const NavButton: React.FC<NavButtonProps> = ({ anchor, text }) => {
  const [isActive, onAnchorClick] = useAnchor(anchor);

  return (
    <div className={`
    relative select-none cursor-pointer px-6 py-4 border border-transparent hover:border-color-white-10 hover:bg-color-white-10 transition-all duration-300 rounded-xl 
    ${isActive ? `${styles.active} bg-color-white-10 border-color-white-10` : ''}
`} onClick={onAnchorClick}>{text}</div>
  );
};

export const QNavButton = qwikify$(NavButton, { eagerness: 'hover' });