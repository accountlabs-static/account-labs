import { component$ } from '@builder.io/qwik';
import Nav from '~/components/starter/nav';
import styles from './header.module.css';

export default component$(() => {

  return (
    <header class={styles.header}>
      <Nav items={[{
        anchor: 'mission',
        text: 'Mission',
      }, {
        anchor: 'products',
        text: 'Products',
      }, {
        anchor: 'team',
        text: 'Team',
      }, {
        anchor: 'join-us',
        text: 'Join Us',
      }]} />
    </header>
  );
});
