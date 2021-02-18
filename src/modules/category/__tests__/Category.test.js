/*
 * File: Category.test.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 5th 2021, 11:05:05 pm
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday January 5th 2021 11:05:05 pm
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import { shallow } from "enzyme";
import Category from "../Category";

describe("<Category />", () => {
  it("should render the component", () => {
    const wrapper = shallow(<Category />);
    expect(wrapper).toBeDefined();
  });
});
