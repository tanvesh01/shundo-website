import { component$ } from "@builder.io/qwik";
import classes from "./header.module.css";
export default component$(() => {
  return (
    <>
      <nav class={`${classes.navContainer} p-4 py-3 fixed w-full`}>
        <div class="flex items-center gap-2 justify-center">
          <img src="/favicon.svg" width={40} height={40} />
          <p class="font-bold tracking-tighter font-body text-xl">Shundo</p>
        </div>
      </nav>
      <div class="pb-24" />
    </>
  );
});
