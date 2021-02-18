/*
 * File: category.js
 * Project: webapp-rrs
 * Created Date: Thursday, December 31st 2020, 12:56:53 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Thursday December 31st 2020 12:56:53 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2020 All rights reserved
 * ------------------------------------
 */

import Category from "../modules/category/Category";
import Link from "next/link";

const CategoryPage = () => {
  return (
    <div>
      <Category />
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default CategoryPage;
