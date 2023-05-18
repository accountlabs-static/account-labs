import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import Mission from '~/components/starter/mission';
import Products from '~/components/starter/products';
import Team from '~/components/starter/team';
import JoinUs from '~/components/starter/join-us';

export default component$(() => {
  return (
    <>
      <Mission />
      <Products />
      <Team />
      <JoinUs />
    </>
  );
});

export const head: DocumentHead = {
  title: 'Account Labs',
  meta: [
    {
      name: 'description',
      content: 'Account Labs official website',
    },
  ],
};
