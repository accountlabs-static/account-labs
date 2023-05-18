import { component$ } from '@builder.io/qwik';
import { Anchor } from '~/common/constants';
import SectionHeader from '~/components/section-header';
import Team from './team-icon';

export default component$(() => {

  return (
    <div id={Anchor.TEAM} class="mb-40 w-full">
      <SectionHeader title={"Our Products"}>
        <Team width="1.375rem" height="1.375rem" class="mr-3" />
      </SectionHeader>
    </div>
  );
});
