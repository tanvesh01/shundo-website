import { component$, Slot } from "@builder.io/qwik";

export const MDLayout = component$(() => {
  return (
    <div class="px-20">
      <Slot />
    </div>
  );
});
