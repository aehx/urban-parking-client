import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import AppNav from "./navigation/AppNav";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNav />
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
}
