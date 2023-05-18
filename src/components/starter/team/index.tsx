import { component$ } from '@builder.io/qwik';
import { Anchor } from '~/common/constants';

export default component$(() => {

  return (
    <div id={Anchor.TEAM} class="mb-40">
      I am the team component.
    </div>
  );
});
