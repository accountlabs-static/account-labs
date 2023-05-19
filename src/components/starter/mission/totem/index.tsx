import { component$ } from '@builder.io/qwik';
import TotemPurple from './totem-purple';
import TotemGreen from './totem-green';
import TotemBlue from './totem-blue';
import { TotemLg } from './totem-lg';

export default component$(() => {

  return (
    <div class="mx-auto relative w-596 h-596 max-lg:w-full max-lg:h-full">
      <TotemLg class="hidden max-lg:flex mx-auto" />
      <TotemGreen class="absolute opacity-0 animate-breathing max-lg:hidden" />
      <TotemBlue class="absolute opacity-0 animate-breathing-d2 max-lg:hidden" />
      <TotemPurple class="absolute opacity-0 animate-breathing-d6 max-lg:hidden" />
    </div>
  );
});
