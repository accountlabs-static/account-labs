import type { QwikIntrinsicElements } from '@builder.io/qwik';

export default (props: QwikIntrinsicElements['svg'], key: string) => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} key={key}>
    <path d="M4.36453 12C8.0101 10.8863 10.8863 8.0101 12 4.36453C13.1137 8.0101 15.9899 10.8863 19.6355 12C15.9899 13.1137 13.1137 15.9899 12 19.6355C10.8863 15.9899 8.0101 13.1137 4.36453 12Z" stroke="#5ACC8F" stroke-width="3" />
  </svg>

}
