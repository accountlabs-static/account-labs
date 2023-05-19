import { component$ } from '@builder.io/qwik';
import Nav from '~/components/starter/nav';
import { Anchor } from '~/common/constants';
import styles from './header.module.css';

export default component$(() => {

  return (
    <header class={`${styles.header} sticky top-0 z-10`} style="backdrop-filter: blur(12px);">
      {/* <header class={`${styles.header} z-10`}> */}
      <Nav items={[{
        anchor: Anchor.MISSION,
        text: 'Mission',
      }, {
        anchor: Anchor.PRODUCTS,
        text: 'Products',
      }, {
        anchor: Anchor.TEAM,
        text: 'Team',
      }, {
        anchor: Anchor.JOIN_US,
        text: 'Join Us',
      }]} />
    </header>
  );
});
