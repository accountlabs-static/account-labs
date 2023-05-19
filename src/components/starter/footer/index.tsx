import { component$ } from '@builder.io/qwik';
import { useServerYearLoader } from '~/routes/layout';

export default component$(() => {
  const year = useServerYearLoader();

  return (
    <footer class="mb-8">
      <div class="m-auto w-fit font-titillium pb-8" style="color: rgba(255, 255, 255, 0.5)">
        © {year} Account Labs
      </div>
    </footer>
  );
});
