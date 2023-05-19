import { component$ } from '@builder.io/qwik';
import { Anchor } from '~/common/constants';
import Rectangle from './rectangle';
import Totem from './totem';

export default component$(() => {
  return (
    <div id={Anchor.MISSION} class="mb-33 max-lg:w-min-full">
      <Totem />
      <Rectangle />
      <div class="bg-clip-text text-transparent bg-gradient-to-r from-title-range-start to-title-range-end select-none cursor-pointer text-center text-lg font-semibold mb-4">Our Mission</div>
      <div class="bg-clip-text text-transparent bg-gradient-to-b from-subtitle-range-start to-subtitle-range-end select-none cursor-pointer text-center text-4xl font-normal mb-6">
        Solving the Web3 Trifecta Dilemma
      </div>
      <div class="cursor-pointer text-center text-lg font-normal leading-7.5 whitespace-pre-wrap max-w-prose text-white/50 tracking-wider">
        Ushering billions of users into the realm of Web3 by empowering individuals to effortlessly manage their decentralized accounts
      </div>
    </div>
  );
});
