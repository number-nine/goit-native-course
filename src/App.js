import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";



import MainStack from "./stacks/MainStack/MainStack";
import { store, persistor } from "./store/store";



function App() {
 

  return (
    // }
    <Provider store={store}>
      {/* loading={<Text>Loading...</Text>} */}
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default registerRootComponent(App);
