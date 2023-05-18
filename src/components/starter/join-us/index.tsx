import { component$ } from '@builder.io/qwik';
import { Anchor } from '~/common/constants';

export default component$(() => {
  return (
    <div id={Anchor.JOIN_US} class="mb-61.5">
      I amthe join-us component.
    </div>
  );
});
