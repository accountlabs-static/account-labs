import { component$ } from '@builder.io/qwik';
import { useServerYearLoader } from '~/routes/layout';

export default component$(() => {
  const year = useServerYearLoader();

  return (
    <footer>
      <div class="m-auto w-fit font-titillium" style="color: rgba(255, 255, 255, 0.5)">
        © {year} Account Labs
      </div>
    </footer>
  );
});
