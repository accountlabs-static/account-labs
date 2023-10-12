import { component$, Slot, useStore } from '@builder.io/qwik';
import Arrow from './arrow';
import styles from './index.module.css';

const Theme = {
  purple: {
    titleStyle: 'background: linear-gradient(90deg, #1CEBB4 0%, #5ACC8F 100%); -webkit-background-clip: text;',
    bgStyle: 'background: radial-gradient(100% 100% at 0% 0%, rgba(173, 157, 252, 0.2) 0%, rgba(180, 155, 254, 0) 100%);',
  },
  blue: {
    titleStyle: 'background: linear-gradient(90deg, #3D71FF 0.78%, #93CEF5 100%); -webkit-background-clip: text;',
    bgStyle: 'background: radial-gradient(100% 100% at 0% 0%, rgba(59, 142, 224, 0.2) 0%, rgba(59, 142, 224, 0) 100%);',
  },
}

export default component$<{
  title: string;
  description: string;
  link: string;
  type: keyof typeof Theme;
}>(({ title, description, link, type = 'purple' }) => {
  const getTheme = () => Theme[type];
  const store = useStore({
    isTracked: false,
  });

  return (
    <div
      onMouseMove$={(event) => {
        if (!store.isTracked) {
          store.isTracked = true;
          requestAnimationFrame(() => {
            const element = event.target as any;
            const rect = element.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            element.style.setProperty('--mouse-x', mouseX + 'px');
            element.style.setProperty('--mouse-y', mouseY + 'px');
            store.isTracked = false
          });
        }
      }}
      class={`flex flex-col w-1/2 pt-15 px-10 pb-10 select-none max-lg:w-full ${styles.card}`}
      style={`${getTheme().bgStyle} border-radius: 2.5rem; border: 1px solid rgba(255, 255, 255, 0.1);`}
    >
      <Slot name="logo" />
      <div class="mt-8 mb-1 leading-13.5 font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-t from-card-range-start to-card-range-end">{title}</div>
      <div class="mb-8 text-transparent font-normal text-xl tracking-wider" style={getTheme().titleStyle}>{description}</div>
      <div class="mb-8 font-normal text-base text-white/50 tracking-wider">
        <Slot name="content" />
      </div>
      <div
        class={`mt-auto cursor-pointer h-12 w-18 flex items-center justify-center rounded-2xl bg-color-white-10 transition-all duration-100 ${styles.arrow}`}
        style="border: 1px solid rgba(255, 255, 255, 0.1);"
        onClick$={() => {
          window.open(link, '_blank');
        }}><Arrow /></div>
    </div>
  );
});
