import { registerRootComponent } from "expo";


import MainStack from "./stacks/MainStack/MainStack";


function App() {
  return (
    <MainStack/>
  );
}

export default registerRootComponent(App);
