import { Image } from "native-base";
import React from "react";

const logo = require('@/assets/images/logo/logo.png');

const rate = 1
const Logo = () => {
  return <Image alt="LOGO" style={{ marginLeft: -5 }} source={logo} width={31 * rate} height={31 * rate} />
}
export default Logo;
