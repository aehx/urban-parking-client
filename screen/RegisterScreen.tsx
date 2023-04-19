import { useContext, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";
import { styles } from "../style/screen/RegisterScreen";
import InputField from "../components/inputField";
import { RegisterScreenProps } from "../typescript/navigation/navigation.types";
import { ThemeContext } from "../context/ThemeContext";

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const { signup,registerError } = useContext(AuthContext);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const {theme} = useContext(ThemeContext)

  return (
    <SafeAreaView style={[styles.container,theme.background]}>
      <Text style={[styles.title,theme.authColor.secondary]}>Urban Parkings</Text>
      <View style={styles.inputContainer}>
        <Text style={[styles.loginText,theme.authColor.primary]}>Inscription</Text>
        <InputField
          label={"Nom d'utilisateur"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              style={[{ marginRight: 5},theme.authColor.tertiary]}
            />
          }
          keyboardType="email-address"
          onChangeText={(text) => {
            setUser({ ...user, username: text });
          }}
          value={user.username}
        />
        <InputField
          label={"Email"}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              style={[{ marginRight: 5},theme.authColor.tertiary]}
            />
          }
          keyboardType="email-address"
          onChangeText={(text) => {
            setUser({ ...user, email: text });
          }}
          value={user.email}
        />
        <InputField
          label={"mot de passe"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              style={[{ marginRight: 5},theme.authColor.tertiary]}
            />
          }
          inputType="password"
          onChangeText={(text) => {
            setUser({ ...user, password: text });
          }}
          value={user.password}
        />
        <InputField
          label={"confirmer le mot de passe"}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              style={[{ marginRight: 5},theme.authColor.tertiary]}
            />
          }
          inputType="password"
          onChangeText={(text) => {
            setUser({ ...user, confirmPassword: text });
          }}
          value={user.confirmPassword}
        />
        {registerError ? <View style={styles.errorContainer}><Text style={styles.error}>{registerError}</Text></View>:null}
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity
          style={[styles.buttonSubmit,theme.authColor.buttonBackground]}
          onPress={() => signup(user)}
        >
          <Text>S'inscrire</Text>
        </TouchableOpacity>
        <View style={styles.redirectButtonContainer}>
          <Text style={[styles.text,theme.authColor.primary]}>Déjà inscrit ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={theme.authColor.secondary}>Connectez-vous ! </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
