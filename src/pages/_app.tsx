import Head from "next/head";
import { AppProps } from "next/app";
import { ReactElement } from "react";

import "~/styles/style.css";

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <title>Band Builder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="inset-0 w-screen h-screen bg-gray-800">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
