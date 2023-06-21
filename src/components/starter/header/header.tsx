import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <header class="p-4 pl-8 fixed w-full">
        <div class="flex items-center gap-2">
          <img src="/Shundo.svg" width={40} height={40} />
          <p class="font-bold tracking-tighter font-body text-xl">Shundo</p>
        </div>
      </header>
      <div class="pb-32" />
    </>
  );
});
