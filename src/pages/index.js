/*
 * File: index.js
 * Project: webapp-rrs
 * Created Date: Wednesday, December 23rd 2020, 12:07:53 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Wednesday December 23rd 2020 12:07:53 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */
import Link from "next/link";

const Index = () => {
  return (
    <>
      <div>Home Page</div>
      <Link href="/category">Go to Category</Link>
    </>
  );
};

export default Index;
