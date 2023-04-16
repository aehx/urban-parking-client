import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import InputField from "../components/inputField";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function RegisterScreen({ navigation }) {
  const { signup } = useContext(AuthContext);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Urban Parking</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.loginText}>Inscription</Text>
        <InputField
          input="form"
          style={{ flex: 1, paddingVertical: 0, color: "#ccc" }}
          label={"Nom d'utilisateur"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
          onChangeText={(text) => {
            setUser({ ...user, username: text });
          }}
          value={user.username}
        />
        <InputField
          input="form"
          style={{ flex: 1, paddingVertical: 0, color: "#ccc" }}
          label={"Email"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          keyboardType="email-address"
          onChangeText={(text) => {
            setUser({ ...user, email: text });
          }}
          value={user.email}
        />
        <InputField
          input="form"
          style={{ flex: 1, paddingVertical: 0, color: "#ccc" }}
          label={"mot de passe"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonFunction={() => {}}
          onChangeText={(text) => {
            setUser({ ...user, password: text });
          }}
          value={user.password}
        />
        <InputField
          input="form"
          style={{ flex: 1, paddingVertical: 0, color: "#ccc" }}
          label={"confirmer le mot de passe"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          inputType="password"
          fieldButtonFunction={() => {}}
          onChangeText={(text) => {
            setUser({ ...user, confirmPassword: text });
          }}
          value={user.confirmPassword}
        />
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => signup(user)}
        >
          <Text>S'inscrire</Text>
        </TouchableOpacity>
        <View style={styles.redirectButtonContainer}>
          <Text style={styles.text}>Déjà inscrit ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.textSignUp}>Connectez-vous ! </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B131D",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#2795FF",
    fontSize: 40,
  },
  loginText: {
    fontSize: 25,
    marginBottom: 20,
    color: "#cccccc9c",
  },
  text: {
    color: "#cccccc9c",
    marginRight: 5,
  },
  inputContainer: {
    width: "80%",
    alignItems: "flex-start",
  },
  submitContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonSubmit: {
    width: "75%",
    alignItems: "center",
    backgroundColor: "#2795FF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  textSignUp: {
    color: "#2795FF",
  },
  redirectButtonContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
});
