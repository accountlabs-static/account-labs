import { component$ } from '@builder.io/qwik';
import { Anchor } from '~/common/constants';

export default component$(() => {

  return (
    <div id={Anchor.PRODUCTS} class="mb-33">
      I am the products component.
    </div>
  );
});
