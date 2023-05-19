import { component$ } from '@builder.io/qwik';
import styles from './rectangle.module.css';

export default component$(() => {
  return (
    <div class={`${styles.rectangle} h-16 w-0.5 mb-10 mx-auto`} />
  );
});
