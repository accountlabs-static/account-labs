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
        <Member name="Lixin Liu" title="CEO" twitter="https://twitter.com/BitcoinLixin">
          <img class="p-0.5 h-fit aspect-w-1 aspect-h-1" style="border-radius: 2rem; max-width: 18rem;" q:slot='avatar' src="/avatar/lixin.png" alt='lixin' />
        </Member>
        <Member name="Frank Lou" title="COO" twitter="https://twitter.com/frank_lay2">
          <img class="p-0.5 h-fit aspect-w-1 aspect-h-1" style="border-radius: 2rem; max-width: 18rem;" q:slot='avatar' src="/avatar/frank.png" alt='frank' />
        </Member>
        <Member name="Aaron Chen" title="CTO" twitter="https://twitter.com/aaron1sme" github='https://github.com/aaronisme'>
          <img class="p-0.5 h-fit aspect-w-1 aspect-h-1" style="border-radius: 2rem; max-width: 18rem;" q:slot='avatar' src="/avatar/aaron.png" alt='aaron' />
        </Member>
        <Member name="John Zhang" title="Chief Scientist" github='https://github.com/johnz1019'>
          <img class="p-0.5 h-fit aspect-w-1 aspect-h-1" style="border-radius: 2rem; max-width: 18rem;" q:slot='avatar' src="/avatar/john.png" alt='john' />
        </Member>
      </div>
    </div>
  );
});
