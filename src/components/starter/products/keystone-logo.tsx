import type { QwikIntrinsicElements } from '@builder.io/qwik';

export default (props: QwikIntrinsicElements['svg'], key: string) => {
  return <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} key={key}>
    <path d="M3.70599 2.27637H20.8589L9.42364 26.5764H0.847168L3.70599 2.27637Z" fill="white" fill-opacity="0.96" />
    <path d="M32.294 33.7236L15.1411 33.7236L26.5764 9.42364L35.1528 9.42364L32.294 33.7236Z" fill="#3D71FF" />
  </svg>
}
