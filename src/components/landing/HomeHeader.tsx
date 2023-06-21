import { component$, $ } from "@builder.io/qwik";
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
  return (
    <div class="font-body text-center">
      <p class="text-2xl font-medium tracking-tighter text-gray-400">
        windows users
      </p>
      <h1 class={styles.landingBigTitle}>meet your new</h1>
      <h1 class={styles.landingBigTitle}>productivity powerhouse</h1>
      {/* <img src="https://res.cloudinary.com/dtbziolbj/image/upload/v1687270795/shundo_app_l96rjf.png" /> */}
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
  );
});
