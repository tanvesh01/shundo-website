import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import HomeHeader from "~/components/landing/HomeHeader";

export default component$(() => {
  return <HomeHeader />;
});

export const head: DocumentHead = {
  title: "Shundo | a productivity powerhouse for Windows",
  meta: [
    {
      name: "description",
      content:
        "shundo is an app for windows that changes the way you do things on windows and how fast you do them. ",
    },
    {
      property: "og:title",
      content: "Shundo | a productivity powerhouse for Windows",
      key: "ogtitle",
    },
    {
      property: "og:description",
      content:
        "shundo is an app for windows that changes the way you do things on windows and how fast you do them. ",
      key: "ogdesc",
    },
    {
      property: "og:image",
      content: "/images/Shundo_og_image.png",
      key: "ogimage",
    },
    {
      property: "og:url",
      content: "https://shundo.app",
      key: "ogurl",
    },
    {
      name: "twitter:image:src",
      content: "/images/Shundo_og_image.png",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:creator",
      content: "@Sarve___tanvesh",
      key: "twhandle",
    },
  ],
};

{
  /* <meta name="twitter:image:src" content="/meta.png"></meta>
<meta name="twitter:card" content="summary_large_image"></meta>
<meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */
}

// <meta property="og:title" content={"Tanvesh"} key="ogtitle" />
// <meta property="og:description" content={DESCRIPTION} key="ogdesc" />
// <meta property="og:image" content={"/meta.png"} key="ogimage" />
// <meta property="og:url" content={currentURL} key="ogurl" />
