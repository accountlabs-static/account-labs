import { component$, Slot } from '@builder.io/qwik';
import styles from './index.module.css';

export default component$<{
  title: string;
}>(({ title }) => {
  return (
    <div
      class="flex flex-row items-center h-19.5 mb-20"
      style="border-bottom: 1px solid rgba(255, 255, 255, 0.16);"
    >
      <div
        class={`${styles.title} relative w-fit h-full flex flex-row items-center bg-clip-text text-transparent bg-gradient-to-r from-title-range-start to-title-range-end select-none cursor-pointer text-xl font-semibold`}
      >
        <Slot /> {title}
      </div>
    </div>
  );
});
