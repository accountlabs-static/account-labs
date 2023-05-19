import { component$, Slot } from '@builder.io/qwik';
import Twitter from './social/twitter';
import styles from './member.module.css';
import Github from './social/github';

type Link = string;

export default component$<{
  name: string;
  title: string;
  twitter?: Link;
  github?: Link;
}>(({ name, title, twitter, github }) => {

  return (
    <div class="mt-5 w-fit max-md:w-full" style="border: 1px solid rgba(255, 255, 255, 0.16); backdrop-filter: blur(20px); border-radius: 2rem;">
      <Slot name="avatar" />
      <div class="mx-10 mb-3 mt-6 text-2xl">{name}</div>
      <div class="mx-10 mb-10 bg-clip-text text-transparent bg-gradient-to-r from-title-range-start to-title-range-end font-semibold text-lg">{title}</div>
      <div class="mx-10 mb-10 flex flex-row gap-4">
        {twitter && <div
          class={`w-16 h-12 cursor-pointer flex items-center justify-center rounded-2xl bg-color-white-10 transition-all duration-100 ${styles.social}`}
          style="border: 1px solid rgba(255, 255, 255, 0); background: radial-gradient(50% 50% at 50% 100%, rgba(75, 154, 234, 0.2) 0%, rgba(75, 154, 234, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.1) 100%);"
          onClick$={() => {
            window.open(twitter, '_blank');
          }}>
          <Twitter />
        </div>}
        {github && <div
          class={`w-16 h-12 cursor-pointer flex items-center justify-center rounded-2xl bg-color-white-10 transition-all duration-100 ${styles.social}`}
          style="border: 1px solid rgba(255, 255, 255, 0); background: radial-gradient(50% 50% at 50% 100%, rgba(75, 154, 234, 0.2) 0%, rgba(75, 154, 234, 0) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.1) 100%);"
          onClick$={() => {
            window.open(github, '_blank');
          }}>
          <Github />
        </div>}
      </div>
    </div>
  );
});
