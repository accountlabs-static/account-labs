import type { RequestEvent } from '@builder.io/qwik-city';

export const onGet = async ({ redirect }: RequestEvent) => {

  throw redirect(302, 'https://accountlabs.notion.site/Account-Labs-c99f9056518a444aa6a218c0c9a6b60b?pvs=4');
};