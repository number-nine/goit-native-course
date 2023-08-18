import React, { useState } from "react";
import { Button } from "react-native";

import ButtonWrapperStyles from "./ButtonWrapper.style";

export default ButtonWrapper = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  return <Button {...props} style={[ButtonWrapperStyles.wrapper]} />;
};
