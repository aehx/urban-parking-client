import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { AuthProvider } from "./context/AuthContext";
import AppNav from "./navigation/AppNav";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNav />
        </PersistGate>
      </Provider>
      </ThemeProvider>
    </AuthProvider>
  );
}
