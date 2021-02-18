/*
 * File: Button.stories.js
 * Project: webapp-rrs
 * Created Date: Tuesday, January 12th 2021, 12:08:43 am
 * Author: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Last Modified: Tuesday January 12th 2021 12:08:43 am
 * Modified By: Jebarin <jebarin.johnrose@nutechnologyinc.com>
 * -----
 * Copyright (c) 2021 All rights reserved
 * ------------------------------------
 */

import React from "react";
import Button from "./Button";

export default {
  title: "Button Component",
  component: Button,
};

// We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { background: "#ff0", label: "Button" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, label: "😄👍😍💯" };
