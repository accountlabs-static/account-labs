import { component$ } from '@builder.io/qwik';
import { Anchor } from '~/common/constants';
import Logo from '~/components/starter/logo';
import styles from './index.module.css';

export default component$(() => {
  return (
    <div id={Anchor.JOIN_US} class="relative mb-61.5 w-full rounded-3xl flex flex-col items-center" style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.1);">
      <div class={styles.bg} />
      <div class="w-41 absolute h-px" style="background: linear-gradient(90deg, rgba(81, 224, 205, 0) 0%, rgba(81, 224, 205, 0.4) 50%, rgba(81, 224, 205, 0) 100%);" />
      <Logo height="7.5rem" width="7.5rem" class="mt-20 mb-2" />
      <div class="h-0.5 w-18 mb-8" style="background: linear-gradient(90deg, rgba(90, 204, 143, 0.16) 0%, rgba(90, 204, 143, 0.8) 50%, rgba(90, 204, 143, 0.16) 100%);" />
      <div class="bg-clip-text text-transparent bg-gradient-to-r from-title-range-start to-title-range-end select-none text-2xl font-normal">Join us</div>
    </div>
  );
});
