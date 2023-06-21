import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class="px-8  bg-bgFooterColor mt-16">
      <div class="flex py-10 justify-between">
        <p class={` text-xl leading-6  ${styles.offbitStyles}`}>
          <span style="color:#BDBDBD;"> Built while </span> <br />{" "}
          <span style="color:#BDBDBD;">overthinking by </span>
          <br /> Tanvesh <span style="color:#BDBDBD;"> and </span>Kush
        </p>
        <p
          class={`text-xl leading-6  ${styles.offbitStyles} `}
          style="color:#BDBDBD;"
        >
          while standing on top of <br /> incredible projects like Tauri <br />{" "}
          and windows-rs{" "}
        </p>
      </div>
    </footer>
  );
});
