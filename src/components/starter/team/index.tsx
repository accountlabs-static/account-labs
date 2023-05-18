import { component$ } from '@builder.io/qwik';
import { Anchor } from '~/common/constants';
import SectionHeader from '~/components/section-header';
import Team from './team-icon';
import Member from './member';
import Lixin from './avatar/lixin';
import Frank from './avatar/frank';
import Aaron from './avatar/aaron';
import John from './avatar/john';

export default component$(() => {

  return (
    <div id={Anchor.TEAM} class="mb-40 w-full">
      <SectionHeader title="Our Team">
        <Team width="1.375rem" height="1.375rem" class="mr-3" />
      </SectionHeader>
      <div class="flex flex-row justify-between flex-wrap">
        <Member name="Lixin Liu" title="CEO" twitter="?">
          <Lixin q:slot='avatar' class="p-0.5 h-fit w-fit aspect-w-1 aspect-h-1" />
        </Member>
        <Member name="Frank Lou" title="COO" twitter="?">
          <Frank q:slot='avatar' class="p-0.5 h-fit w-fit aspect-w-1 aspect-h-1" />
        </Member>
        <Member name="Aaron Chen" title="CTO" twitter="?" github='1'>
          <Aaron q:slot='avatar' class="p-0.5 w-fit h-fit aspect-w-1 aspect-h-1" />
        </Member>
        <Member name="John Zhang" title="Chief Scientist" twitter="?" github='1'>
          <John q:slot='avatar' class="p-0.5 w-fit h-fit aspect-w-1 aspect-h-1" />
        </Member>
      </div>
    </div>
  );
});
