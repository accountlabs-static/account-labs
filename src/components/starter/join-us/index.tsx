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
      <div class="mb-4 bg-clip-text text-transparent bg-gradient-to-r from-title-range-start to-title-range-end select-none text-2xl font-normal">Join us</div>
      <div class="w-2/3 mx-auto mb-10 leading-6 select-none" style="color: rgba(255, 255, 255, 0.56);">We're constantly searching for exceptional individuals who align with our principles and can aid us in advancing our objectives. Simply send us an email explaining why you think you'd be an excellent addition to our team.</div>
      <div style="--animation-speed:4s" class={`${styles['glowing-box']} ${styles['glowing-box-active']} mb-10`}>
        <div class={`${styles['glowing-box-animations']}`}>
          <div class={`${styles['glowing-box-glow']}`} />
          <div class={`${styles['glowing-box-stars-masker']}`}>
            <div class={`${styles['glowing-box-stars']}`} />
          </div>
        </div>
        <div class={`${styles['glowing-box-borders-masker']}`}>
          <div class={`${styles['glowing-box-borders']}`} />
        </div>
        <button
          class="flex select-none px-6 py-4" style="border: 1px solid rgba(255,255,255,.1); border-radius: 999px"
          onClick$={() => {
            const recipient = "talents@accountlabs.com";
            const attachment = "http://example.com/file.pdf";
            window.location.href = `mailto:${recipient}?attachment=${attachment}`;
          }}
        >
          <span>talents@accountlabs.com</span>
        </button>
      </div>
    </div>
  );
});
