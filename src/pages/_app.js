/*
 * File: _app.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 5th 2021, 8:58:22 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday January 5th 2021 8:58:22 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import Head from "next/head";
import Header from "../modules/header/Header";
import Footer from "../modules/footer/Footer";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
