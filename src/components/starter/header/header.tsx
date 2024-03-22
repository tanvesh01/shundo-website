import { component$ } from "@builder.io/qwik";
import classes from "./header.module.css";
export default component$(() => {
  return (
    <>
      <nav class={`${classes.navContainer} p-4 px-8 py-3 fixed w-full`}>
        <div class="flex items-center gap-2 justify-between">
          <div class="flex gap-2 items-center">
            <img src="/favicon.svg" width={40} height={40} />
            <p class="font-bold tracking-tighter font-body text-xl">Shundo</p>
          </div>
          <a
            href="https://discord.gg/xBk67uWmbt"
            target="_blank"
            class="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity duration-200 ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
              viewBox="0 0 56 43"
              fill="none"
            >
              <g clip-path="url(#clip0_502_20)">
                <path
                  d="M47.4374 3.60118C43.7582 1.89461 39.874 0.683903 35.8842 0C35.3382 0.988823 34.8442 2.00619 34.4042 3.04784C30.1543 2.39901 25.8324 2.39901 21.5825 3.04784C21.1423 2.0063 20.6483 0.988942 20.1025 0C16.1101 0.689678 12.2234 1.90326 8.54046 3.61011C1.22884 14.5698 -0.753228 25.2574 0.237806 35.7932C4.51968 38.9984 9.31231 41.4359 14.4074 43C15.5546 41.4367 16.5698 39.7783 17.4421 38.0422C15.7853 37.4153 14.1861 36.6418 12.6632 35.7307C13.064 35.4362 13.456 35.1327 13.8348 34.8382C18.2662 36.9496 23.1029 38.0443 28 38.0443C32.897 38.0443 37.7337 36.9496 42.1651 34.8382C42.5483 35.155 42.9403 35.4585 43.3368 35.7307C41.8108 36.6433 40.2088 37.4183 38.549 38.0467C39.4202 39.7819 40.4355 41.439 41.5837 43C46.6831 41.4422 51.4795 39.0058 55.7621 35.7976C56.9249 23.5795 53.7756 12.9901 47.4374 3.60118ZM18.6975 29.3137C15.9358 29.3137 13.6542 26.7746 13.6542 23.6509C13.6542 20.5272 15.8565 17.9658 18.6886 17.9658C21.5208 17.9658 23.7848 20.5272 23.7363 23.6509C23.6879 26.7746 21.512 29.3137 18.6975 29.3137ZM37.3025 29.3137C34.5364 29.3137 32.2636 26.7746 32.2636 23.6509C32.2636 20.5272 34.4659 17.9658 37.3025 17.9658C40.139 17.9658 42.3854 20.5272 42.3369 23.6509C42.2885 26.7746 40.117 29.3137 37.3025 29.3137Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_502_20">
                  <rect width="56" height="43" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p class="text-sm flex gap-1">
              <span class="hidden md:block"> Join us on</span>{" "}
              <span class="block"> Discord </span>
            </p>
          </a>
        </div>
      </nav>
      <div class="pb-24" />
    </>
  );
});
