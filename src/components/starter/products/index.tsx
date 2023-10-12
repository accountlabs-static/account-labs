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
      <div class="flex flex-row gap-10 max-lg:flex-wrap">
        <Card
          type="purple"
          link="https://unipass.xyz"
          title="UniPass"
          description="Smart Contract Wallet"
        >
          <div q:slot="content">
            UniPass is not just a wallet. It is a comprehensive self-custody stablecoin payment solution tailored for Freelancers, Remote Workers, Gig Workers and Business Owners. It enables users to manage, transfer, purchase, and store stablecoins with utmost confidence and efficiency in the UniPass wallet. Safety is also paramount at UniPass. Our contracts have been meticulously audited by multiple top-notch security firms, such as <a target="_blank" href="https://github.com/UniPassID/Unipass-Wallet-Contract/blob/main/audits/blocksec_unipass_wallet_signed_v2.1.pdf">BlockSec</a>, <a target="_blank" href="https://github.com/UniPassID/UniPass-Snap/blob/main/audits/2023-07-SlowMist%20Audit%20Report.pdf">Slowmist</a>, <a target="_blank" href="https://github.com/Secure3Audit/Secure3Academy/blob/main/audit_reports/UniPass/UniPassVerifierContract_final_Secure3_Audit_Report.pdf">Secure3</a> & <a target="_blank" href="https://github.com/UniPassID/Unipass-Wallet-Contract/blob/main/audits/salus_unipass_audit_report_2023-01-19.pdf">Salus Security</a>. Users can be confident in the security and reliability of our app, knowing that their crypto assets are safeguarded by cutting-edge security standards.
          </div>
          <UnipassLogo q:slot="logo" />
        </Card>
        <Card
          type="blue"
          link="https://keyst.one/"
          title="Keystone"
          description="Hardware Wallet"
        >
          <div q:slot="content">
            Keystone surpasses all other hardware wallets in both user-friendliness and security. Featuring a 4-inch touchscreen, Keystone offers unparalleled ease of use, while its compatibility with top-tier wallets such as MetaMask through QR code ensures maximum convenience and flexibility. With Keystone, you can rest assured that your digital assets are always safe and easily accessible.
          </div>
          <KeystoneLogo q:slot="logo" />
        </Card>
      </div>
    </div>
  );
});
