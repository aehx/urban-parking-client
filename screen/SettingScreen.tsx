import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useContext } from "react";
import SettingsButton from "../components/SettingsButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AuthContext } from "../context/AuthContext";

const SettingScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
    >
      <View style={{ paddingLeft: 40, paddingBottom: "60%" }}>
        <SettingsButton
          label="Favoris"
          icon={
            <Ionicons
              name="heart-outline"
              size={22}
              color="#ddd"
              style={{ marginRight: 10 }}
            />
          }
          action={() => {
            navigation.navigate("Favorites");
          }}
        />
        <SettingsButton
          label="profil"
          icon={
            <Ionicons
              name="person-outline"
              size={22}
              color="#ddd"
              style={{ marginRight: 10 }}
            />
          }
          action={() => {
            navigation.navigate("Profil");
          }}
        />
        <SettingsButton
          label="Thème"
          icon={
            <Icon
              name="theme-light-dark"
              size={22}
              color="#ddd"
              style={{ marginRight: 10 }}
            />
          }
          action={() => {}}
        />
      </View>
      <View style={{ paddingLeft: 40 }}>
        <SettingsButton
          label="Déconnexion"
          icon={
            <Icon
              name="logout"
              size={22}
              color="#ddd"
              style={{ marginRight: 10 }}
            />
          }
          action={() => {
            logout();
          }}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B131D",
    justifyContent: "flex-end",
  },
});
export default SettingScreen;
