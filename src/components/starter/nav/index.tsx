import Logo from '~/components/starter/logo';
import { QNavButton, type NavButtonProps } from '~/integrations/react/nav-button';
import { component$ } from '@builder.io/qwik';

interface NavProps {
  items: NavButtonProps[];
}

const genUniqueKey = () => Math.random().toString(36).substr(2, 9)

export default component$<NavProps>(({ items }) => {

  return (
    <nav
      style="backdrop-filter: blur(12px);"
      class="m-auto mt-10 w-fit h-18 flex items-center py-8 px-7 rounded-3xl border border-color-white-10 max-lg:border-0 max-lg:mt-0 max-lg:mx-auto max-lg:mb-40 bg-opacity-10 max-lg:bg-transparent"
    >
      <div class="inline-flex mr-15 max-lg:m-0">
        <div class="mr-2 relative">
          <Logo />
          <div class="absolute h-0.5 w-full" style="background: linear-gradient(90deg, rgba(90, 204, 143, 0.16) 0%, rgba(90, 204, 143, 0.8) 50%, rgba(90, 204, 143, 0.16) 100%); filter: blur(2px); bottom: -0.5rem" />
        </div>
        <div class="font-semibold leading-10 text-center select-none my-auto text-xl" style="color: rgba(255, 255, 255, 0.72);">Account Labs</div>
      </div>
      <div class="max-lg:hidden grid grid-flow-col gap-2">{items?.map((item) => <QNavButton client:visible

        {...item} key={`${item.anchor}-${genUniqueKey()}`} />)}</div>
    </nav>
  );
});
