import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.scss";
import "@/styles/graph.module.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css"
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 user-scalable=0"
        ></meta>
        <title>호랑에듀</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
