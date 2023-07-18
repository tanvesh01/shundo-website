import { component$, useVisibleTask$, $ } from "@builder.io/qwik";
import styles from "./HomeHeader.module.css";
import {
  Image,
  type ImageTransformerProps,
  useImageProvider,
} from "qwik-image";

export default component$(() => {
  const imageTransformer$ = $(
    ({ width, height }: ImageTransformerProps): string => {
      // Here you can set your favorite image loaders service https://res.cloudinary.com/dtbziolbj/image/upload/v1687274002/Frame_2_2x_ludpkg.png
      return `https://res.cloudinary.com/dtbziolbj/image/upload/w_${width}/v1687274002/Frame_2_2x_ludpkg.png?height=${height}&width=${width}&format=webp&fit=fill`;
    }
  );

  // Global Provider (required)
  useImageProvider({
    // You can set this prop to overwrite default values [3840, 1920, 1280, 960, 640]
    resolutions: [640],
    imageTransformer$,
  });

  useVisibleTask$(async () => {
    // A task without `track` any state effectively behaves like a `on mount` hook.
    console.log(
      "Runs once when the component mounts in the server OR client.",
      document.getElementById("splash"),
      "sdsd"
    );
    // document.getElementById("splash").addEventListener("load", function () {
    //   console.log("loaded");
    //   document.getElementById("splash")?.classList.add("animate-splash");
    // });
    setTimeout(() => {
      console.log("loaded");
      document.getElementById("splash")?.classList.add("animate-splash");
    }, 2000);
  });
  return (
    <div class="font-body text-center px-3 relative">
      <img
        id="splash"
        class="w-[600px] absolute top-0 left-0 right-0 bottom-0 mx-auto z-40 opacity-0 select-none brightness-110 blur-sm"
        src="https://res.cloudinary.com/dtbziolbj/image/upload/v1689601767/shundo_splash_qd5laq.png"
      />
      <div class="z-50 relative">
        <p class="text-2xl font-medium tracking-tighter text-gray-400">
          windows users
        </p>
        <h1
          class={`font-bold md:text-7xl tracking-tighter pb-2 text-5xl  ${styles.landingBigTitle}`}
        >
          meet your new
        </h1>
        <h1
          class={`font-bold md:text-7xl tracking-tighter pb-2 text-5xl mb-4  ${styles.landingBigTitle}`}
        >
          productivity powerhouse
        </h1>
        <div class="bg-white/60 w-fit mx-auto p-[2px] rounded-xl">
          <a
            href="https://forms.gle/h15QpBmVWhqKSSox9"
            class={`block w-fit mx-auto font-bold tracking-tighter text-xl from-[#06F62C] to-[#067D19] bg-gradient-to-b  ${styles.ctaSignUpBtn}`}
          >
            Sign up for alpha access
          </a>
        </div>
        <div class="flex justify-center mt-10">
          <Image
            layout="constrained"
            objectFit="fill"
            width={600}
            alt="Tropical paradise"
            src={
              "https://res.cloudinary.com/dtbziolbj/image/upload/v1687270795/shundo_app_l96rjf.png"
            }
          />
        </div>
      </div>
    </div>
  );
});
