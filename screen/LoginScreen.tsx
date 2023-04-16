import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext, useState } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";
import InputField from "../components/inputField";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Urban Parking</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.loginText}>Connexion</Text>
        <InputField
          input="form"
          label={"Email ID"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          style={{ flex: 1, paddingVertical: 0, color: "#ccc" }}
          keyboardType="email-address"
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
        />
        <InputField
          input="form"
          label={"Password"}
          onChangeText={(text) => {
            setPassword(text);
          }}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{ marginRight: 5 }}
            />
          }
          style={{ flex: 1, paddingVertical: 0, color: "#ccc" }}
          inputType="password"
          fieldButtonLabel={"Oublié ?"}
          fieldButtonFunction={() => {}}
        />
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity
          style={styles.buttonSubmit}
          onPress={() => {
            login(email.toLowerCase(), password);
          }}
        >
          <Text>Connexion</Text>
        </TouchableOpacity>
        <View style={styles.redirectButtonContainer}>
          <Text style={styles.text}>Nouveau sur l'app ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.textSignUp}>Inscrivez-vous ! </Text>
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
