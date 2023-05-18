import { component$ } from '@builder.io/qwik';
import { Anchor } from '~/common/constants';
import SectionHeader from '~/components/section-header';
import Card from './card';
import Star from './star-icon';
import UnipassLogo from './unipass-logo';
import KeystoneLogo from './keystone-logo';

export default component$(() => {

  return (
    <div id={Anchor.PRODUCTS} class="mb-33 w-full">
      <SectionHeader title={"Our Products"}>
        <Star width="1.375rem" height="1.375rem" class="mr-3" />
      </SectionHeader>
      <div class="flex flex-row gap-10">
        <Card
          type="purple"
          link="https://unipass.id/"
          title="UNIPASS"
          description="Smart Contract Wallet"
          content="UniPass is the ultimate resource for Dapp developers who are looking to enhance their Web3 applications for GameFi, SocialFi, and various other applications. By leveraging Account Abstraction (EIP-4337), UniPass provides the most sophisticated and all-encompassing Web3 wallet SDK available in the market today. With minimal coding, developers can seamlessly integrate users through a process that doesn't require seed phrases or gas fees, and implement social recovery at the same time. This removes prevalent user obstacles and fosters increased adoption of Web3 technologies."
        >
          <UnipassLogo q:slot="logo" />
        </Card>
        <Card
          type="blue"
          link="https://keyst.one/"
          title="Keystone"
          description="Hardware Wallet"
          content="Keystone surpasses all other hardware wallets in both user-friendliness and security. Featuring a 4-inch touchscreen, Keystone offers unparalleled ease of use, while its compatibility with top-tier wallets such as MetaMask through QR code ensures maximum convenience and flexibility. With Keystone, you can rest assured that your digital assets are always safe and easily accessible."
        >
          <KeystoneLogo q:slot="logo" />
        </Card>
      </div>
    </div>
  );
});
