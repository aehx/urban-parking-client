import { Text, TouchableOpacity, View } from "react-native";
import { useContext, useState } from "react";
import {styles} from "../style/screen/LoginScreen"
import { inputStyles } from "../style/component/inputField";
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
          label={"Email ID"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              style={inputStyles.icon}
            />
          }
          keyboardType="email-address"
          onChangeText={(text) => {
            setEmail(text);
          }}
          value={email}
        />
        <InputField
          label={"Password"}
          onChangeText={(text) => {
            setPassword(text);
          }}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              style={inputStyles.icon}
            />
          }
          inputType="password"
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


