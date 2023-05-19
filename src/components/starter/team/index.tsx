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
      <div class="grid grid-cols-4 max-2xl:grid-cols-2 max-md:grid-cols-1 gap-10 place-items-center">
      {/* <div class="flex flex-row justify-around flex-wrap gap-10 max-xl:gap-20 max-lg:justify-center"> */}
        <Member name="Lixin Liu" title="CEO" twitter="https://twitter.com/BitcoinLixin">
          <Avatar q:slot='avatar' src="/avatar/lixin.png" />
        </Member>
        <Member name="Frank Lou" title="COO" twitter="https://twitter.com/frank_lay2">
          <Avatar q:slot='avatar' src="/avatar/frank.png" />
        </Member>
        <Member name="Aaron Chen" title="CTO" twitter="https://twitter.com/aaron1sme" github='https://github.com/aaronisme'>
          <Avatar q:slot='avatar' src="/avatar/aaron.png" />
        </Member>
        <Member name="John Zhang" title="Chief Scientist" github='https://github.com/johnz1019'>
          <Avatar q:slot='avatar' src="/avatar/john.png" />
        </Member>
      </div>
    </div>
  );
});

const Avatar = component$<{
  src: string;
}>(({ src }) => {
  return (
    <img
      class='p-0.5 h-fit aspect-w-1 aspect-h-1 max-lg:max-w-[19rem]'
      style='border-radius: 2rem; max-width: 18rem;'
      src={src}
      alt='avatar'
    />
  );
})


