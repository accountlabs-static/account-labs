import Logo from '~/components/starter/logo';
import { QNavButton, type NavButtonProps } from '~/integrations/react/nav-button';
import { component$ } from '@builder.io/qwik';

interface NavProps {
  items: NavButtonProps[];
}

const genUniqueKey = () => Math.random().toString(36).substr(2, 9)

export default component$<NavProps>(({ items }) => {

  return (
    <nav class="m-auto mt-10 w-fit h-18 flex items-center py-8 px-7 rounded-3xl border border-color-white-10">
      <div class="inline-flex mr-15">
        <div class="mr-2">
          <Logo />
        </div>
        <div class="font-semibold leading-10 text-center select-none" style="color: rgba(255, 255, 255, 0.72);">Account Labs</div>
      </div>
      <div class="grid grid-flow-col gap-2">{items?.map((item) => <QNavButton client:only
        key={`${item.anchor}-${genUniqueKey()}`} {...item} />)}</div>
    </nav>
  );
});
