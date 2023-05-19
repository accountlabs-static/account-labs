import { component$ } from '@builder.io/qwik';
import { Anchor } from '~/common/constants';
import SectionHeader from '~/components/section-header';
import Team from './team-icon';
import Member from './member';

export default component$(() => {
  return (
    <div id={Anchor.TEAM} class="mb-40 w-full">
      <SectionHeader title="Our Team">
        <Team width="1.375rem" height="1.375rem" class="mr-3" />
      </SectionHeader>
      <div class="flex flex-row justify-between flex-wrap gap-10 max-lg:justify-center">
        <Member name="Lixin Liu" title="CEO" twitter="?">
          <img class="p-0.5 h-fit aspect-w-1 aspect-h-1" style="border-radius: 2rem; max-width: 18rem;" q:slot='avatar' src="/public/avatar/lixin.png" alt='lixin' />
        </Member>
        <Member name="Frank Lou" title="COO" twitter="?">
          <img class="p-0.5 h-fit aspect-w-1 aspect-h-1" style="border-radius: 2rem; max-width: 18rem;" q:slot='avatar' src="/public/avatar/frank.png" alt='frank' />
        </Member>
        <Member name="Aaron Chen" title="CTO" twitter="?" github='1'>
          <img class="p-0.5 h-fit aspect-w-1 aspect-h-1" style="border-radius: 2rem; max-width: 18rem;" q:slot='avatar' src="/public/avatar/aaron.png" alt='aaron' />
        </Member>
        <Member name="John Zhang" title="Chief Scientist" twitter="?" github='1'>
          <img class="p-0.5 h-fit aspect-w-1 aspect-h-1" style="border-radius: 2rem; max-width: 18rem;" q:slot='avatar' src="/public/avatar/john.png" alt='john' />
        </Member>
      </div>
    </div>
  );
});
