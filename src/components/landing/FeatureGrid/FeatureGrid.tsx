import { component$ } from "@builder.io/qwik";
import styles from "./FeatureGrid.module.css";
export default component$(() => {
  return (
    <div class="mx-auto rounded-lg grid grid-cols-8 gap-4 max-w-screen-xl mt-10">
      <div class={`p-4 col-span-5 ${styles.green_gradient}`}>
        <h2 class="font-bold tracking-tighter text-2xl text-center">
          File Search
        </h2>
        <p class="text-center text-gray-300 text-lg max-w-md mx-auto">
          Search through your file system in the quickest way possible, its
          faster than the start menu search and gives way better results
        </p>
      </div>
      <div class="p-4 col-span-3">
        <h2 class="font-bold tracking-tighter text-2xl text-center">
          Natural Language Calculator
        </h2>
        <p class="text-center text-gray-300 text-lg max-w-md mx-auto">
          Search through your file system in the quickest way possible, its
          faster than the start menu search and gives way better results
        </p>
      </div>
      <div class="p-4 col-span-3">
        <h2 class="font-bold tracking-tighter text-2xl text-center">
          VsCode Projects
        </h2>
        <p class="text-center text-gray-300 text-lg max-w-md mx-auto">
          Search through your file system in the quickest way possible, its
          faster than the start menu search and gives way better results
        </p>
      </div>
      <div class={`p-6 col-span-5 ${styles.green_gradient}`}>
        <h2 class="font-bold tracking-tighter text-3xl text-center mb-2 ">
          Clipboard
        </h2>
        <p class="text-center text-gray-300 text-lg max-w-md mx-auto mb-6 leading-snug">
          Search through your file system in the quickest way possible, its
          faster than the start menu search and gives way better results
        </p>
        <img
          class="mx-auto"
          alt="clipboard feature of shundo"
          width={500}
          height={174}
          src="https://res.cloudinary.com/dtbziolbj/image/upload/v1696301829/clipboard_2x_z9ynwg.png"
        />
      </div>
    </div>
  );
});
