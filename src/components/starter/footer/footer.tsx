import { component$ } from "@builder.io/qwik";
import styles from "./footer.module.css";

export default component$(() => {
  return (
    <footer class="px-8  bg-bgFooterColor mt-16">
      <div class="flex py-10 justify-between flex-col md:flex-row gap-4">
        <p class={`text-base md:text-xl leading-5  ${styles.offbitStyles}`}>
          <span style="color:#BDBDBD;"> Built while </span> <br />{" "}
          <span style="color:#BDBDBD;">overthinking by </span>
          <br />
          <a
            href="https://twitter.com/Sarve___tanvesh"
            target="_blank"
            class="text-white hover:underline"
          >
            Tanvesh
          </a>
          <span style="color:#BDBDBD;"> and </span>{" "}
          <a
            href="https://twitter.com/KushDaga"
            target="_blank"
            class="text-white hover:underline"
          >
            Kush
          </a>
        </p>
        <p
          class={`text-base md:text-xl leading-5  ${styles.offbitStyles} `}
          style="color:#BDBDBD;"
        >
          while standing on top of <br /> incredible projects like{" "}
          <a
            href="https://tauri.app/"
            target="_blank"
            class="text-white hover:underline"
          >
            Tauri
          </a>
          <br /> and{" "}
          <a
            href="https://github.com/microsoft/windows-rs"
            target="_blank"
            class="text-white hover:underline"
          >
            windows-rs
          </a>
        </p>
      </div>
    </footer>
  );
});
