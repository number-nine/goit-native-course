import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import MainStack from "./stacks/MainStack/MainStack";

function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default registerRootComponent(App);
