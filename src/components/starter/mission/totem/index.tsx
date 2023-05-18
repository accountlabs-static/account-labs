import { component$ } from '@builder.io/qwik';
import TotemPurple from './totem-purple';
import TotemGreen from './totem-green';
import TotemBlue from './totem-blue';

export default component$(() => {

  return (
    <div class="mx-auto relative w-60 h-60 mb-28.5">
      <TotemGreen class="absolute opacity-0 animate-breathing" />
      <TotemBlue class="absolute opacity-0 animate-breathing" />
      <TotemPurple class="absolute opacity-0 animate-breathing" />
    </div>
  );
});
