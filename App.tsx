import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./context/AuthContext";
import AppNav from "./navigation/AppNav";

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
