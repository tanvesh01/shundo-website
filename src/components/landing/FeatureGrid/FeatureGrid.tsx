import { component$ } from "@builder.io/qwik";
import styles from "./FeatureGrid.module.css";
export default component$(() => {
  return (
    <div>
      <h2
        class={`${styles.bigTitle} text-7xl tracking-tighter font-bold text-center pb-2 mb-6 mt-32`}
      >
        get more done. now.
      </h2>
      <div class="mx-auto rounded-lg grid grid-cols-1 md:grid-cols-10 gap-4 max-w-screen-xl mt-10 px-4">
        <div class={`col-span-1 md:col-span-6 ${styles.green_gradient}`}>
          <img
            class="mx-auto"
            alt="file search feature of shundo"
            width={500}
            height={174}
            src="https://res.cloudinary.com/dtbziolbj/image/upload/v1696425085/filesearch_2x_ifydaj.png"
          />
          <div class="pb-9 mt-6">
            <h2 class="font-medium tracking-tighter text-2xl text-center mb-3">
              File Search
            </h2>
            <p class="text-center text-gray-300 max-w-md mx-auto leading-snug px-5">
              Search through your file system in the quickest way possible, its
              faster than the start menu search and gives way better results
            </p>
          </div>
        </div>
        <div class={`col-span-1 md:col-span-4 ${styles.green_gradient}`}>
          <div class="flex justify-end">
            <img
              class="text-right"
              alt="natural language calculator feature of shundo"
              width={447}
              height={174}
              src="https://res.cloudinary.com/dtbziolbj/image/upload/v1696425823/naturallanguagecalculator_2x_zfvfop.png"
            />
          </div>
          <h2 class="font-medium tracking-tighter text-2xl text-center mt-6 mb-3">
            Natural Language Calculator
          </h2>
          <p class="text-center text-gray-300 max-w-md mx-auto pb-9 leading-snug px-5">
            Use natural language to do conversions! waaay easier than opening up
            a new tab everytime on your browser and googling.
          </p>
        </div>
        <div
          class={`col-span-1 md:col-span-4 pt-6  ${styles.green_gradient} flex flex-col justify-between`}
        >
          <div class="mb-5">
            <h2 class="font-medium tracking-tighter text-2xl text-center mb-3">
              VsCode Projects
            </h2>
            <p class="text-center text-gray-300 max-w-md mx-auto leading-snug px-5">
              Get all your recently opened vscode projects/folders right from
              your keyboard. Just search it up and code away!
            </p>
          </div>
          <div class="flex justify-end">
            <img
              alt="natural language calculator feature of shundo"
              width={447}
              height={174}
              src="https://res.cloudinary.com/dtbziolbj/image/upload/v1696429242/vscodeprojects_2x_u8zqeb.png"
            />
          </div>
        </div>
        <div class={`p-6 col-span-1 md:col-span-6 ${styles.green_gradient}`}>
          <h2 class="font-medium tracking-tighter text-2xl text-center mb-2">
            Clipboard
          </h2>
          <p class="text-center text-gray-300 max-w-md mx-auto mb-6 leading-snug">
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
    </div>
  );
});
